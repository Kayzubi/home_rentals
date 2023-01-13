import React from 'react'
import Header from '../Header/Header'
import { Container, Row, Col } from 'reactstrap'
import styles from './hero.module.scss'
import { FaSearch } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Header />
      <Container>
        <Row>
          <Col lg='8' className='d-flex align-items-center'>
            <div className={styles.heroHeading}>
              <h1>
                The most affortable place to stay in the san franciso bay area
              </h1>
            </div>
          </Col>
          <Col lg='4' className='d-flex align-items-center'>
            <div>
              <div className={styles.map}>map</div>
              <div>
                <div className={styles.mapInput}>
                  <input type='text' placeholder='All text' disabled />
                  <input type='text' placeholder='Neighborhood' disabled />
                  <button>
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
