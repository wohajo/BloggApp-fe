import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from '../Navbar/Navbar';
import { Grid } from '@material-ui/core';
import CommentsArea from '../CommentsArea/CommentsArea';

const CommentsPage = () => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Grid container justify = "center">
            <CommentsArea/>
        </Grid>
    </ThemeProvider>
    )
}

export default CommentsPage