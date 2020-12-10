import { Grid } from '@material-ui/core';
import React from 'react';
import { Tooltip, BarChart, XAxis, YAxis, CartesianGrid, Bar } from 'recharts';

const ChartsArea = () => {

    const data = [
        {name: 'Page A', uv: 400},
        {name: 'Page B', uv: 200},
        {name: 'Page C', uv: 400},
        {name: 'Page D', uv: 400}
    ];

    return (
        <Grid container justify="center">
            <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="uv" fill="#8884d8" barSize={30} />
        </BarChart>
        <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="uv" fill="#8884d8" barSize={30} />
        </BarChart>
        </Grid>
    );
}

export default ChartsArea