import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from 'next/link';

const buttons = [
    <>
        <Box>
            <Link href="/about">
                <Button key="two">About</Button>
            </Link>
        </Box>
    </>
];

export default function GroupSizesColors() {
    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': { m: 1, },
        }}>
            <ButtonGroup size="large" aria-label="large button group">
                {buttons}
            </ButtonGroup>
        </Box>
    );
}
