import { Button, CircularProgress, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentsAPI } from '../../API/CommentsAPI';
import { rootState } from '../../Interfaces/interfaces';
import { pageCommentsLoaded, pageCommentsNotLoaded, setComments } from '../../Redux/Actions';
import theme from '../../theme';
import Comment from '../Comment/Comment'

const useStyles = makeStyles({
    commentArea: {
        marginTop: 20,
        maxWidth: 500,
        padding: 10
    },
    noComments: {
        textAlign: "center",
    },
    spinnerWrapper: {
        textAlign: "center"
    },
    commentField: {
        margin: 10
    },
    postingWrapper: {
        marginBottom: 10
    }
});

const CommentsArea = () => {

    const dispatch = useDispatch();

    const comments = useSelector((state: rootState) => state.comments);
    const isSpinnerVisible = useSelector((state: rootState) => state.pageCommentsSpinnner)
    const [usernameValue, setUsernameValue] = React.useState("");

    const showComments = () => {
        if (comments === null) {
            return <Typography className={classes.noComments}>No connection to the server or no input given.</Typography>
        } else if (comments.length === 0) {
            return <Typography className={classes.noComments}>User has no comments.</Typography>
        } else {
            return comments.map(comment => <Comment isInDialog={false} postId={comment.postId} id={comment.id} contents={comment.contents} username={comment.username} />)
        }
    }

    const handleSearch = () => {
        dispatch(pageCommentsNotLoaded())
        CommentsAPI
        .fetchCommentsByUsername(usernameValue)
        .then(async (data) => {
            await dispatch(setComments(data))
            dispatch(pageCommentsLoaded())
        })
    }

    useEffect(() => {
        dispatch(pageCommentsLoaded())
    }, [dispatch]);

    const classes = useStyles();

    return (
        <Paper variant="outlined" color={theme.palette.secondary.main} className={classes.commentArea}>
            {isSpinnerVisible
            ?   <div className={classes.spinnerWrapper}>
                
            </div>
            :<Grid container className={classes.postingWrapper} justify="flex-start">
                <TextField
                margin="dense"
                id="user-textfield"
                label="Serch comments by user"
                type="text"
                helperText="Case sensitive!"
                rows={1}
                fullWidth
                variant="outlined"
                color="secondary"
                className={classes.commentField}
                value={usernameValue}
                onChange={(e) => {
                    setUsernameValue(e.target.value)
                }}
                />
                <Button onClick={handleSearch} className={classes.commentField} color="secondary" variant="outlined">Search</Button>
            </Grid>
            }
            {isSpinnerVisible
            ? <div className={classes.spinnerWrapper}>
                <CircularProgress color="secondary" />
            </div>
            :<Grid container justify = "center">
                {showComments()}
            </Grid>}
        </Paper>
    )
}

export default CommentsArea