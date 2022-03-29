import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import logo from '../assets/images/logo.png';
import Link from 'next/link'

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ my: 1, ml: 2, display: { xs: 'none', md: 'flex' } }}
                    > <Image className='img-fluid' src={logo} width={200} height={60} alt="logo" />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                            sx={{ paddingInlineStart: '0', display: { xs: 'block', md: 'none' }, }}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography className='nav-menu' textAlign="center">
                                    <li>
                                        <Link href="/">
                                            <a className='white-bold-text' sx={{ mx: 1, color: 'black', display: 'block' }}> Home </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <a className='white-bold-text' sx={{ mx: 1, color: 'black', display: 'block' }}> About </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a className='white-bold-text' sx={{ mx: 1, color: 'black', display: 'block' }}> Contact </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a className='white-bold-text' sx={{ mx: 1, color: 'black', display: 'block' }}> Blog </a>
                                        </Link>
                                    </li>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 5, flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    > <Image sx={{ display: { xs: 'none', md: 'none' } }} className='img-fluid'
                        src={logo} width={160} height={50} alt="logo" />
                    </Typography>
                    <Box className='nav-menu' sx={{ ml: 5, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <li>
                            <Link href="/">
                                <a className='white-bold-text' sx={{ mx: 1, color: 'white', display: 'block' }}> Home </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a className='white-bold-text' sx={{ mx: 1, color: 'white', display: 'block' }}> About </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className='white-bold-text' sx={{ mx: 1, color: 'white', display: 'block' }}> Contact </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a className='white-bold-text' sx={{ mx: 1, color: 'white', display: 'block' }}> Blog </a>
                            </Link>
                        </li>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};

export default ResponsiveAppBar;
