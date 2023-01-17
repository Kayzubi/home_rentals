import React from 'react'
import { icons } from '../../assets/images'
import { Col, Container, Row } from 'reactstrap'
import styles from './footer.module.scss'
import { MdLocationPin, MdPhone, MdLocalPrintshop } from 'react-icons/md'
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGooglePlus,
  AiOutlineWifi,
} from 'react-icons/ai'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.row}>
          <Col lg='6'>
            <div className='mb-5'>
              <img src={icons.logo} alt='' />
            </div>
          </Col>
          <Col lg='6'>
            <div className={styles.info}>
              <span className='d-flex gap-3 align-items-center text-white'>
                <MdLocationPin size='20px' color='white' />
                <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
              </span>
              <div className='d-flex gap-3 align-items-center mt-4'>
                <span className='d-flex gap-3 align-items-center text-white'>
                  <MdPhone color='white' size='20px' />
                  <p>(123) 456-7890</p>
                </span>{' '}
                <span className='d-flex gap-3 align-items-center text-white'>
                  <MdLocalPrintshop size='20px' color='white' />
                  <p>(123) 456-7890</p>
                </span>
              </div>
              <div className='d-flex justify-content-between align-items-center text-white mt-4'>
                <p className='fs-6'>Social Media</p>
                <AiFillFacebook color='white' size='20px' />
                <AiOutlineTwitter color='white' size='20px' />
                <AiFillYoutube color='white' size='20px' />
                <AiOutlineLinkedin color='white' size='20px' />
                <AiOutlineInstagram color='white' size='20px' />
                <AiOutlineGooglePlus color='white' size='20px' />
                <AiOutlineWifi color='white' size='20px' />
              </div>
            </div>
          </Col>
          <Col lg='12'>
            <div className={styles.footerBottom}>
              <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>Help</li>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
              </ul>
              <span>
                Copyright © {year} Minimumlivingcost. All rights reserved
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
