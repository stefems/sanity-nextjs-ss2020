import React, {Component} from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { MdStyle } from 'react-icons/md';
import imageUrlBuilder from '@sanity/image-url'
import styles from './SuggestedModule.module.css'
import client from '../../client'


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

class SuggestedModule extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            suggestions: null   
        };
        this.get_suggestions();
    }

    get_suggestions = () => {
        const pageQuery = `
         *[_type == "project" && references($tag_ids) && _id != $project_id]
        `;
        const tags = this.props.tags;
        console.log(tags)
        const project_id = this.props.projectId;
        const tag_ids = tags.map( ({_id}) => _id);
        client.fetch(pageQuery, {tag_ids, project_id}).then(res => {
            //max: 3
            this.setState({suggestions: res})
        })
    }

    tags = () => {
        return (
            this.props.tags.map( (tag) => (
                <span className={styles.chip}>{tag.name}</span>
            ))
        );
    }

    render() {
        const { suggestions } = this.state;
        if (suggestions == null) {
            return "Loading...";
        }
        console.log(this.state.suggestions);
        return (
            <div className={styles.container}>
                <h3 className={styles.title}>Similar Projects <span className={styles.tagContainer}><MdStyle className={styles.tag}/>{this.tags()}</span></h3>
                <div className={styles.projects}>
                    {this.state.suggestions.map( (project) => (
                        <Link className={styles.project} prefetch href="/project/[slug]" as={`/project/${project.slug.current}`} key={project._id}>
                            <div className={styles.project}>
                                <img className={styles.image} src={urlFor(project.image)} />
                                <div className={styles.title}>{project.title}</div>
                                <div className={styles.subtitle}>{project.subtitle}</div>
                            </div>
                        </Link>  
                    ))}
                </div>
               
                {/* <Link prefetch href="/project/[slug]" as={`/project/${slug.current}`}>
                    
                </Link> */}
            </div>
        );
    }
}

SuggestedModule.propTypes = {
  project: PropTypes.object,
}

export default SuggestedModule
