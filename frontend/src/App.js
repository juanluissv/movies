import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie'
import Favorites from './components/Favorites'
import Search from './components/Search'
import Genre from './components/Genre'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'



function App() {
  return (
    <Router>
      <Header />
        <main className="py-3">
          <Container>
            <Route path='/' component={Home} exact />
            <Route path='/movie/:id' component={Movie} />
            <Route path='/favorites' component={Favorites} />
            <Route path='/search' component={Search} />
            <Route path='/genre' component={Genre} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
          </Container>
        </main>
    </Router>
  );
}

export default App;
