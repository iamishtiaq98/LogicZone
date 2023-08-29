import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import styles from '@/styles/FooterSection.module.css';
import Link from 'next/link';

function FooterSection() {
    return (
        <Box className={` ${styles.footer_section} footer bg-brand-primary py-3`}>
            <Container>
                <Grid container>
                    <Grid item md={12} >
                        <Typography variant='p' className="text-white mb-0">
                            All rights reserved © <Link className={`${styles.project_name}`} href="/"> Logics Zon</Link> { new Date().getFullYear() } - { new Date().getFullYear()+1 }
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default FooterSection