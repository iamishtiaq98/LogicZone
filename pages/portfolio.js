import React from 'react';
import Head from 'next/head';
import { Grid, Box, Typography } from '@mui/material';
import Header from '@/components/Header.js';
import FooterSection from '@/components/FooterSection.js';
import { Container } from 'react-bootstrap';
import styles from '@/styles/PortfolioSection.module.css';
import dynamic from 'next/dynamic';

const PortfolioSectionDetails = dynamic(()=>import("@/components/PortfolioSectionDetails.js"),{
    ssr:false
})

function portfolio() {

    

    return (
        <>
            <Head>
                <title> LOGICS ZONE </title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&amp;display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" cross0rigin='true'></link>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500&display=swap" rel="stylesheet"></link>
            </Head>
            <Grid contaianer >
                <Grid item lg={12}>
                    <Header />
                    <Box className={`banner ${styles.bgbrand} ${styles.section_padd}`}>
                        <Container>
                            <Grid container >
                                <Grid item lg={12}>
                                    <Box className={`py-5`}>
                                        <Typography variant='h1' className={`${styles.bannertext} text-white text-center`}>
                                            OUR PORTFOLIO
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Grid>
                <Grid item lg={12}>
                    <PortfolioSectionDetails />
                </Grid>
                <Grid item lg={12}>
                    <FooterSection />
                </Grid>
            </Grid>
        </>

    )

}

export default portfolio