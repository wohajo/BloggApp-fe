import { Button, CircularProgress, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostsAPI } from '../../API/PostsAPI';
import { rootState } from '../../Interfaces/interfaces';
import { searchedPostsLoaded, searchedPostsNotLoaded, setSearchedPosts, setSearchPostsPagination } from '../../Redux/Actions';
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

const PostSearchArea = () => {

    const [authorsValue, setAuthorsValue] = React.useState("");
    const [contentsValue, setContentsValue] = React.useState("");
    const [tagValue, setTagValue] = React.useState("");
    const [idValue, setIdValue] = React.useState("");
    const [page, setPage] = React.useState(1);

    const dispatch = useDispatch();
    const pageCount = useSelector((state: rootState) => state.searchPostPagination);
    const posts = useSelector((state: rootState) => state.searchedPosts);
    const isSpinnerVisible = useSelector((state: rootState) => state.searchedPostsSpinner)

    const showPosts = () => {
        if (posts === null || posts.length === 0 ) {
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

    const handleSearchPosts = async (pageNumber: number) => {
        dispatch(searchedPostsNotLoaded())
        PostsAPI
        .fetchPostsBySearchPaginated(pageNumber, authorsValue, tagValue, contentsValue, idValue)
        .then(async (data) => {
            await dispatch(setSearchedPosts(data))
            dispatch(searchedPostsLoaded())
            console.log(data)
        })
        PostsAPI.fetchPostsBySearchCount(authorsValue, tagValue, contentsValue, idValue)
        .then((data) => dispatch(setSearchPostsPagination(data)))
    }

    const handlePageChange = (event: any, value: number) => {
        setPage(value);
        handleSearchPosts(value);
    };
    

    useEffect(() => {
        dispatch(searchedPostsLoaded())
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
                        id="contents-search-textfield"
                        label="Search content here!"
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
                        label="Author search here!"
                        type="text"
                        rows={1}
                        fullWidth
                        color="secondary"
                        className={classes.commentField}
                        value={authorsValue}
                        onChange={(e) => {
                            setAuthorsValue(e.target.value)
                        }}
                    />
                <TextField
                        margin="dense"
                        id="tags-textfield"
                        label="Tag search here!"
                        type="text"
                        rows={1}
                        fullWidth
                        color="secondary"
                        className={classes.commentField}
                        value={tagValue}
                        onChange={(e) => {
                            setTagValue(e.target.value)
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="tags-textfield"
                        label="ID search here!"
                        helperText="If You fill this field the others will be ignored! Remember to type exact ID."
                        type="text"
                        rows={1}
                        fullWidth
                        color="secondary"
                        className={classes.commentField}
                        value={idValue}
                        onChange={(e) => {
                            setIdValue(e.target.value)
                        }}
                    />
                <Button variant="outlined" color="secondary" onClick={() => {
                    setPage(1)
                    handleSearchPosts(1)
                    }}>Search!</Button>
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

export default PostSearchArea