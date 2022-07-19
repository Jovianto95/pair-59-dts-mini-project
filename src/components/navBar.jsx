import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';

import {useNavigate} from 'react-router-dom';
import { logoutFromApps } from '../authentications/firebase';
import styles from './navBar.module.css';

const Navbar = () => {
    const navigate = useNavigate();

    const buttonLogoutOnClickHandler = async ()=>{
        await logoutFromApps();
        navigate('/login');
    };

    return (
        <Box className={styles.grow}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='div' className={styles.grow}>
                        NETFLIX
                    </Typography>
                    <Button color='inherit' onClick={buttonLogoutOnClickHandler}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;