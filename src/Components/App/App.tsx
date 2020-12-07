import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from '../Pages/ErrorPage';
import LandingPage from '../Pages/LandingPage';
import PostsPage from '../Pages/PostsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/posts" component={PostsPage} exact/>
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
