import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Games from './components/Games';
import SinglePost from './components/Single-Game';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        
        <Switch>
          <Route exact path='/' render= {() => (<Redirect to='/home'/>)} />
          <Route exact path='/home' component={Home} />
            <Suspense fallback={<div id="fallback">Loading...</div>}>
              <Route exact path='/games' component={Games} />
              <Route exact path='/single-game' component={SinglePost} />
            </Suspense>
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>

        <Footer />
      </>
    </Router>

  );
}

export default App;
