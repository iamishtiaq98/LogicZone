import React, { useRef } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import styles from '@/styles/Testimonials.module.css';
import 'material-icons/iconfont/material-icons.css';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';


function Testimonials() {

    const ref = useRef(null)
    const NextButton = () => {
        if (ref.current !== null) {
            ref.current.next()
        }
    }
    const PrevButton = () => {
        if (ref.current !== null) {
            ref.current.prev()
        }
    }

    return (

        <Box className={`${styles.section_padd} ${styles.testimonial_section}`} id="testimonials">
            <Container>
                <Grid container className={`reverse_row`}>
                    <Grid item lg={6} md={12}>
                        <Grid className={`${styles.mainheadingtext} ${styles.headingtextleft} mb-5`}>
                            <Typography variant='h1' className={`${styles.haedingbar} ${styles.heading}`}>
                                Clients Testimonials
                            </Typography>
                            <p className='pt-4'>
                                what our clients says
                            </p>
                        </Grid>

                        <Box className={`testimonial_content_div pe-5`} sx={{ overflow: 'hidden', position: "relative" }}>
                            <Carousel indicators={false} controls={false} ref={ref}>
                                <Carousel.Item className={styles.card_border}>
                                    <Box className={`mx-0`}>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        <br />
                                        <Typography className={`${styles.card_text}`} variant='p'>
                                            We have now completed multiple projects together and
                                            I have nothing but praise and satisfaction.
                                            I look forward to working on future projects together.
                                        </Typography>
                                        <br />
                                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        <Grid container className="align-items-center">
                                            <Grid item sm={2}>
                                                <Image
                                                    className={`img-fluid ${styles.img_round}`}
                                                    src={require('./assets/testimonial/dummy_profile.jpeg')}
                                                    alt="First slide" />
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Grid className="arrow-down d-none d-lg-block"></Grid>
                                                <Typography variant='h4'>
                                                    <Typography variant='strong'>Aaron M.</Typography>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Carousel.Item>
                                <Carousel.Item className={styles.card_border}>
                                    <Box className={`mx-0`}>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        <br />
                                        <Typography className={`${styles.card_text}`} variant='p'>
                                            Logics Zon is the one who takes time and care to understand your needs
                                            and make sure that everything is ok during the process.
                                            IT`s been a pleasure to do business with him. Thanks,
                                        </Typography>
                                        <br />
                                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        <Grid container className="align-items-center">
                                            <Grid item sm={2}>
                                                <Image
                                                    className={`img-fluid ${styles.img_round}`}
                                                    src={require('./assets/testimonial/dummy_profile.jpeg')}
                                                    alt="First slide" />
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Grid className="arrow-down d-none d-lg-block"></Grid>
                                                <Typography variant='h4'>
                                                    <Typography variant='strong'>Luc G.</Typography>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Carousel.Item>
                                <Carousel.Item className={styles.card_border}>
                                    <Box className={`mx-0`}>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        <br />
                                        <Typography className={`${styles.card_text}`} variant='p'>
                                            Good communication and fast completion of work.
                                            This was my first experience with Logics Zon and
                                            Logics Zon helped me navigate the system which made
                                            the experience better.
                                        </Typography>
                                        <br />
                                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        <Grid container className="align-items-center">
                                            <Grid item sm={2}>
                                                <Image
                                                    className={`img-fluid ${styles.img_round}`}
                                                    src={require('./assets/testimonial/dummy_profile.jpeg')}
                                                    alt="First slide" />
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Grid className="arrow-down d-none d-lg-block"></Grid>
                                                <Typography variant='h4'>
                                                    <Typography variant='strong'>Ernie M.</Typography>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Carousel.Item>
                                <Carousel.Item className={styles.card_border}>
                                    <Box className={`mx-0`}>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        <br />
                                        <Typography className={`${styles.card_text}`} variant='p'>
                                            On budget. Delivered early. The best work I have ever had in 12 years of experience.
                                            There is no doubt I will be a repeat customer.
                                        </Typography>
                                        <br />
                                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        <Grid container className="align-items-center">
                                            <Grid item sm={2}>
                                                <Image
                                                    className={`img-fluid ${styles.img_round}`}
                                                    src={require('./assets/testimonial/dummy_profile.jpeg')}
                                                    alt="First slide" />
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Grid className="arrow-down d-none d-lg-block"></Grid>
                                                <Typography variant='h4'>
                                                    <Typography variant='strong'>Thomas G.</Typography>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Carousel.Item>
                                <Carousel.Item className={styles.card_border}>
                                    <Box className={`mx-0`}>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        <br />
                                        <Typography className={`${styles.card_text}`} variant='p'>
                                            He took his time understanding the scope of work on this project
                                            and did his best to deliver that scope.
                                        </Typography>
                                        <br />
                                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        <Grid container className="align-items-center">
                                            <Grid item sm={2}>
                                                <Image
                                                    className={`img-fluid ${styles.img_round}`}
                                                    src={require('./assets/testimonial/dummy_profile.jpeg')}
                                                    alt="First slide" />
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Grid className="arrow-down d-none d-lg-block"></Grid>
                                                <Typography variant='h4'>
                                                    <Typography variant='strong'>Cody S.</Typography>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Carousel.Item>
                                <Carousel.Item className={styles.card_border}>
                                    <Box className={`mx-0`}>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        <br />
                                        <Typography className={`${styles.card_text}`} variant='p'>
                                            I have worked with Logics Zon on many projects. Each work provides excellent
                                            results as well as guidance and helps after the work whenever needed.
                                        </Typography>
                                        <br />
                                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        <Grid container className="align-items-center">
                                            <Grid item sm={2}>
                                                <Image
                                                    className={`img-fluid ${styles.img_round}`}
                                                    src={require('./assets/testimonial/dummy_profile.jpeg')}
                                                    alt="First slide" />
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Grid className="arrow-down d-none d-lg-block"></Grid>
                                                <Typography variant='h4'>
                                                    <Typography variant='strong'>Markku S.</Typography>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Carousel.Item>
                                <Carousel.Item className={styles.card_border}>
                                    <Box className={`mx-0`}>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        <br />
                                        <Typography className={`${styles.card_text}`} variant='p'>
                                            Logics Zon delivered a professionally done project and provided unlimited
                                            improvisations until requirements were met. Highly recommended!
                                        </Typography>
                                        <br />
                                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        <Grid container className="align-items-center">
                                            <Grid item sm={2}>
                                                <Image
                                                    className={`img-fluid ${styles.img_round}`}
                                                    src={require('./assets/testimonial/dummy_profile.jpeg')}
                                                    alt="First slide" />
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Grid className="arrow-down d-none d-lg-block"></Grid>
                                                <Typography variant='h4'>
                                                    <Typography variant='strong'>Asad D.</Typography>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Carousel.Item>
                                <Carousel.Item className={styles.card_border}>
                                    <Box className={`mx-0`}>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        <br />
                                        <Typography className={`${styles.card_text}`} variant='p'>
                                            Logics Zon was professional from start to finish on this project.
                                            Logics Zon worked well under time pressure and with a relatively
                                            limited budget. I`d be more than happy to recommend him.
                                        </Typography>
                                        <br />
                                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        <Grid container className="align-items-center">
                                            <Grid item sm={2}>
                                                <Image
                                                    className={`img-fluid ${styles.img_round}`}
                                                    src={require('./assets/testimonial/dummy_profile.jpeg')}
                                                    alt="First slide" />
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Grid className="arrow-down d-none d-lg-block"></Grid>
                                                <Typography variant='h4'>
                                                    <Typography variant='strong'>Maeve O.</Typography>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Carousel.Item>
                                <Carousel.Item className={styles.card_border}>
                                    <Box className={`mx-0`}>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        <br />
                                        <Typography className={`${styles.card_text}`} variant='p'>
                                            Amazing! Fast to respond, perfect english (which helped me a lot),
                                            inquired in-depth about the project before commiting despite a short time-span.
                                        </Typography>
                                        <br />
                                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        <Grid container className="align-items-center">
                                            <Grid item sm={2}>
                                                <Image
                                                    className={`img-fluid ${styles.img_round}`}
                                                    src={require('./assets/testimonial/dummy_profile.jpeg')}
                                                    alt="First slide" />
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Grid className="arrow-down d-none d-lg-block"></Grid>
                                                <Typography variant='h4'>
                                                    <Typography variant='strong'>Vladimir M.</Typography>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Carousel.Item>
                            </Carousel>
                            <Grid width={50} container mt={5} bottom={{ xl: 40, lg: 20, md: 5, sm: 20, xs: 10 }} left={{ lg: 20, md: 40, sm: 20, xs: 10 }} color='#fff'>
                                <Box display='flex' alignItems='center'>
                                    <Button className={`${styles.btn_bg} prev`} onClick={PrevButton} ><ChevronLeft /></Button>
                                    <Button className={`${styles.btn_bg} next`} onClick={NextButton} ><ChevronRight /></Button>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={12}>
                        <Box className={`testimonial_img`}>
                            <Image className={`img-fluid`} src={require('./assets/testimonial/testimonials-side-img.png')} alt='' />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Testimonials