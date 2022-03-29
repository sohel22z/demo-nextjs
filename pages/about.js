import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Navbar from '/components/Navbar'
import Button from '/components/Button'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <>
            <Navbar />
            <h1 sx={{ textAlign: 'center' }}> This is About page. </h1>
            <Button />
        </>
    );
}
