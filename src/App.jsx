import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PostsList from './components/PostsList';
import CreatePost from './components/CreatePost';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Posts</Link>
            </li>
            <li>
              <Link to="/create">Create Post</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route exact path="/">
            <PostsList />
          </Route>
          <Route path="/create">
            <CreatePost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
