import { Button, CircularProgress, Container, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostsAPI } from '../../API/PostsAPI';
import { rootState } from '../../Interfaces/interfaces';
import { profilePostsLoaded, profilePostsNotLoaded, setPosts } from '../../Redux/Actions';
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
    },
    commentField: {
        margin: 10
    },
    postingWrapper: {
        marginBottom: 10
    }
});

const PostArea = () => {

    const dispatch = useDispatch();
    const [postValue, setPostValue] = React.useState("");

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

    const handleAddPost = async () => {
        dispatch(profilePostsNotLoaded())
        await PostsAPI
        .postPost({id: "", contents: postValue, authors: ["asdsad", "Dasd"], tags: ["tag1", "tag2"]})
        PostsAPI
        .fetchPosts()
        .then((data) => {
            dispatch(setPosts(data))
        })
        .finally(async () => {
            await dispatch(profilePostsLoaded())
        })
    }

    useEffect(() => {
        PostsAPI
        .fetchPosts()
        .then((data) =>
            {
                console.log(data)
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
            </div>
            :<Grid container className={classes.postingWrapper} justify="flex-start">
                            <TextField
                        margin="dense"
                        id="comment-textfield"
                        label="Post here!"
                        type="text"
                        multiline
                        rows={5}
                        fullWidth
                        color="secondary"
                        className={classes.commentField}
                        value={postValue}
                        onChange={(e) => {
                            setPostValue(e.target.value)
                        }}
                    />
                <Button variant="outlined" color="secondary" onClick={() => {handleAddPost()}}>Post!</Button>
            </Grid>
            }
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