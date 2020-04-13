import React from 'react'
import PropTypes from 'prop-types'
import styles from './HomeSlogan.module.css'

function HomeSlogan (props) {
  const {textChunks} = props
  if (!textChunks || Array.isArray(textChunks) && textChunks.length === 0) return null;
  return (
    <div className={styles.container}>
        {textChunks.map( (chunk, index) => (
            <div className={styles.chunk} key={`chunk_${index}`}>
                {chunk.content}
            </div>
        ))}
    </div>
  )
}

HomeSlogan.propTypes = {
    textChunks: PropTypes.array
}

export default HomeSlogan
