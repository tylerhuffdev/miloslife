import React, { useState } from 'react'
import { Grid, Paper, Button, Backdrop } from '@material-ui/core'
import style from './pics.module.css'
import { Link } from 'gatsby'
import { render } from 'react-dom'

export default () => {
    
    return (
    <>
        <Paper className={style.paper}>
            <Link to='/' className={style.link}>Home</Link>
        </Paper>
        <br/>
        <Grid container spacing={2}>
            <Button>
                <Grid item ><img src='/skateOllie.jpg' alt='Ollie'/></Grid>
            </Button>
            <Button >
                <Grid item><img src='/skatePush.jpg' alt='Push'/></Grid>
            </Button>
            <Button >
                <Grid item><img src='/skateStart.jpg' alt='Start'/></Grid>
            </Button>
            <Button >
                <Grid item><img src='/skateFall.jpg'  alt='Fall'/></Grid>
            </Button>
        </Grid>
    </>
    )
}
