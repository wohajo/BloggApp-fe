import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { commentInterface, commentInterfaceWithIsInDialog } from '../../Interfaces/interfaces';
import theme from '../../theme';
import { useDispatch } from 'react-redux';
import { CommentsAPI } from '../../API/CommentsAPI';
import { pageCommentsNotLoaded, setComments, pageCommentsLoaded, postCommentsLoaded, postCommentsNotLoaded, setPostComments } from '../../Redux/Actions';
import EditCommentDialog from '../EditDialogs/EditCommentDialog';

const useStyles = makeStyles({
    root: {
        minWidth: "75%",
        maxWidth: "75%",
        marginBottom: 20
    },
    dangerousButton: {
        color: theme.palette.secondary.dark,
    },
    author: {
        fontWeight: "bold",
        marginBottom: 5
    }
});

const Post = (props: commentInterfaceWithIsInDialog) => {
    
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDelete = async () => {
        if (props.isInDialog) {
            dispatch((postCommentsNotLoaded()))
            await CommentsAPI.deleteComent(props.id)
            CommentsAPI
            .fetchCommentsByPostId(props.postId)
            .then(async (data) => {
                await dispatch(setPostComments(data))
                dispatch(postCommentsLoaded())
            })
        } else {
            dispatch((pageCommentsNotLoaded()))
            await CommentsAPI.deleteComent(props.id)
            CommentsAPI
            .fetchCommentsByUsername(props.username)
            .then(async (data) => {
                await dispatch(setComments(data))
                dispatch(pageCommentsLoaded())
            })
        }
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div className={classes.author}>
                    {props.username}
                </div>
            <Typography variant="body2" component="p">
                {props.contents}
            </Typography>
        </CardContent>
        <CardActions>
            <EditCommentDialog isInDialog={props.isInDialog} id={props.id} postId={props.postId} contents={props.contents} username={props.username} />
            <Button size="small" variant="contained" className={classes.dangerousButton} onClick={() => handleDelete()}>Delete</Button>
        </CardActions>
    </Card>
    );
}

export default Post