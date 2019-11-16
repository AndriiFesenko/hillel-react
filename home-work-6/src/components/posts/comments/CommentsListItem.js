import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './comments.css'

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function CommentsListItem({comment}) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    <i className="label">{`name:`}</i> {comment.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <i className="label">{`email:`}</i> {comment.email}
                </Typography>
                <Typography variant="body2" component="p">
                        {comment.body}
                </Typography>
            </CardContent>
    </Card>
    )
}
