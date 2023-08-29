import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import styles from '@/styles/ServicesSection.module.css';

function ServicesSection() {
    
    return (
        <Box className={`services_section ${styles.sectionbg}  ${styles.service_section_padd}`} id="services">
            <Container>
                <Grid container>
                <Grid item md={12}>
                    <div className={`${styles.mainheadingtext} text-center mb-5`}>
                        <h1 className={`${styles.haedingbarcenter} ${styles.textuppercase} ${styles.positionrelative} `}>
                            Our Services
                        </h1>
                    </div>
                </Grid>
                </Grid>
                <Grid container className='flex-row pb-5'>
                    <Grid item md={1}>
                    </Grid>
                    <Grid item md={10} className='mt-5'>
                        <Grid container spacing={3.5}>
                            <Grid item lg={4} md={6} sx={{mt:{lg:5,sm:0}}}>
                                <Box className={`${styles.servicebox} service_box_hover_1 bg-white h-100 rounded shadow p-3`}>
                                    <Box className='service_img text-center'>
                                        <Image src={require('./assets/services/websitedesign.png')} alt="" />
                                    </Box>
                                    <Box className={`${styles.servicecontent} text-center pt-3`}>
                                        <Typography variant='h3'> Website Design </Typography>
                                        <Typography varient='p'>
                                            Our team of designers creates visually appealing and user-friendly websites that reflect our clients' brand identity and business goals.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={6} sx={{mb:{lg:5, sm:0 } }}>
                                <Box className={`${styles.servicebox} service_box_hover_1 bg-white h-100 rounded shadow p-3`}>
                                    <Box className='service_img text-center'>
                                        <Image src={require('./assets/services/websitedevelopment.png')} alt="" />
                                    </Box>
                                    <Box className={`${styles.servicecontent} text-center pt-3`}>
                                        <Typography variant='h3'> Website Development</Typography>
                                        <Typography variant='p'>
                                            We develop custom web applications and websites with the backend panels using the latest technologies and industry standards.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={6}  sx={{mt:{lg:5,sm:0}}}>
                                <Box className={`${styles.servicebox} service_box_hover_1 bg-white h-100 rounded shadow p-3`}>
                                    <Box className='service_img text-center'>
                                        <Image src={require('./assets/services/onlinestore.png')} alt="" />
                                    </Box>
                                    <Box className={`${styles.servicecontent} text-center pt-3`}>
                                        <Typography variant='h3'> Online Store</Typography>
                                        <Typography variant='p'>
                                            We build e-commerce solutions that enable businesses to sell their products and services online, including online stores, shopping carts, and payment gateways.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={6} sx={{mb:{lg:5, sm:0 } }}>
                                <Box className={`${styles.servicebox} service_box_hover_1 bg-white h-100 rounded shadow p-3`}>
                                    <Box className='service_img text-center'>
                                        <Image src={require('./assets/services/webmaintenance.png')} alt="" />
                                    </Box>
                                    <Box className={`${styles.servicecontent} text-center pt-3`}>
                                        <Typography variant='h3'>Website Maintenance</Typography>
                                        <Typography variant='p'>
                                            We offer website maintenance and support services to ensure that websites are secure, up-to-date, and performing optimally.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={6} sx={{mt:{lg:5,sm:0}}}>
                                <Box className={`${styles.servicebox} service_box_hover_1 bg-white h-100 rounded shadow p-3`}>
                                    <Box className='service_img text-center'>
                                        <Image src={require('./assets/services/graphicsdesign.png')} alt="" />
                                    </Box>
                                    <Box className={`${styles.servicecontent} text-center pt-3`}>
                                        <Typography variant='h3'>Graphics Design</Typography>
                                        <Typography variant='p'>
                                            We provide branding and graphic design services to help businesses establish a strong visual identity and stand out in their industry. We provide services in <strong>social media</strong> as well to grow your business.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={6} sx={{mb:{lg:5, sm:0 } }}>
                                <Box className={`${styles.servicebox} service_box_hover_1 bg-white h-100 rounded shadow p-3`}>
                                    <Box className='service_img text-center'>
                                        <Image src={require('./assets/services/goal.png')} alt="" />
                                    </Box>
                                    <Box className={`${styles.servicecontent} text-center pt-3`}>
                                        <Typography variant='h3'>Business Development</Typography>
                                        <Typography variant='p'>
                                            We help your business grow and thrive in today's competitive marketplace. We work closely with you to understand your needs and develop customized strategies that help you achieve your goals.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={1}>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ServicesSection 