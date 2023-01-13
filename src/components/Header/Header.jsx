import React from 'react'
import { Container, Row } from 'reactstrap'
import { icons } from '../../assets/images'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Row>
          <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
              <img src={icons.logo} alt='logo' />
            </div>
            <div className={styles.navContainer}>
              <ul className={styles.navigation}>
                <li className={styles.active}>Home</li>
                <li>Landlord</li>
                <li>Tenants</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
