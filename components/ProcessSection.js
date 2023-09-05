import React from 'react'
import { Grid, Box } from '@mui/material';
import { Container } from 'react-bootstrap';
import styles from '@/styles/ProcessSection.module.css'

function ProcessSection() {

    return (
        <Box className={`py-5 ${styles.process}`}>
            <Container>
                <Grid container spacing={3.5} className='px-2 align-items-start'>
                    <Grid item lg={4} md={12} >
                        <div className={`shadow p-5 rounded text-white ${styles.processbox}`}>
                            <h1>Our Process</h1>
                            <p>
                                Web development is a complex process that requires multiple steps and stages
                                to ensure that a website is functional, user-friendly, and visually appealing.
                                It involves a series of steps from discovery and planning to design, development, 
                                content creation, launch, and maintenance. By following a structured process, 
                                we can create a website that meets the client`s needs and provides a positive user experience.
                            </p>
                        </div>
                    </Grid>
                    <Grid item lg={8} md={12} sx={{ mt: { lg: 0, xs: 5 } }}>
                        <Grid container spacing={3.5}>
                            <Grid item lg={6} md={6}>
                                <Box className={`px-3 py-4 bg-white  text-center h-100 ${styles.choosebox}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52.844" height="39.792" viewBox="0 0 52.844 39.792">
                                        <defs>
                                            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor="#6c5589"></stop>
                                                <stop offset="1" stopColor="#e93e3a"></stop>
                                            </linearGradient>
                                        </defs>
                                        <g id="Group_31" data-name="Group 31" transform="translate(-322.577 -212.969)">
                                            <path id="Path_3159" data-name="Path 3159" d="M4110.573,6318.635c-7.161,5.128-15.048,16.627-5.808,23.837s48.535,7.846,48.649-5.837-16.02-8.294-21.1-15.407S4117.734,6313.507,4110.573,6318.635Z" transform="translate(-3777.994 -6094.75)" fill="#272539" opacity="0.07"></path>
                                            <path id="Path_3160" data-name="Path 3160" d="M14.795,1.969,7.236-5.59a.7.7,0,0,0-.5-.205h-.6a12.134,12.134,0,0,0,3.24-8.268A12.186,12.186,0,0,0-2.813-26.25,12.186,12.186,0,0,0-15-14.062,12.186,12.186,0,0,0-2.813-1.875,12.156,12.156,0,0,0,5.455-5.109v.6a.721.721,0,0,0,.205.5l7.559,7.559a.7.7,0,0,0,1,0l.58-.58A.7.7,0,0,0,14.795,1.969ZM-2.813-3.75A10.305,10.305,0,0,1-13.125-14.062,10.305,10.305,0,0,1-2.813-24.375,10.305,10.305,0,0,1,7.5-14.062,10.305,10.305,0,0,1-2.813-3.75Z" transform="translate(350 239.219)" fill="#355979"></path>
                                        </g>
                                    </svg>
                                    <div className="icon_div_content pt-4">
                                        <h4> Discovery and Planning</h4>
                                        <p>In the initial stage, we will work with the client to gather requirements, 
                                            discuss goals, and plan the website`s design and functionality. This includes 
                                            understanding the target audience, website objectives, and features.
                                        </p>
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6}>
                                <Box className={`px-3 py-4 bg-white  text-center h-100 ${styles.choosebox}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52.844" height="39.792" viewBox="0 0 52.844 39.792">
                                        <defs>
                                            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor="#6c5589"></stop>
                                                <stop offset="1" stopColor="#e93e3a"></stop>
                                            </linearGradient>
                                        </defs>
                                        <g id="Group_32" data-name="Group 32" transform="translate(-322.577 -76.75)">
                                            <path id="Path_3161" data-name="Path 3161" d="M4110.573,6318.635c-7.161,5.128-15.048,16.627-5.808,23.837s48.535,7.846,48.649-5.837-16.02-8.294-21.1-15.407S4117.734,6313.507,4110.573,6318.635Z" transform="translate(-3777.994 -6230.969)" fill="#272539" opacity="0.07"></path>
                                            <path id="Path_3162" data-name="Path 3162" d="M13.9-22.955l-2.2-2.2a3.75,3.75,0,0,0-5.3,0L-14.248-4.5l-.743,6.69a1.406,1.406,0,0,0,1.553,1.553L-6.748,3,13.9-17.652A3.75,3.75,0,0,0,13.9-22.955ZM8.324-14.725-4.8-1.6V-3.633H-7.617V-6.445H-9.653L3.475-19.574ZM-7.609,1.207l-3.457.384L-12.841-.185l.384-3.457L-11.294-4.8h2.036v2.812h2.812V.044ZM12.576-18.977,9.649-16.051,4.8-20.9l2.926-2.926a1.874,1.874,0,0,1,2.652,0l2.2,2.2A1.874,1.874,0,0,1,12.576-18.977Z" transform="translate(350 103)" fill="#355979"></path>
                                        </g>
                                    </svg>
                                    <div className="icon_div_content pt-4">
                                        <h4>Design</h4>
                                        <p>
                                            Based on the planning phase, we will create a visual design of the website. 
                                            This includes creating wireframes, mockups, and prototypes to demonstrate how 
                                            the website will look and function.
                                        </p>
                                    </div>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3.5} sx={{ mt: 5 }}>
                            <Grid item md={6}>
                                <Box className={`px-3 py-3 bg-white text-center h-100 ${styles.choosebox}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52.844" height="39.788" viewBox="0 0 52.844 39.788">
                                        <defs>
                                            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor="#6c5589"></stop>
                                                <stop offset="1" stopColor="#e93e3a"></stop>
                                            </linearGradient>
                                        </defs>
                                        <g id="Group_29" data-name="Group 29" transform="translate(-319.577 -76.754)">
                                            <path id="Path_3155" data-name="Path 3155" d="M4110.573,6318.635c-7.161,5.128-15.048,16.627-5.808,23.837s48.535,7.846,48.649-5.837-16.02-8.294-21.1-15.407S4117.734,6313.507,4110.573,6318.635Z" transform="translate(-3780.994 -6230.969)" fill="#272539" opacity="0.07"></path>
                                            <path id="Path_3156" data-name="Path 3156" d="M-3.486,3.738a.355.355,0,0,0,.434-.246L5.191-25.383a.349.349,0,0,0-.24-.434l-1.465-.416a.349.349,0,0,0-.434.24L-5.191,2.889a.349.349,0,0,0,.24.434ZM-7.916-3.6l1.084-1.225a.291.291,0,0,0-.029-.416l-7.09-6.006,7.09-6.006a.291.291,0,0,0,.029-.416L-7.916-18.9a.29.29,0,0,0-.416-.023l-8.443,7.453a.289.289,0,0,0,0,.439l8.443,7.453A.3.3,0,0,0-7.916-3.6ZM8.332-3.58l8.443-7.453a.289.289,0,0,0,0-.439L8.332-18.92a.3.3,0,0,0-.416.023L6.832-17.672a.291.291,0,0,0,.029.416l7.09,6.006L6.861-5.244a.291.291,0,0,0-.029.416L7.916-3.6A.29.29,0,0,0,8.332-3.58Z" transform="translate(347 103)" fill="#355979"></path>
                                        </g>
                                    </svg>
                                    <div className="icon_div_content pt-4">
                                        <h4>Development</h4>
                                        <p>
                                            Once the design is finalized, the development team will begin coding the website. 
                                            The development phase also includes testing and bug-fixing to ensure the website 
                                            functions correctly.
                                        </p>
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Box className={`px-3 py-4 bg-white  text-center h-100 ${styles.choosebox}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52.844" height="39.792" viewBox="0 0 52.844 39.792">
                                        <defs><linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                            <stop offset="0" stopColor="#6c5589"></stop>
                                            <stop offset="1" stopColor="#e93e3a"></stop>
                                        </linearGradient>
                                        </defs>
                                        <g id="Group_29" data-name="Group 29" transform="translate(-328.577 -76.75)">
                                            <path id="Path_3155" data-name="Path 3155" d="M4110.573,6318.635c-7.161,5.128-15.048,16.627-5.808,23.837s48.535,7.846,48.649-5.837-16.02-8.294-21.1-15.407S4117.734,6313.507,4110.573,6318.635Z" transform="translate(-3771.994 -6230.969)" fill="#272539" opacity="0.07"></path>
                                            <path id="Path_3156" data-name="Path 3156" d="M6.566-21.092h0a3.282,3.282,0,0,0-3.281,3.281A3.282,3.282,0,0,0,6.566-14.53a3.282,3.282,0,0,0,3.281-3.281h0A3.284,3.284,0,0,0,6.566-21.092Zm0,4.687h0A1.407,1.407,0,0,1,5.16-17.811a1.407,1.407,0,0,1,1.406-1.406,1.407,1.407,0,0,1,1.406,1.406A1.409,1.409,0,0,1,6.566-16.4ZM14.6-25.119a1.063,1.063,0,0,0-.729-.729,21.259,21.259,0,0,0-4.82-.4c-6.046,0-9.672,3.234-12.379,7.5h-6.1A3.085,3.085,0,0,0-11.945-17.2L-14.84-11.41a1.985,1.985,0,0,0-.147.627,1.407,1.407,0,0,0,1.406,1.406h6.089A5.626,5.626,0,0,1-1.868-3.752h0V2.341A1.407,1.407,0,0,0-.462,3.747,1.994,1.994,0,0,0,.165,3.6L5.949.705A3.083,3.083,0,0,0,7.5-1.8V-7.924c4.252-2.713,7.5-6.351,7.5-12.368A20.826,20.826,0,0,0,14.6-25.119ZM-12.823-11.251l2.555-5.108a1.307,1.307,0,0,1,.836-.516h4.985c-.817,1.644-1.858,3.75-2.786,5.625l0,.027C-7.319-11.228-11.425-11.251-12.823-11.251ZM5.625-1.8a1.3,1.3,0,0,1-.515.833L.007,1.583c0-1.4-.024-5.511-.027-5.6l.022,0C1.876-4.944,3.974-5.985,5.618-6.8h.007ZM-.356-5.936a8.363,8.363,0,0,0-4.959-4.954C-2.266-16.984.531-24.375,9.05-24.375a21.051,21.051,0,0,1,3.833.245,20.391,20.391,0,0,1,.241,3.838C13.124-11.8,5.684-8.956-.356-5.936ZM-9-7.5c-2.817,0-5.883,2.306-5.992,9.377H-15V3.75h1.875V3.736C-3.069,3.541-2.292-3-5.285-6.012A5.359,5.359,0,0,0-9-7.5Zm3.1,6.41C-6.65.733-9.275,1.8-13.126,1.87c0-.208-.066-7.493,4.128-7.493a3.52,3.52,0,0,1,2.391.94A3.483,3.483,0,0,1-5.9-1.092Z" transform="translate(356 103)" fill="#355979"></path>
                                        </g>
                                    </svg>
                                    <div className="icon_div_content pt-4">
                                        <h4>Launch</h4>
                                        <p>
                                            Once the website is completed, it`s time to launch it on the internet. 
                                            we will help the client with domain registration, hosting, and configuring the 
                                            website for optimal performance.
                                        </p>
                                    </div>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        
    )
}

export default ProcessSection