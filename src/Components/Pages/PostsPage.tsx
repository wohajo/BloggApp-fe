import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

const PostPage = () => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
    </ThemeProvider>
    )
}

export default PostPage