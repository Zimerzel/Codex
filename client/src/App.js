// import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { Redirect } from 'react-router-dom';

import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import GameDetails from './components/GameComponents/GameDetails'

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
      <div>
        <header>
          {' '}
          <Nav />
        </header>
        <main>
          <Switch>
            <Route exact path='/' render= {() => (<Redirect to='/home'/>)} />
            <Route exact path='/home' component={Home} />
            <Route
              path='/:slug'
              render={(routerProps) => {
                return (
                  <GameDetails
                    history={routerProps.history}
                    match={routerProps.match}
                  />
                )
              }}
            />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ApolloProvider>
	)
}

export default App
