import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AppliedRoute from './components/AppliedRoute'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import UnauthenticatedRoute from './components/UnauthenticatedRoute'

import Home from './containers/Home'
import SignIn from './containers/SignIn'
import SignUp from './containers/SignUp'
import TestComponent from './containers/TestComponent'
import NotFound from './containers/NotFound'

export default ({ childProps }) => (
  <Switch>
    <UnauthenticatedRoute
      path='/sign-in'
      exact
      component={SignIn}
      props={childProps}
    />
    <UnauthenticatedRoute
      path='/sign-up'
      exact
      component={SignUp}
      props={childProps}
    />
    <AuthenticatedRoute
      path='/test-comp'
      exact
      component={TestComponent}
      props={childProps}
    />

    <AppliedRoute path='/' exact component={Home} props={childProps} />

    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
)
