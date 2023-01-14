import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { icons, images } from '../../assets/images'
import SingleFeature from '../SingleFeature/SingleFeature'
import { motion } from 'framer-motion'

const feature = [
  {
    icon: icons.money,
    text: 'Pay as Little as possible!',
  },
  {
    icon: icons.community,
    text: 'Enjoy wisdom of community!',
  },
  {
    icon: icons.Landlord,
    text: 'Let somebody else take care of Landlord!',
  },
  {
    icon: icons.environment,
    text: 'Enjoy peaceful Environment!',
  },
  {
    icon: icons.safe,
    text: 'Stay Safe! Save Money!',
  },
  {
    icon: icons.pay,
    text: 'Pay for what you use!',
  },
]

const Features = () => {
  return (
    <section>
      <Container>
        <h2 className='heading__secondary'>
          minimum living cost takes care of everything
        </h2>
        <Row>
          <Col lg='3'>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={images.InfoSection}
              alt=''
            />
          </Col>
          <Col lg='9'>
            <Row>
              {feature.map((item, index) => (
                <SingleFeature text={item.text} icon={item.icon} key={index} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
