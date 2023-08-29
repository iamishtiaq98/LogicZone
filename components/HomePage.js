import React from 'react';
import { Grid } from '@mui/material';
import Header from '@/components/Header.js';
import HomeSection from '@/components/HomeSection.js';
import ProcessSection from '@/components/ProcessSection';
import AboutSection from '@/components/AboutSection.js';
import ServicesSection from '@/components/ServicesSection.js';
import PortfolioSection from '@/components/PortfolioSection.js';
import FooterSection from '@/components/FooterSection.js';
import ContactSection from '@/components/ContactSection.js';
import Testimonials from '@/components/Testimonials.js';

function HomePage() {
  return (
    <Grid contaianer >
        <Grid item lg={12}>
          <Header />
          <HomeSection />
          <ProcessSection />
        </Grid>
        <Grid item lg={12}>
          <AboutSection />
        </Grid>
        <Grid item lg={12}>
          <ServicesSection />
        </Grid>
        <Grid item lg={12}>
          <PortfolioSection />
        </Grid>
        <Grid item lg={12}>
          <Testimonials />
        </Grid>
        <Grid item lg={12}>
          <ContactSection />
        </Grid>
        <Grid item lg={12}>
          <FooterSection />
        </Grid>
      </Grid>

  )
}

export default HomePage