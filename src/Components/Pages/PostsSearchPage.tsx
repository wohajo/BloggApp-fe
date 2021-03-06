import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from '../Navbar/Navbar';
import PostArea from '../PostArea/PostArea';
import { Grid } from '@material-ui/core';
import PostSearchArea from '../PostArea/PostSearchArea';

const PostPage = () => {
    return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Grid container justify = "center">
            <PostSearchArea />
        </Grid>
    </ThemeProvider>
    )
}

export default PostPage