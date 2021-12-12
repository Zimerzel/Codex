import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Games from './components/Games';

function App() {
  return (
    <Router>
      <>
        <Header />
        
        <Switch>
          <Route exact path='/' render= {() => (<Redirect to='/home'/>)} />
          <Route exact path='/home' component={Home} />
            <Suspense fallback={<div id="fallback">Loading...</div>}>
              <Route exact path='/games' component={Games} />
            </Suspense>
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>

  );
}

export default App;
