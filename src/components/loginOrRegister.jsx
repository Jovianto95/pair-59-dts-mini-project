import React, {useState} from "react";
import styles from './loginOrRegister.modules.css';
import {Grid, Box, Button, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";

const LoginOrRegisterForm = ({loginOrRegister}) => {
    const navigate = useNavigate();

    const [credential, setCredential] = useState({
        email: '',
        password: '',
    });

    const textFieldEmailOnChangeHandler = (event) => {
        setCredential({...credential, email: event.target.value})
    };

    const textFieldPasswordOnChangeHandler = (event) => {
        setCredential({...credential, password: event.target.value})
    };

    const loginHandler = () => {
        console.log("Login");
        navigate('/');
    };

    const registerHandler = () => {
        console.log('Register');
        navigate('/login');
    };

    const buttonLoginOrRegisterOnClickHandler = () => {
        if (loginOrRegister === "login"){
            loginHandler();
        } else {
            registerHandler();
        }
    };

    return (
        <Grid container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{minHeight: '95vh'}}
        >
            <Box className={styles.boxy} component='form' noValidate>
                <Typography variant='body1'>
                    {loginOrRegister === 'login'?'Login Page':'Register Page'}
                </Typography>
                
                <TextField label='Email'
                type='email'
                variant='outlined'
                size='small'
                value={credential.email}
                onChange={textFieldEmailOnChangeHandler}/>
                
                <TextField label='password'
                type='Password'
                variant='outlined'
                size='small'
                value={credential.password}
                onChange={textFieldPasswordOnChangeHandler}/>

                <Button variant='outlined'
                size='small'
                onClick={buttonLoginOrRegisterOnClickHandler}>
                    {loginOrRegister === 'login'?'Login':'Register Account'}
                </Button>

                {loginOrRegister === 'login' ? (
                    <Link to='/register'>
                        <Typography variant ='body1'>or do you want to register?</Typography>
                    </Link>
                ):(
                    <Link to='/login'>
                        <Typography variant='body1'>or do you want to login?</Typography>
                    </Link>
                )}
            </Box>
        </Grid>    );
};

export default LoginOrRegisterForm;


