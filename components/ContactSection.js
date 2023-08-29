import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
// import { Container } from '@mui/system';
import Image from 'next/image';
import { Container, Form } from 'react-bootstrap';
import styles from '@/styles/ContactSection.module.css';

function ContactSection() {
    return (
        <Box py={7} className={`${styles.contactsection}`} id="contact">
            <Container>
                <Grid container spacing={5}>
                    <Grid item lg={6} md={6} xs={12}>
                        <Box className={`${styles.imgdiv}`}>
                            <Image src={require('./assets/contact/contact.jpeg')} alt='' className="img-fluid" />
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12}>
                        <Box p={5} className={`${styles.contactform} position-relative shadow ${styles.bgbrandprimary}`}>
                           
                            <Box className={`${styles.main_heading_text} ${styles.whitebr} text-center text-white mb-5`}>
                                <Typography variant='h1' className={`${styles.haedingbarcenter} ${styles.headingh1} text-uppercase position-relative`}>
                                    Contact Us
                                </Typography>
                            </Box>

                            <Box className={`${styles.subheadingtxt}`}>
                                <Typography variant='p' className="text-white text-center">
                                    Get in touch with us today to discuss how we can help your business achieve its goals.
                                </Typography>
                            </Box>

                            {/* <div className="alert alert-success" role="alert" id="success_message"></div> */}
                            {/* <div className="alert alert-danger" role="alert" id="error_message"></div> */}
                            <Form className="contact_us_form mt-4" id="contact_us_f">
                                <Grid item mb={5}>
                                    <Typography variant='label' ></Typography>
                                    <input type="text" placeholder="Full Name" name="fullname" id="fullname" className={`form-control ${styles.bgtransparent} border-0 ${styles.textwhite} ${styles.contactinput} ps-0`} />
                                </Grid>

                                <Grid item mb={5}>
                                    <Typography variant='label' ></Typography>
                                    <input type="email" placeholder="Email" name="email" id="email" className={`form-control ${styles.bgtransparent} border-0 ${styles.textwhite} ${styles.contactinput} ps-0`} />
                                </Grid>

                                <Grid item mb={5}>
                                    <Typography variant='label' ></Typography>
                                    <input type="tel" placeholder="Phone" name="phone" className={`form-control ${styles.bgtransparent} border-0 ${styles.textwhite} ${styles.contactinput} ps-0`} id="phone" />
                                </Grid>

                                <Grid item mb={5} >
                                    <Typography variant='label' ></Typography>
                                    <input type="text" placeholder="Subject" name="subject" className={`form-control ${styles.bgtransparent} border-0 ${styles.textwhite} ${styles.contactinput} ps-0`} id="subject" />
                                </Grid>

                                <Grid item mb={3}>
                                    <Typography variant='label' ></Typography>
                                    <textarea placeholder="Message" className={`form-control ${styles.bgtransparent} border-0 ${styles.textwhite} ${styles.contactinput} ps-0`} name="message" id="message" rows="5"></textarea>
                                </Grid>

                                <Button type="button" className="btn btn-outline-light px-3 mt-4" id="send_message">Submit</Button>
                            </Form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ContactSection