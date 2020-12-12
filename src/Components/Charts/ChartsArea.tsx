import { Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import { StatsAPI } from '../../API/StatsAPI';


const ChartsArea = () => {

  const [bestUsers, setBestUsers] = React.useState([{
    name: "",
    value: 0
  }]);
  const [longestPosts, setLongestPosts] = React.useState([{
    name: "",
    value: 0
  }]);
  const [bestPosts, setBestPosts] = React.useState([{
    name: "",
    value: 0
  }]);

  useEffect(() => {
    StatsAPI.fetchBestUsers()
    .then((data) => {
      console.log(data)
      setBestUsers(data)
      })
    StatsAPI.fetchLongestPosts()
    .then((data) => {
      console.log(data)
      setLongestPosts(data)
    })
    StatsAPI.fetchBestPosts()
    .then((data) => {
      console.log(data)
      setBestPosts(data)
    })
    }, [])

    return (
        <Grid container justify="center">
          {bestUsers.length < 5
          ? <Typography>No connection or too few users has posted, check it later!</Typography>
          :<VictoryChart
          domainPadding={30}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={[bestUsers[0].name, bestUsers[1].name, bestUsers[2].name, bestUsers[3].name, bestUsers[4].name]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x}`)}
          />
          <VictoryBar
            data={bestUsers}
            x="name"
            y="value"
          />
        </VictoryChart>}
          {longestPosts.length < 5
          ? <Typography>No connection or too few posts has been made, check it later!</Typography>
          :<VictoryChart
          domainPadding={30}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={[longestPosts[0].name, longestPosts[1].name, longestPosts[2].name, longestPosts[3].name, longestPosts[4].name]}
            />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x}`)}
          />
          <VictoryBar
            data={longestPosts}
            x="name"
            y="value"
          />
        </VictoryChart>}
          {bestPosts.length < 5
          ?<Typography></Typography>
          :<VictoryChart
          domainPadding={30}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={[bestPosts[0].name, bestPosts[1].name, bestPosts[2].name, bestPosts[3].name, bestPosts[4].name]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x}`)}
          />
          <VictoryBar
            data={bestPosts}
            x="name"
            y="value"
          />
        </VictoryChart>}
        </Grid>
    );
}

export default ChartsArea