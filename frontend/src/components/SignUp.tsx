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
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthService from '../services/AuthService';
// import SignUp from './SignUp';

import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

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



export default function SignUp() {
    const initialFieldValues = {
        name: '',
        email: '',
        password: '',
        password_confirmation:''
    }
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        var { name, value } = e.target
        setdata({
            ...data,
            [name]: value
        })


    }
    const [data, setdata] = useState(initialFieldValues);
    async function handleFormSubmit(e) {
        e.preventDefault();
        const PostData = {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation:data.password_confirmation,
        }
        console.log("data",PostData)
        const response = await AuthService.registration(PostData);
        // console.log(data.email,data.password);
        console.log('response', response);
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
          
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <ExitToAppSharpIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <form className={classes.form} noValidate onSubmit={e => handleFormSubmit(e)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password_confirmation"
                        label="password_confirmation"
                        type="password"
                        id="password_confirmation"
                        autoComplete="current-password"
                        onChange={handleInputChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container>

                        <Grid item>
                            <Link to="/SignIn" variant="body2">
                                {"You have an account? Sign In"}
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