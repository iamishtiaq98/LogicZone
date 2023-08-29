import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/styles/Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Image from 'next/image';
import Logo from "./assets/logo/logo.png";
import Scrollspy from 'react-scrollspy';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
            <Container className={styles.navcontainer}>
                <Navbar.Brand href="/">
                    <Image className={`${styles.logo}`} width={220} src={Logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Scrollspy
                        className={`navbar-nav ms-auto pt-2 px-3 ${styles.togglemenu}`}
                        items={['home', 'about', 'services', 'portfolio', 'testimonials', 'contact']}
                        currentClassName={`${styles.active}`}>
                            <li><Nav.Link eventKey={1} href="/#home" className={`${styles.navlink}`}>Home</Nav.Link></li>
                            <li><Nav.Link eventKey={2} href="/#about" className={styles.navlink}>About</Nav.Link></li>
                            <li><Nav.Link eventKey={3} href="/#services" className={styles.navlink}>Services</Nav.Link></li>
                            <li><Nav.Link eventKey={4} href="/#portfolio" className={styles.navlink}>Portfolio</Nav.Link></li>
                            <li><Nav.Link eventKey={5} href="/#testimonials" className={styles.navlink}>Testimonials</Nav.Link></li>
                            <li><Nav.Link eventKey={5} href="/#contact" className={styles.navlink}>Contact</Nav.Link></li>
                    </Scrollspy>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;