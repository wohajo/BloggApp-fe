import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from '../Navbar/Navbar';
import PostArea from '../PostArea/PostArea';
import { Container, Typography } from '@material-ui/core';

const PostPage = () => {
    return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="sm">
            <PostArea />
        </Container>
    </ThemeProvider>
    )
}

export default PostPage