import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from '../Navbar/Navbar';
import ChartsArea from '../Charts/ChartsArea';

const StatisticsPage = () => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <ChartsArea />
    </ThemeProvider>
    )
}

export default StatisticsPage