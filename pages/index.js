import * as React from 'react';
import { Container, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '/components/Button'

function index() {
    return (
        <>
            <Navbar />
            <Container maxWidth="sm" className='triangle-left'></Container>
            <Container fixed>
                <Box mt={8} sx={{ textAlign: 'center' }}>
                        <h1 className='bold-header-text' component="div" > Creating great IT Services & Software solutions for enterprises & startups! </h1>
                        <p className='normal-text' component="div"> A company based in Belgium, Germany. Eureca Apps strives to redefine your mobile app experience and deliver the best
                        products in a fast pacing world with the best passionate people in our team. </p>
                </Box>

                <Grid container my={2} spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ maxWidth: 500, float: 'right' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img" height="250" image="https://www.eurecaapps.com/assets/img/CaseStudy/Donaghmore.jpg"
                                    alt="" />
                                <CardContent className='box-size'>
                                    <Typography className='normal-texts' sx={{ mt: 1, }} gutterBottom variant="h6" component="div">
                                        Augmented Reality Apps for Museum </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        From Gaming to bringing a centuries-old heirloom piece to life! We at Eureca develop apps to get real-life experiences
                                        with Augmented Reality (AR) and Virtual Reality (VR) technologies in your hands.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card sx={{ maxWidth: 500, }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img" height="250"
                                    image="https://www.eurecaapps.com/assets/img/CaseStudy/KeepAppy.jpg" alt="" />
                                <CardContent className='box-size'>
                                    <Typography className='normal-texts' sx={{ mt: 2, }} gutterBottom variant="h6" component="div">
                                        Mental and health care apps </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Personal Health Care is the need of the hour. Eureca Apps develops apps that help in promoting positivity; emotionally,
                                        socially, and mentally with various features. </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card sx={{ maxWidth: 500, float: 'right' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img" height="250" image="https://www.eurecaapps.com/assets/img/CaseStudy/mosaic.jpg"
                                    alt="" />
                                <CardContent className='box-size'>
                                    <Typography className='normal-texts' sx={{ mt: 2, }} gutterBottom variant="h6" component="div">
                                        Educational Apps for Parents & Teachers </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        To synchronize parents and educators with each other and get the child’s real-time update at school or daycare instantaneously, We develop educational apps for simultaneous work in such a busy world.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card sx={{ maxWidth: 500, }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img" height="250" image="https://www.eurecaapps.com/assets/img/CaseStudy/touristguides.jpg"
                                    alt="" />
                                <CardContent className='box-size'>
                                    <Typography className='normal-texts' sx={{ mt: 2, }} gutterBottom variant="h6" component="div">
                                        Tourist guide apps
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Travel comes with lots of understanding and exploration of the place. We provide digital solutions to the travel industry with convenient and easy to use features which promise hassle-free experience.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>
                <Button />
            </Container>
            <Container className='triangle-right'></Container>
        </>
    )
}

export default index;


