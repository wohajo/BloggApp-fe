import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';
import { postInterface } from '../../Interfaces/interfaces';
import theme from '../../theme';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 400,
        marginBottom: 50
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    tagsArea: {
        margin: 5,
    },
    authorText: {
        fontWeight: 'bold',
    }, 
    button: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main
    },
    dangerousButton: {
        color: theme.palette.secondary.dark,
    },
});

const Post = (props: postInterface) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <div>
                    {props.authors.map(author => <span className={classes.authorText}> | {author}</span>)}
                </div>
            <Typography variant="body2" component="p">
                {props.contents}
            </Typography>
        </CardContent>
        <div className={classes.tagsArea}>
            {props.tags.map(tag => <Chip label={tag} />)}
        </div>
        <CardActions>
            <Button size="small" variant="contained" className={classes.button}>Comment</Button>
            <Button size="small" variant="contained" className={classes.dangerousButton}>Delete</Button>
        </CardActions>
    </Card>
    );
}

export default Post