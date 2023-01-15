import React from 'react'
import { Container, Row } from 'reactstrap'
import Features from '../components/Features/Features'
import Hero from '../components/Hero/Hero'
import PropertiesList from '../components/Properties/PropertiesList'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <section>
        <Container>
          <div className='d-flex justify-content-between align-utems-center '>
            <h4 className='heading__secondary'>List of Properties</h4>
            <button>View All Properties</button>
          </div>
          <Row>
            <PropertiesList />
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Home
