import React from 'react'
import { Col } from 'reactstrap'
import { icons } from '../../assets/images'
import styles from './propertyCard.module.scss'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const PropertyCard = ({ title, image, price }) => {
  return (
    <Col lg='4'>
      <motion.div whileHover={{ scale: 1.1 }} className={styles.propertyCard}>
        <div className={styles.image}>
          <img src={image} alt='' />
        </div>
        <div className={styles.cardBody}>
          <h4 className={styles.propertyName}>{title}</h4>
          <div className={styles.propertyInfo}>
            <p>Private Room</p>
            <h2>${price}/Month</h2>
          </div>
        </div>
        <div className={styles.propertyActions}>
          <span>
            <img src={icons.bed} alt='' />
            <p>4</p>
          </span>
          <span>
            <img src={icons.Shower} alt='' />
            <p>4</p>
          </span>
          <span>
            <img src={icons.Size} alt='' />
            <p>4</p>
          </span>
        </div>
      </motion.div>
    </Col>
  )
}

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  price: PropTypes.number.isRequired,
}

export default PropertyCard
