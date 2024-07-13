// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                        Filmes
                    </Link>
                </Typography>
                <Typography variant="h6" style={{ marginLeft: '15px' }}>
                    <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
                        About
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
