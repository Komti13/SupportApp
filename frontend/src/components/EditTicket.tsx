import { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useLocation } from "react-router-dom"
import { Link, BrowserRouter, useHistory } from "react-router-dom";
import CrudService from '../services/CrudService';


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



export default function EditTicket(params) {
    const initialFieldValues = {
        id: '',
        category: '',
        subject: '',
        description: ''
    }
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        var { name, value } = e.target
        setdata({
            ...data,
            [name]: value
        })


    }

    const history = useHistory();
    const location = useLocation()
    const [dataid, setdataid] = useState(0);
    
    // console.log(id);
    const [data, setdata] = useState(initialFieldValues);
    async function handleFormSubmit(e) {
        e.preventDefault();
       
        

        const PostData = {
            id: location.id,
            category: data.category,
            subject: data.subject,
            description: data.description,
        }
        const response = await CrudService.edit(PostData);
        console.log('response', response);
        history.push("/Home");
    }
    const classes = useStyles();

    return (


        <Container component="main" maxWidth="xs">
            <ul>
                <li>
                    <Link to="/home">Logout</Link>
                </li>
            </ul>
            <CssBaseline />
            <div className={classes.paper}>

                <form className={classes.form} noValidate onSubmit={e => handleFormSubmit(e)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Category"
                        name="category"
                        autoFocus
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="subject"
                        label="subject"
                        name="subject"
                        autoFocus
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="description"
                        label="description"
                        id="description"
                        onChange={handleInputChange}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Edit
                    </Button>

                </form>
            </div>

        </Container>
    );
}