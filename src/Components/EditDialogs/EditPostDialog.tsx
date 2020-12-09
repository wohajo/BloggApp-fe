import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, TextField } from '@material-ui/core';
import theme from '../../theme';
import { postInterface, rootState } from '../../Interfaces/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { PostsAPI } from '../../API/PostsAPI';
import { resetSearchedPosts, searchedPostsLoaded, searchedPostsNotLoaded, setPosts } from '../../Redux/Actions';


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

const EditPostDialog = (props: postInterface) => {
    


    const [open, setOpen] = React.useState(false);
    const [postContentValue, setPostContentValue] = React.useState(props.contents);
    const [postAuthorValue, setPostAuthorValue] = React.useState(props.authors);
    const [postTagsValue, setPostTagsValue] = React.useState(props.tags);

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClickOpen = () => () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSendEditedPost = async () => {
        dispatch(searchedPostsNotLoaded())
        dispatch(resetSearchedPosts())
        PostsAPI
        .updatePost({id: props.id, contents: postContentValue, authors: postAuthorValue, tags: postTagsValue})
        PostsAPI
        .fetchPostsPaginated(1)
        .then((data) => {
            dispatch(setPosts(data))
        })
        setOpen(false)
        dispatch(searchedPostsLoaded())
    };

return (
    <div>
        <Button size="small" variant="contained" className={classes.button} onClick={handleClickOpen()}>Edit</Button>
        <Dialog
            fullWidth={true}
            maxWidth={'md'}
            open={open}
            onClose={handleClose}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
        <DialogTitle id="scroll-dialog-title">Edit post</DialogTitle>
        <DialogContent>
        </DialogContent>
        <TextField
            margin="dense"
            id="post-author-textfield"
            label="Edit post's authors, separate by comma"
            type="text"
            multiline
            rows={2}
            color="secondary"
            className={classes.commentField}
            value={postAuthorValue}
            onChange={(e) => {
                setPostAuthorValue(e.target.value.split(","))
            }}
        />
        <TextField
            margin="dense"
            id="post-content-textfield"
            label="Edit post's content"
            type="text"
            multiline
            rows={8}
            color="secondary"
            className={classes.commentField}
            value={postContentValue}
            onChange={(e) => {
                setPostContentValue(e.target.value)
            }}
        />
        <TextField
            margin="dense"
            id="post-tags-textfield"
            label="Edit post's tags, separate by comma"
            type="text"
            multiline
            rows={2}
            color="secondary"
            className={classes.commentField}
            value={postTagsValue}
            onChange={(e) => {
                setPostTagsValue(e.target.value.split(','))
            }}
        />
        <DialogActions>
            <Button onClick={handleSendEditedPost} color="primary">
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

export default EditPostDialog