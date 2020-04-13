import React from 'react'
import PropTypes from 'prop-types'
import styles from './HeroText.module.css'

function HeroText (props) {
    const {text} = props
    return (
        <div className={styles.text}>
         {text}
        </div>
    )
}
HeroText.propTypes = {
    project: PropTypes.object,
}

export default HeroText