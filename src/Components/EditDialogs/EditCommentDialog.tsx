import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, TextField } from '@material-ui/core';
import theme from '../../theme';
import { commentInterface, commentInterfaceWithIsInDialog } from '../../Interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { CommentsAPI } from '../../API/CommentsAPI';
import { setComments, setPostComments } from '../../Redux/Actions';

const useStyles = makeStyles({
    button: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main
    },
    commentField: {
        marginLeft: 15,
        marginRight: 15,
        minWidth: "80%"
    }
});

const EditCommentDialog = (props: commentInterfaceWithIsInDialog) => {

    const [open, setOpen] = React.useState(false);
    const [commentContentsValue, setCommentContentsValue] = React.useState(props.contents);
    const [usernameValue, setUsernameValue] = React.useState(props.username);

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClickOpen = () => () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSendEditedComment = async () => {
        if (props.isInDialog) {
            CommentsAPI
            .putComentInPost({id: props.id, contents: commentContentsValue, postId: props.postId, username: usernameValue})
            CommentsAPI
            .fetchCommentsByPostId(props.postId)
            .then((data) => {
                dispatch(setPostComments(data))
            })
            setOpen(false)
        } else {
            CommentsAPI
            .putComentInPost({id: props.id, contents: commentContentsValue, postId: props.postId, username: usernameValue})
            CommentsAPI
            .fetchCommentsByUsername(props.username)
            .then((data) => {
                dispatch(setComments(data))
            })
            setOpen(false)
        }
    };

return (
    <div>
        <Button size="small" variant="contained" className={classes.button} onClick={handleClickOpen()}>Edit</Button>
        <Dialog
            fullWidth={true}
            maxWidth={'xs'}
            open={open}
            onClose={handleClose}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
        <DialogTitle id="scroll-dialog-title">Edit comment</DialogTitle>
        <DialogContent>
        </DialogContent>
        <TextField
            margin="dense"
            id="comment-content-textfield"
            label="Edit content"
            type="text"
            multiline
            rows={7}
            color="secondary"
            className={classes.commentField}
            value={commentContentsValue}
            onChange={(e) => {
                setCommentContentsValue(e.target.value)
            }}
        />
        <TextField
            margin="dense"
            id="comment-user-textfield"
            label="Edit user"
            type="text"
            multiline
            rows={1}
            color="secondary"
            className={classes.commentField}
            value={usernameValue}
            onChange={(e) => {
                setUsernameValue(e.target.value)
            }}
        />
        <DialogActions>
            <Button onClick={handleSendEditedComment} color="primary">
                Send
            </Button>
            <Button onClick={handleClose} color="primary">
                Close
            </Button>
        </DialogActions>
    </Dialog>
</div>
);
}

export default EditCommentDialog