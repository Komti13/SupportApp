import { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
        width: '100%', 
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



export default function AddReplie() {
    const initialFieldValues = {
        id: 0,
        content: '',
    }
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        var { name, value } = e.target
        setdata({
            ...data,
            [name]: value
        })
    }

    const location = useLocation();
    const history = useHistory();
    const [data, setdata] = useState(initialFieldValues);

    //form submisson and passing data to backend
    async function handleFormSubmit(e) {
        e.preventDefault();
        const PostData = {
            id: location.id,
            content: data.content,
        }
        console.log("data", PostData)
        //calling servicethat invoke backend methode
        const response = await CrudService.addreplie(PostData);
        console.log('response', response);

        history.push("/home");
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
                        name="content"
                        label="content"
                        id="content"
                        onChange={handleInputChange}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Add Replie
                    </Button>

                </form>
            </div>

        </Container>
    );
}