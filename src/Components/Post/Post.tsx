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
import { PostsAPI } from '../../API/PostsAPI';
import { useDispatch } from 'react-redux';
import { profilePostsLoaded, profilePostsNotLoaded, setPosts } from '../../Redux/Actions';
import CommentsDialog from '../CommentsDialog/CommentsDialog';

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
    chip: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText,
        marginRight: 5
    }
});

const Post = (props: postInterface) => {
    
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDelete = async () => {
        dispatch(profilePostsNotLoaded())
        await PostsAPI.deletePost(props.id)
        PostsAPI
        .fetchPosts()
        .then((data) => {
            dispatch(setPosts(data))
        })
        .finally(async () => {
            await dispatch(profilePostsLoaded())
        })
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div>
                    {props.authors.map(author => <span className={classes.authorText}> | {author}</span>)}
                </div>
            <Typography variant="body2" component="p">
                {props.contents}
            </Typography>
        </CardContent>
        <div className={classes.tagsArea}>
            {props.tags.map(tag => <Chip label={tag} className={classes.chip} />)}
        </div>
        <CardActions>
            <CommentsDialog postId={props.id}/>
            <Button size="small" variant="contained" className={classes.dangerousButton} onClick={() => handleDelete()}>Delete</Button>
        </CardActions>
    </Card>
    );
}

export default Post