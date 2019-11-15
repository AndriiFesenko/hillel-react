import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './header.css'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function Index() {
    const classes = useStyles();

    return (
        <header>
            <Button variant="contained" color="primary" className={classes.button}>
                <Link to='/'>Home</Link>
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
                <Link to="/posts">Posts</Link>
            </Button>
        </header>
    )
}
