import { Button, CircularProgress, Container, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostsAPI } from '../../API/PostsAPI';
import { rootState } from '../../Interfaces/interfaces';
import { profilePostsLoaded, profilePostsNotLoaded, setPosts } from '../../Redux/Actions';
import theme from '../../theme';
import Post from '../Post/Post';
import Pagination from '@material-ui/lab/Pagination';

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
    const [contentsValue, setContentsValue] = React.useState("");
    const [authorsValue, setAuthorsValue] = React.useState([""]);
    const [tagsValue, setTagsValue] = React.useState([""]);
    const [page, setPage] = React.useState(1);
    const [pageCount, setPageCount] = React.useState(60);

    const posts = useSelector((state: rootState) => state.posts);
    const isSpinnerVisible = useSelector((state: rootState) => state.postsSpinner)

    const showPosts = () => {
        if (posts === null || posts.length === 0) {
            return <Typography className={classes.noPosts}>No posts to show.</Typography>
        } else {
            return posts.map(post => <Post key={"post" + post.id} id={post.id} authors={post.authors} tags={post.tags} contents={post.contents} />)
        }
    }

    const showPagination = () => {
        if (posts !== null && posts.length > 0) {
            return <Pagination count={pageCount} page={page} variant="outlined" color="secondary" onChange={handlePageChange} />
        }
    }

    const handlePageChange = (event: any, value: number) => {
        setPage(value);
        loadPosts(value);
    };

    const handleAddPost = async () => {
        dispatch(profilePostsNotLoaded())
        await PostsAPI
        .postPost({id: "", contents: contentsValue, authors: authorsValue, tags: tagsValue})
        PostsAPI
        .fetchPosts()
        .then((data) => {
            dispatch(setPosts(data))
        })
        .finally(async () => {
            await dispatch(profilePostsLoaded())
        })
    }

    const loadPosts = (pageNumber: number) => {
        PostsAPI
        .fetchPostsPaginated(pageNumber)
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
    }

    useEffect(() => {
        dispatch(profilePostsNotLoaded())
        PostsAPI
        .fetchPostsPaginated(page)
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
            </div>
            :<Grid container className={classes.postingWrapper} justify="flex-start">
                <TextField
                        margin="dense"
                        id="contents-textfield"
                        label="Post here!"
                        type="text"
                        multiline
                        rows={5}
                        fullWidth
                        color="secondary"
                        className={classes.commentField}
                        value={contentsValue}
                        onChange={(e) => {
                            setContentsValue(e.target.value)
                        }}
                    />
                <TextField
                        margin="dense"
                        id="authors-textfield"
                        label="Authors go here!"
                        type="text"
                        multiline
                        rows={1}
                        fullWidth
                        color="secondary"
                        className={classes.commentField}
                        value={authorsValue}
                        onChange={(e) => {
                            setAuthorsValue(e.target.value.split(","))
                        }}
                    />
                <TextField
                        margin="dense"
                        id="tags-textfield"
                        label="Tag here!"
                        type="text"
                        multiline
                        rows={1}
                        fullWidth
                        color="secondary"
                        className={classes.commentField}
                        value={tagsValue}
                        onChange={(e) => {
                            setTagsValue(e.target.value.split(","))
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
                {showPagination()}
            </Grid>}
        </Paper>
    )
}

export default PostArea