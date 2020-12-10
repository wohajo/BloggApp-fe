import { Grid } from '@material-ui/core';
import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme } from 'victory';

const ChartsArea = () => {

  const bestUserData = [
    {username: 1, comments: 20},
    {username: 2, comments: 17},
    {username: 3, comments: 14},
    {username: 4, comments: 12}
  ];

    return (
        <Grid container justify="center">
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={30}
          >
            <VictoryAxis
              tickValues={[1, 2, 3, 4]}
              tickFormat={["username 1", "username 2", "username 3", "username 4"]}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={(x) => (`${x}`)}
            />
            <VictoryBar
              data={bestUserData}
              x="username"
              y="comments"
            />
          </VictoryChart>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={30}
          >
            <VictoryAxis
              tickValues={[1, 2, 3, 4]}
              tickFormat={["username 1", "username 2", "username 3", "username 4"]}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={(x) => (`${x}`)}
            />
            <VictoryBar
              data={bestUserData}
              x="username"
              y="comments"
            />
          </VictoryChart>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={30}
          >
            <VictoryAxis
              tickValues={[1, 2, 3, 4]}
              tickFormat={["username 1", "username 2", "username 3", "username 4"]}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={(x) => (`${x}`)}
            />
            <VictoryBar
              data={bestUserData}
              x="username"
              y="comments"
            />
          </VictoryChart>
        </Grid>
    );
}

export default ChartsArea