import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';
import { postInterface } from '../../Interfaces/interfaces';
import theme from '../../theme';
import { PostsAPI } from '../../API/PostsAPI';
import { useDispatch } from 'react-redux';
import { profilePostsLoaded, profilePostsNotLoaded, resetSearchedPosts, searchedPostsLoaded, searchedPostsNotLoaded, setPosts } from '../../Redux/Actions';
import CommentsDialog from '../CommentsDialog/CommentsDialog';
import EditPostDialog from '../EditDialogs/EditPostDialog';
import ConfirmDialog from './ConfirmDialog';
import { CommentsAPI } from '../../API/CommentsAPI';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 400,
        marginBottom: 50
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    tagsArea: {
        margin: 5,
    },
    authorText: {
        fontWeight: 'bold',
    }, 
    button: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main
    },
    dangerousButton: {
        color: theme.palette.secondary.dark,
    },
    chip: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText,
        marginRight: 5
    }
});

const Post = (props: postInterface) => {
    
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDelete = async (id: String) => {
        dispatch(profilePostsNotLoaded())
        dispatch(searchedPostsNotLoaded())
        dispatch(resetSearchedPosts())
        await PostsAPI.deletePost(id)
        CommentsAPI.deleteCommentsByPostId(id)
        PostsAPI
        .fetchPostsPaginated(1)
        .then((data) => {
            dispatch(setPosts(data))
        })
        .finally(async () => {
            await dispatch(profilePostsLoaded())
            dispatch(searchedPostsLoaded())
        })
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div>
                    {props.authors.map(author => <span key={author} className={classes.authorText}> | {author}</span>)}
                </div>
            <Typography variant="body2" component="p">
                {props.contents}
            </Typography>
        </CardContent>
        <div className={classes.tagsArea}>
            {props.tags.map(tag => <Chip label={tag} key={tag} className={classes.chip} />)}
        </div>
        <CardActions>
            <CommentsDialog postId={props.id}/>
            <EditPostDialog id={props.id} authors={props.authors} contents={props.contents} tags={props.tags}/>
            <ConfirmDialog postId={props.id} onDeleteClick={handleDelete}/>
        </CardActions>
    </Card>
    );
}

export default Post