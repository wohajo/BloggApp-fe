import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, TextField } from '@material-ui/core';
import theme from '../../theme';
import { postIdProp } from '../../Interfaces/interfaces';
import { CommentsAPI } from '../../API/CommentsAPI';

const useStyles = makeStyles({
    button: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main
    },
});

const CommentsDialog = (props: postIdProp) => {
    const [open, setOpen] = React.useState(false);
    const [commentValue, setCommentValue] = React.useState("");

    const classes = useStyles();

    const handleClickOpen = () => () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleComment = () => {
        CommentsAPI.postComentInPost({id: "", contents: commentValue, postId: props.postId, username: "testUser"})
    };

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
            <DialogContentText
                id="scroll-dialog-description"
                tabIndex={-1}
            >{"lorem ipsum"}
            </DialogContentText>
            <TextField
                        autoFocus
                        margin="dense"
                        id="comment-textfield"
                        label="Write your comment"
                        type="text"
                        multiline
                        rows={3}
                        fullWidth
                        color="secondary"
                        value={commentValue}
                        onChange={(e) => {
                            setCommentValue(e.target.value)
                        }}
                    />
        </DialogContent>
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