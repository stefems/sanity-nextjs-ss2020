import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './HomeModule.module.css'
import client from '../../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

function HomeModule (props) {
  const {project} = props
  if (!project) {
    return (<div>No Project found.</div>);
  }
  const slug = project.slug || "";
  const style = {
    backgroundImage: `url("${urlFor(project.image)
      .width(2000)
      .auto('format')
      .url()}")`
  };
  return (
    <Link prefetch href="/project/[slug]" as={`/project/${slug.current}`}>
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <div className={styles.root} style={style}>
          <div className={styles.content}>
            <h1 className={styles.title}>{project.title}</h1>
          </div>
        </div>
     </div>
    </Link>
  )
}

HomeModule.propTypes = {
  project: PropTypes.object,
}

export default HomeModule
