import { CircularProgress, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostsAPI } from '../../API/PostsAPI';
import { rootState } from '../../Interfaces/interfaces';
import { profilePostsLoaded, setPosts } from '../../Redux/Actions';
import theme from '../../theme';
import Post from '../Post/Post';

const useStyles = makeStyles({
    postArea: {
        marginTop: 20,
        maxWidth: 500,
        padding: 10
    },
    noPosts: {
        textAlign: "center",
    },
    spinnerWrapper: {
        textAlign: "center"
    }
});

const PostArea = () => {

    const dispatch = useDispatch();

    const posts = useSelector((state: rootState) => state.posts);
    const isSpinnerVisible = useSelector((state: rootState) => state.postsSpinner)

    const showPosts = () => {
        if (posts === null) {
            return <Typography className={classes.noPosts}>No connection to the server.</Typography>
        } else if (posts.length === 0) {
            return <Typography className={classes.noPosts}>No posts to show.</Typography>
        } else {
            return posts.map(post => <Post key={"post" + post.id} id={post.id} authors={post.authors} tags={post.tags} contents={post.contents} />)
        }
    }

    useEffect(() => {
        PostsAPI
        .fetchPosts()
        .then((data) =>
            {
                dispatch(setPosts(data))
                dispatch(profilePostsLoaded())
            })
        .catch(err => {
            if (err.respone === undefined) {
                dispatch(profilePostsLoaded())
            }
        })
    }, [dispatch]);

    const classes = useStyles();

    return (
        <Paper variant="outlined" color={theme.palette.secondary.main} className={classes.postArea}>
            {isSpinnerVisible
            ? <div className={classes.spinnerWrapper}>
                <CircularProgress color="secondary" />
            </div>
            :<Grid container justify = "center">
                {showPosts()}
            </Grid>}
        </Paper>
    )
}

export default PostArea