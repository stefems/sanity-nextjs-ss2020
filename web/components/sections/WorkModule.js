import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './WorkModule.module.css'
import client from '../../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

function WorkModule (props) {
  const {project} = props
  if (!project) {
    return (<div>No Project found.</div>);
  }
  // const image = props.use_alt_image === false ? project.image : project.altImage;
  const image = !props.use_alt_image ? project.image : project.altImage;
  const portionClass = styles["portionContainer_" + props.index % 2];
  const slug = project.slug || "";
  return (
    <div className={styles.container}>
        <Link prefetch href="/project/[slug]" as={`/project/${slug.current}`}>
            <div className={portionClass}>
                {props.index % 2 === 0? <div>
                    <img className={styles.image} src={urlFor(image)}/>
                </div> : ""}
                <div className={styles.textContainer}>
                    <div className={styles.title}>{project.title}</div>
                    <div className={styles.subtitle}>{project.subtitle}</div>
                </div>
                {props.index % 2 == 1? <div>
                    <img className={styles.image} src={urlFor(project.image)}/>
                </div> : ""}
            </div>
        </Link>
    </div>
  )
}

WorkModule.propTypes = {
  project: PropTypes.object,
}

export default WorkModule
