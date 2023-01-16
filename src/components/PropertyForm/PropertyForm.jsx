import React from 'react'
import { Container } from 'reactstrap'
import { motion } from 'framer-motion'
import styles from './propertyForm.module.scss'

const PropertyForm = () => {
  return (
    <section className={styles.propertyForm}>
      <Container>
        <h4 className='text-center fs-4'>
          Your property with us and be Confident that Your Room will be Filled
          Out!
        </h4>

        <div className={styles.formContainer}>
          <h2 className={styles.formHeading}>Add A New Property</h2>
          <form action='#'>
            <div className={styles.formFamily}>
              <div className={styles.formGroup}>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Enter Name' id='name' />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='address'>Address</label>
                <input type='text' placeholder='Enter Address' id='address' />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='unitNumber'>Unit Number</label>
                <input type='text' placeholder='Enter Unit' id='unitNumber' />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='city'>City</label>
                <input type='text' placeholder='Enter City' id='city' />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='state'>State</label>
                <input type='text' placeholder='Enter State' id='state' />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='type'>Room Type</label>
                <input type='text' placeholder='Enter Room Type' id='type' />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='price'>Price</label>
                <input type='text' placeholder='Enter Price' id='price' />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='category'>Category</label>
                <input type='text' placeholder='Enter Category' id='category' />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='description'>Description</label>
              <textarea
                name='description'
                id='description'
                cols='30'
                rows='10'
                placeholder='Enter Description'></textarea>
            </div>
            <div className={styles.upload}>
              <span className={styles.uploadText}>
                <p>
                  Drag your images here, or{' '}
                  <label htmlFor='upload'> browse</label>
                </p>
                <span>Supported: JPG, JPEG, PNG</span>
              </span>

              <input type='file' name='' id='upload' />
            </div>
            <div className='text-center mt-5 mb-5'>
              <motion.button
                whileTap={{ scale: 1.1 }}
                className='btn__primary px-5 py-4'>
                Add new property
              </motion.button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default PropertyForm
