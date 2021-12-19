import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Games from './components/Games';
import SinglePost from './components/Single-Game';
import Footer from './components/Footer';

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const http = createHttpLink({
  uri: "/graphql",
});

const auth = setContext((_,{headers}) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token? `Bearer ${token}` : "",
    }
  }
})

const client = new ApolloClient({
  link: auth.concat(http),
  cache: new InMemoryCache(),
  uri: "/graphql"
})


function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
