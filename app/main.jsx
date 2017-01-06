'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import AddPost from './components/addPost'
import IdeaBar from './components/ideaBar'
import Navbar from './components/navbar'
import IdeaList from './components/idealist'

injectTapEventPlugin();

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
    <Navbar user={user}/> 
      {children}
    </div>
)

render (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={ExampleApp}>
          <IndexRedirect to="/ideaList" />
          <Route path="/addPost" component={AddPost} />
          <Route path="/ideaBar" component={IdeaBar} />
          <Route path="/ideaList" component={IdeaList} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)