import React from 'react'
import { Container, Row } from 'reactstrap'
import Features from '../components/Features/Features'
import Hero from '../components/Hero/Hero'
import PropertiesList from '../components/Properties/PropertiesList'

import { motion } from 'framer-motion'
import properties from '../properties'

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
          <Row>
            <PropertiesList data={properties} />
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Home
