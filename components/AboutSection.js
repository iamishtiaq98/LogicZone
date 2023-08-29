import React from 'react';
import 'react-bootstrap';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { Box, Grid, Typography } from '@mui/material';
import styles from '@/styles/AboutSection.module.css';

function AboutSection() {
  return (
    <Container className={`about-us-section  ${styles.section_padd}`} id='about'>
        <Grid container spacing={3.5} className='align-items-center'>
                <Grid item lg={6} md={5} sm={12}>
                    <Box className="about_img">
                        <Image className='img-fluid' src={require('./assets/about/about.jpg')} alt='' />
                    </Box>
                </Grid>
                <Grid item lg={6} md={7} sm={12}>
                    <Box >
                        <div className={`${styles.mainheadingtext} ${styles.headingtextleft} mb-5`}>
                            <Typography variant='h1' className={`${styles.haedingbar} ${styles.heading}`}>About Us</Typography>
                        </div>
                        <Typography variant='p'>
                            We are a team of highly skilled and experienced professionals who are passionate about creating beautiful and functional websites that exceed our clients' expectations. Our agency was founded with the goal of providing top-notch web development and design services to businesses of all sizes, from startups to large enterprises.
                            We work closely with our clients throughout the development process to ensure that their vision is realized.
                        </Typography>
                        <Box className={`${styles.aboutlistcontent} mt-4`}>
                            <ul className='ps-0 list-unstyled'>
                                <li className="d-flex align-items-center">
                                    <div className={`${styles.icondiv} me-3`}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM112 256C112 176.5 176.5 112 256 112C335.5 112 400 176.5 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256zM256 336C300.2 336 336 300.2 336 256C336 211.8 300.2 176 256 176C211.8 176 176 211.8 176 256C176 300.2 211.8 336 256 336zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64z"></path></svg>
                                        </span>
                                    </div>
                                    <div className={`${styles.listcontent}`}>
                                        <h4>Mission</h4>
                                        <p className="mb-0">
                                            Our mission is to provide our clients with the highest quality services and solutions that help them succeed online. We believe in taking a collaborative approach to our work, working closely with our clients to understand their unique needs and goals.
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center mt-3">
                                    <div className={`${styles.icondiv} me-3`}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM112 256C112 176.5 176.5 112 256 112C335.5 112 400 176.5 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256zM256 336C300.2 336 336 300.2 336 256C336 211.8 300.2 176 256 176C211.8 176 176 211.8 176 256C176 300.2 211.8 336 256 336zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64z"></path></svg>
                                        </span>
                                    </div>
                                    <div className={`${styles.listcontent}`}>
                                        <h4>Vision</h4>
                                        <p className="mb-0">
                                            At our web development and design agency, our vision is to become the leading provider of high-quality and innovative web solutions that empower businesses to succeed in the digital world.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
  )
}

export default AboutSection