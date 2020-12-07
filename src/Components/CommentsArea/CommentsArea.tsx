import { CircularProgress, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentsAPI } from '../../API/CommentsAPI';
import { rootState } from '../../Interfaces/interfaces';
import { pageCommentsLoaded, setComments } from '../../Redux/Actions';
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
    }
});

const CommentsArea = () => {

    const dispatch = useDispatch();

    const comments = useSelector((state: rootState) => state.comments);
    const isSpinnerVisible = useSelector((state: rootState) => state.pageCommentsSpinnner)

    const showComments = () => {
        if (comments === null) {
            return <Typography className={classes.noComments}>No connection to the server.</Typography>
        } else if (comments.length === 0) {
            return <Typography className={classes.noComments}>No comments to show.</Typography>
        } else {
            return comments.map(comment => <Comment postId={comment.postId} id={comment.id} contents={comment.contents} username={comment.username} />)
        }
    }

    useEffect(() => {
        CommentsAPI
        .fetchComments()
        .then((data) =>
            {
                console.log(data)
                dispatch(setComments(data))
                dispatch(pageCommentsLoaded())
            })
        .catch(err => {
            if (err.respone === undefined) {
                dispatch(pageCommentsLoaded())
            }
        })

    }, [dispatch]);

    const classes = useStyles();

    return (
        <Paper variant="outlined" color={theme.palette.secondary.main} className={classes.commentArea}>
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