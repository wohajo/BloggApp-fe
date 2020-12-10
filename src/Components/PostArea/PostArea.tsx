import { Button, CircularProgress, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostsAPI } from '../../API/PostsAPI';
import { rootState } from '../../Interfaces/interfaces';
import { profilePostsLoaded, profilePostsNotLoaded, setErrors, setPosts } from '../../Redux/Actions';
import theme from '../../theme';
import Post from '../Post/Post';
import Pagination from '@material-ui/lab/Pagination';
import ErrorDialog from '../ErrorDialog/ErrorDialog';

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
    const [contentsValueError, setContentsValueError] = React.useState(false);
    const [contentsValueHelper, setContentsValueHelper] = React.useState("");
    const [authorsValueError, setAuthorsValueError] = React.useState(false);
    const [authorsValueHelper, setAuthorsValueHelper] = React.useState("");
    const [tagsValueError, setTagsValueError] = React.useState(false);
    const [tagsValueHelper, setTagsValueHelper] = React.useState("");
    const [page, setPage] = React.useState(1);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [isErrorShown, setIsErrorShown] = React.useState(false);
    const [pageCount] = React.useState(60);

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
        await PostsAPI
        .postPost({id: "", contents: contentsValue, authors: authorsValue, tags: tagsValue})
        .then((data) => {
            if (data.status !== 201) {
                dispatch(setErrors(data.errors))
                data.errors.forEach((element: any) => {
                    if (element.field === "contents") {
                        setContentsValueHelper(element.defaultMessage)
                        setContentsValueError(true)
                    }
                    else if (element.field === "authors") {
                        setAuthorsValueHelper(element.defaultMessage)
                        setAuthorsValueError(true)
                    }
                    else if (element.field === "tags") {
                        setTagsValueHelper(element.defaultMessage)
                        setTagsValueError(true)
                    }
                    setIsErrorShown(true);
                    setErrorMessage("There was an error updating this post. Check the errors and try again.")
                });
            } else {
                dispatch(profilePostsNotLoaded())
                setContentsValueHelper("")
                setContentsValueError(false)
                setAuthorsValueHelper("")
                setAuthorsValueError(false)
                setTagsValueHelper("")
                setTagsValueError(false)
                setIsErrorShown(false);
                PostsAPI
                .fetchPostsPaginated(1)
                .then((data) => {
                    dispatch(setPosts(data))
                })
                .finally(async () => {
                    await dispatch(profilePostsLoaded())
                })
                    }
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
                        error={contentsValueError}
                        helperText={contentsValueHelper}
                    />
                <TextField
                        margin="dense"
                        id="authors-textfield"
                        label="Authors go here, separate them by comma!"
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
                        error={authorsValueError}
                        helperText={authorsValueHelper}
                    />
                <TextField
                        margin="dense"
                        id="tags-textfield"
                        label="Tag here, separate by comma!"
                        type="text"
                        multiline
                        rows={1}
                        fullWidth
                        color="secondary"
                        className={classes.commentField}
                        value={tagsValue}
                        onChange={(e) => {
                            setTagsValue(e.target.value.replaceAll(" ", "").split(","))
                        }}
                        error={tagsValueError}
                        helperText={tagsValueHelper}
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
            <ErrorDialog isShown={isErrorShown} message={errorMessage}/>
        </Paper>
    )
}

export default PostArea