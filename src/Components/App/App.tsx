import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommentsPage from '../Pages/CommentsPage';
import ErrorPage from '../Pages/ErrorPage';
import LandingPage from '../Pages/LandingPage';
import PostsPage from '../Pages/PostsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/Posts" component={PostsPage} exact/>
        <Route path="/Comments" component={CommentsPage} exact/>
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
