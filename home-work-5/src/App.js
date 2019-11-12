import React from 'react'
import Users from './users'
import Home from './home'
import Albums from './albums'
import Header from './Header'
import './App.css'
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <aside>
          <Switch>
            <Route path='/albums' component={Albums} />
            <Route path='/users' component={Users} />
            <Route exact path='/' component={Home} />
            <Users />
          </Switch>
        </aside>
      </div>
    </Router>
  )
}
