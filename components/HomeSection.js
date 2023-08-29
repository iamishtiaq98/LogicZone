import React from 'react';
import 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Grid, Typography } from '@mui/material';
import styles from '@/styles/HomeSection.module.css';
import Image from 'next/image';

function HomeSection() {

    return (
        <Container className={styles.home} id='home'>
            <Grid container className='align-items-center'>
                <Grid item lg={6} md={6} sm={6} >
                    <Typography sx={{ fontSize: { lg:'45px', md: '38px', sm: '36px', xs: '28px'}, pt: { lg: 0, md:0, xs: 5}}}  variant='h1' className={` ${styles.title}`}>Transform Your Online Presence with Expert Web Development Services</Typography>
                </Grid>
                <Grid item lg={6} md={6} sm={6} >
                    <Image className={`w-100 ${styles.heroimg}`} src={require('./assets/heros/hero-img.png')} alt="hero"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomeSection