import React from 'react';
import { Home, NotFound, Contact, ProjectDetails } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/project-details/:id' component={ProjectDetails} />
          <Route path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
