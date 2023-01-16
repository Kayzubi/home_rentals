import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Features from '../../components/Features/Features'
import Hero from '../../components/Hero/Hero'
import PropertiesList from '../../components/Properties/PropertiesList'

import { images } from '../../assets/images'

import { motion } from 'framer-motion'
import properties from '../../properties'
import './home.scss'
import PropertyForm from '../../components/PropertyForm/PropertyForm'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <section>
        <Container>
          <div className='d-flex justify-content-between align-utems-center '>
            <h4 className='heading__secondary'>List of Properties</h4>
            <span>
              <motion.button whileTap={{ scale: 1.1 }} className='btn__primary'>
                View All Properties
              </motion.button>
            </span>
          </div>
          <PropertiesList data={properties} />
        </Container>
      </section>
      <section className='cta'>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='cta__gallery'>
                <div className='gallery'>
                  <div className=' gallery-image gallery-image__1'>
                    <img src={images.flexible} alt='' />
                    <p>Flexible Leases</p>
                  </div>
                </div>
                <div className='gallery'>
                  <div className='gallery-image gallery-image__2'>
                    <img src={images.happiness} alt='' />
                    <p>7-Day Happiness Guaranteed</p>
                  </div>
                </div>
                <div className='gallery'>
                  <div className='gallery-image gallery-image__3'>
                    <img src={images.cleaning} alt='' />
                    <p>Monthly House Cleaning</p>
                  </div>
                </div>
                <div className='gallery'>
                  <div className='gallery-image gallery-image__4'>
                    <img src={images.Roomate} alt='' />
                    <p>Choose Your Own Roommate</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg='6'
              className='d-flex flex-column gap-3 justify-content-center p-5'>
              <h1 className='fs-1 fw-bold pe-5'>
                Flexibility and options to suit your lifestyle.
              </h1>
              <p className='cta_text'>
                You need it? We got it. We make finding your next home easy,
                comfortable, and simple. From our happiness guarantee to our
                selective roommate finder option. We provide you the flexibility
                that you most desire.
              </p>
              <span>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className='btn__primary'>
                  search rooms
                </motion.button>
              </span>
            </Col>
          </Row>
        </Container>
      </section>
      <PropertyForm />
      <Footer />
    </div>
  )
}

export default Home
