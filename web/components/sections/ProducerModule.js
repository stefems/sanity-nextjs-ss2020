import React, {Component} from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ProducerModule.module.css'
import client from '../../client'
import groq from 'groq'


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

class ProducerModule extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className={styles.container}>
                <img className={styles.image} src={urlFor(this.props.person.image)} />
                <div className={styles.content}>
                    <div>{this.props.person.name}, <span>{this.props.person.title}</span></div>
                    <div className={styles.location}>{this.props.person.office.name}</div>
                </div>
            </div>
        );
    }
}

ProducerModule.propTypes = {
  person: PropTypes.object,
}

export default ProducerModule
