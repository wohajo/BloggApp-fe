import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from '../Navbar/Navbar';
import { XAxis, YAxis, Bar, BarChart, CartesianGrid, Tooltip } from 'recharts';

const LandingPage = () => {
    

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
    </ThemeProvider>
    )
}

export default LandingPage