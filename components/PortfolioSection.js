import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { Container } from 'react-bootstrap';

import styles from '@/styles/PortfolioSection.module.css';
import Link from 'next/link';

function PortfolioSection() {
    return (
        <Box className={`${styles.portfolio_section_padd} mt-5`} id="portfolio">
            <Container>
                <Grid container>
                    <Grid item md={12}>
                        <Box className={`${styles.mainheadingtext} text-center mb-5 mt-4`}>
                            <Typography variant='h1' className={`${styles.haedingbarcenter} ${styles.textuppercase} ${styles.positionrelative} `}>
                                Our Projects
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={3.5} marginTop={1}>
                    <Grid item md={4} sm={12}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project1.jpeg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="#" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project2.jpeg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="#" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project3.jpeg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="#" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container mt={7} className={`justify-content-center`}>
                    <Grid item md={12} sm={12}>
                        <Grid className={`${styles.viewallbtn}`}>
                            <Link href="/portfolio" className={`btn ${styles.zonbtn} ${styles.zonbtndrk}`}>All Projects</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default PortfolioSection