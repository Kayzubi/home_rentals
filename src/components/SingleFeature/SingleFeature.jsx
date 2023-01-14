import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'reactstrap'
import styles from './singleFeature.module.scss'

const SingleFeature = ({ text, icon }) => {
  return (
    <Col lg='4' md='6'>
      <div className={styles.feature}>
        <div className={styles.featureIcon}>
          <img src={icon} alt='' />
        </div>
        <h3>{text}</h3>
      </div>
    </Col>
  )
}

SingleFeature.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
}

export default SingleFeature
