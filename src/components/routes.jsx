
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './home/home'
import Profile from './profile/profile'
import Contact from './contact/contact'
import Projects from './projects/projects'
import Project from './project/project'
import Notfound from './notfound/notfound';
import Skills from './skills/skills'
import Success from './success/success'



const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Redirect from='/home' to='/' />
          <Route path='/profile' component={Profile} />
          <Route path='/projects' component={Projects} />
          <Route path='/project/:id' component={Project} />
          <Route path='/contact' component={Contact} />
          <Route path='/skills' component={Skills} />
          <Redirect from='/sucess' to='/success' />
          <Route path='/success' component={Success} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </>
  )
}

export default Routes
