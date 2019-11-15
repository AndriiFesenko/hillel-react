import React from 'react'
import './App.css'
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header'
import Posts from './components/posts'
import Home from './components/home'
// import PostsDetails from './components/posts/PostDetails'

function App() {
  return (
    <Router>
      <div className="container">
        <Header></Header>
        <Switch>
          <Route path='/posts/:id?' component={Posts} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
