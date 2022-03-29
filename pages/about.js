import * as React from 'react';
import Navbar from '/components/Navbar'
import Button from '/components/Button'
import Grid from '@mui/material/Grid';
import { Container } from '@material-ui/core';
import { Typography } from '@mui/material';
import Breadcrumbs from '/components/Breadcrumbs'

export default function BasicGrid() {
    return (
        <>
            <Navbar />
            <Container>
                <Typography variant='h4' sx={{ my: 2, }}>
                    <h2 className='text-line'>About</h2>
                </Typography>
                <Breadcrumbs />
                <Grid className='round-container' container sx={{ my: 2 }}>
                    <Grid md={4} sx={{ mx: 4, my: 5, color: 'white' }}>
                        <Typography sx={{ textAlign: 'left' }} variant='h3'>
                            <h6> Are you keen to hire and partner with a veteran mobile app development company in Belgium? </h6>
                        </Typography>
                    </Grid>
                    <Grid md={6} sx={{ my: 4, color: 'white', textAlign: 'left', }}>
                    </Grid>
                </Grid>
            </Container>
            <Button />
        </>
    );
}
