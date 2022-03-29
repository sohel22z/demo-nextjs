import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';



export default function BasicBreadcrumbs() {
    return (
        <div className='breadcrumb'>
            <Breadcrumbs aria-label="breadcrumb">
                <Link href="/" underline="hover">
                    <a sx={{ mx: 1, color: 'black', display: 'block' }}> Home </a>
                </Link>
                <Link href="/about" underline="hover">
                    <a sx={{ mx: 1, color: 'black', display: 'block' }}> About </a>
                </Link>
                <Link href="/contact" underline="hover">
                    <a sx={{ mx: 1, color: 'black', display: 'block' }}> Contact </a>
                </Link>
                <Link href="/blog" underline="hover">
                    <a sx={{ mx: 1, color: 'black', display: 'block' }}> Blog </a>
                </Link>
            </Breadcrumbs>
        </div>
    );
}
