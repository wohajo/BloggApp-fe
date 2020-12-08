import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CircularProgress, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import theme from '../../theme';
import { postIdProp, rootState } from '../../Interfaces/interfaces';
import { CommentsAPI } from '../../API/CommentsAPI';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../Comment/Comment';
import { postCommentsLoaded, setPostComments } from '../../Redux/Actions';


const useStyles = makeStyles({
    button: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main
    },
    commentField: {
        marginLeft: 15,
        marginRight: 15,
    }
});

const CommentsDialog = (props: postIdProp) => {
    const [open, setOpen] = React.useState(false);
    const [commentValue, setCommentValue] = React.useState("");
    const comments = useSelector((state: rootState) => state.postComments);
    const isSpinnerVisible = useSelector((state: rootState) => state.postCommentsSpinner)

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClickOpen = () => () => {
        CommentsAPI
        .fetchCommentsByPostId(props.postId)
        .then((data) => {
            dispatch(setPostComments(data))
            dispatch(postCommentsLoaded())
        })
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleComment = () => {
        CommentsAPI.postComentInPost({id: "", contents: commentValue, postId: props.postId, username: "testUser"})
    };

    const showComments = () => {
        if (comments.length === 0) {
            return (<div>
                <Typography>No comments, be first!</Typography>
            </div>)
        } else {
            return comments.map(comment => <Comment key={"comment" + comment.id} id={comment.id} postId={comment.postId} username={comment.username} contents={comment.contents}/>)
        }
    }

return (
    <div>
        <Button size="small" variant="contained" className={classes.button} onClick={handleClickOpen()}>Comments</Button>
        <Dialog
            fullWidth={true}
            maxWidth={'md'}
            open={open}
            onClose={handleClose}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
        <DialogTitle id="scroll-dialog-title">Comments</DialogTitle>
        <DialogContent>
            <Grid container justify = "center">
                {isSpinnerVisible
                ? <CircularProgress color="secondary"/>
                : showComments()
                }
            </Grid>
        </DialogContent>
        <TextField
                        margin="dense"
                        id="comment-textfield"
                        label="Write your comment"
                        type="text"
                        multiline
                        rows={3}
                        color="secondary"
                        className={classes.commentField}
                        value={commentValue}
                        onChange={(e) => {
                            setCommentValue(e.target.value)
                        }}
                    />
        <DialogActions>
            <Button onClick={handleComment} color="primary">
                Comment
            </Button>
            <Button onClick={handleClose} color="primary">
                Close
            </Button>
        </DialogActions>
    </Dialog>
</div>
);
}

export default CommentsDialog