import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Main from './pages/Main'
import ScrollToTop from './components/ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )