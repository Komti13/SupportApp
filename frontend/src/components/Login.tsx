import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthService from './../services/AuthService';
// import SignUp from './SignUp';

import { Link, BrowserRouter, useHistory } from "react-router-dom";
import { setEmitFlags } from 'typescript';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



export default function Login() {
    const initialFieldValues = {
        email: '',
        password: '',
    }
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        var { name, value } = e.target
        setdata({
            ...data,
            [name]: value
        })
    }
    const history = useHistory();
    const [error, seterror] = useState('')
    const [passerror, setpasserror] = useState('')
    const [data, setdata] = useState(initialFieldValues);


    async function handleFormSubmit(e) {
        e.preventDefault();
        //testing response errors before redirecting
        if (data.email === '') {
            seterror('merci de saisire un email');
        }
        else if (data.password === '') {
            setpasserror('merci de saisire votre mot de passe');

        } else {
            const PostData = {
                email: data.email,
                password: data.password
            }
        //calling login service and passing data
            const response = await AuthService.doUserLogin(PostData);
            if (response.access_token !== undefined) {
                history.push("/home");
            } else {
                seterror('Merci de verifier les coordonnees entres');
            }
        }
    
    }
    const classes = useStyles();

    return (


        <Container component="main" maxWidth="xs">
            <ul>
                <li>
                    <Link to="/signIn">Login</Link>
                </li>
                <li>
                    <Link to="/signUp">Register</Link>
                </li>
            </ul>
            {/* <Route path="/signup" component={SignUp}></Route> */}
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={e => handleFormSubmit(e)}>
                    <TextField
                        required
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleInputChange}
                    />
                    <div style={{'color':'red'}}>
                        {error}
                    </div>
                    <TextField
                        required
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleInputChange}
                    />
                    <div style={{ 'color': 'red' }}>
                        {passerror}
                    </div>
                    <FormControlLabel

                        control={<Checkbox value="remember" color="primary" name="remember" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" to="" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signUp" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}