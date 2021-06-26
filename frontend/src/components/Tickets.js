import { React, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import UrlService from '../services/UrlService';
import ReplyIcon from '@material-ui/icons/Reply';
import { Link } from 'react-router-dom'

const Tickets = () => {
    const [data, setdata] = useState([]);
    //getting data from backend into state to display it later
    useEffect(async () => {
        const result = await axios.get(UrlService.getdata());
        setdata(result.data.data);
        console.log('ffff', data);
    }, []);

    return (
        <div>
            <Grid container direction='row' spacing={1} alignItems="center" justify="space-evenly" style={{ "backgroundColor": 'rgb(42, 193, 243)', 'color': 'white', 'border': '2px solid rgb(42, 193, 243)' }}>

                <Grid item container xs={2} justify="space-evenly" alignItems="center" >
                    <Grid item xs={12} >
                        <h2  >category</h2>
                    </Grid>
                </Grid>
                <Grid item container xs={2} justify="space-evenly">
                    <Grid item xs={12}>
                        <h2 >subject</h2>
                    </Grid>
                </Grid>
                <Grid item container xs={2} justify="space-evenly">
                    <Grid item xs={12} >
                        <h2 >description</h2>
                    </Grid>
                </Grid>
                <Grid item container xs={2} justify="space-evenly">
                    <Grid item xs={12} >
                        <h2 >Action</h2>
                    </Grid>
                </Grid>
            </Grid>
            {
                Object.keys(data).map((index) => {
                    return (
                        <Grid Grid container direction='row' spacing={1} alignItems="center" justify="space-evenly" style={{ "marginTop": '10px', 'borderBottom': '2px solid rgb(42, 193, 243)', 'color': 'blue' }} >

                            <Grid item container xs={2} justify="space-evenly" alignItems="center" >
                                <Grid item xs={12} >
                                    <h3 >{data[index].category}</h3>
                                </Grid>
                            </Grid>
                            <Grid item container xs={2} justify="space-evenly">
                                <Grid item xs={12}>
                                    <h3 >{data[index].subject}</h3>
                                </Grid>
                            </Grid>
                            <Grid item container xs={2} justify="space-evenly">
                                <Grid item xs={12} >
                                    <h3 >{data[index].descirption}</h3>
                                </Grid>
                            </Grid>

                            <Grid item xs={2}>
                                <Link to={{
                                    pathname: "/edit/" + data[index].id,
                                    id: data[index].id
                                }}
                                  >
                                    <Button

                                        size='small'
                                        variant="outlined"
                                        startIcon={<EditIcon />}
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <Link to={{
                                    pathname: "/addreplie/" + data[index].id,
                                    id: data[index].id
                                }}
                                >
                                <Button
                                    size='small'
                                    variant="outlined"
                                    startIcon={<ReplyIcon />}
                                >
                                    Reply
                                    </Button>
                                </Link>

                            </Grid>

                        </Grid >
                    )
                })
            }
        </div>
    )
}

export default Tickets

