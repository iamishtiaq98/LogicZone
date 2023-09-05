import React,{useRef, useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import styles from '@/styles/PortfolioSection.module.css';
import Isotope from 'isotope-layout';




function PortfolioSectionDetails() {
    const isBrowser = () => typeof window !== 'undefined';
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState('*')
    useEffect(() => {
        if(isBrowser()){
            isotope.current = new Isotope('.filter-container', {
                itemSelector: '.filter-item',
                layoutMode: 'fitRows',
            })
            return () => isotope.current.destroy()
        }
       
    }, [])
    useEffect(() => {

        filterKey === '*'
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey])
    const handleFilterKeyChange = key => () => setFilterKey(key)

    return (

        < Box className={`${styles.portfolio_section}  ${styles.portfolio_section_padd}`
        } id="portfolio" >
            <Container>
                <Grid container>
                    <Grid item md={6} sm={12}>
                        <Grid item className={`${styles.filters} text-start mb-5`}>
                            <List className={`${styles.isotopeHeader}`}>
                                <ListItem className={` ${filterKey === '*'   ? styles.active : ""}`} onClick={handleFilterKeyChange('*')} >All</ListItem>
                                <ListItem className={` ${filterKey === 'html' ? styles.active : ""}`} onClick={handleFilterKeyChange('html')}>Html</ListItem>
                                <ListItem className={` ${filterKey === 'bootstrap' ? styles.active : ""}`} onClick={handleFilterKeyChange('bootstrap')}>Bootstrap</ListItem>
                                <ListItem className={` ${filterKey === 'wp' ? styles.active : ""}`} onClick={handleFilterKeyChange('wp')}>WordPress</ListItem>
                                <ListItem className={` ${filterKey === 'php' ? styles.active : ""}`} onClick={handleFilterKeyChange('php')}>Php</ListItem>
                                <ListItem className={` ${filterKey === 'laravel' ? styles.active : ""}`} onClick={handleFilterKeyChange('laravel')}>Laravel</ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3.5} mt={1} className='filter-container'>
                    <Grid item md={4} className={`filter-item all wp`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project1.jpeg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://spectrabygg.se/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all wp`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project2.jpeg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://santilondon.com/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all wp`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project3.jpeg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://www.sea-trans.net/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project4.jpeg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://www.oceancargologistics.com/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all html bootstrap php`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project5.jpg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://www.novastone-ca.com/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all wp`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project6.jpeg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://melioncapitalfund.com/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all wp`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project7.jpeg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://makeover.pamplona-tours.com/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all bootstrap`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project8.jpeg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://smilecards.store/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all wp`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project9.jpg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://www.lahuertadelsol.com/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all wp`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project10.jpg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://illuminatemaths.co.uk/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all wp`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project11.jpg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://www.fmss.com.au/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item wp php`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project12.jpg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://drivehgv.com/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all wp`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project13.jpg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://www.bitcoinwebhosting.net/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all bootstrap`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project14.jpg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://www.bigbuda.com/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all bootstrap html`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project15.jpg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://atlastransportllc.com/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item wp php`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project16.jpg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://wellboretech.com/landing-page/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} className={`filter-item all html bootstrap php`}>
                        <Box className={`${styles.projectdiv}`}>
                            <Image className='img-fluid' alt='' src={require('./assets/portfolio/project17.jpg')} />
                            <Typography variant='div' className={`${styles.projectcontent} text-center text-white ${styles.bgbrandprimary}`}>
                                <Typography variant='div' className='content_btn_div'>
                                    <Link href="https://whagons.com/" className={`${styles.btn} ${styles.zonbtn}`}>View Project</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default PortfolioSectionDetails