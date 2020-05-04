import React, { useState } from 'react'
import style from './index.module.css'
import {Link} from 'gatsby'
import {
  Paper, Button, Backdrop, Typography, Grid
} from '@material-ui/core'

export default () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(!open)
  }
  return (
  <>
    <Grid container spacing={2}>
      <Paper className={style.paper}>
        <Typography variant='h3'>MilosLife</Typography>
        <Button onClick={handleToggle}>Menu</Button>
        <Backdrop open={open} onClick={handleClose} className={style.backdrop}>
          <Link to='/pics/' className={style.link}>
            Photo Album
          </Link>
        </Backdrop>
        <Paper>
          <img style={{height: '50%', width: '50%'}} src='/Milo.jpg' alt='me'/>
        </Paper>
      </Paper>
    </Grid>
  </>
  )
}
