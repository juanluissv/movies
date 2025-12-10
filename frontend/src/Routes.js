import React from 'react';
import { 
    createBrowserRouter, 
    createRoutesFromElements,
    Route
} from 'react-router-dom';
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
import App from './App';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} >
            <Route index={true} path="/" element={<Home />} />
            <Route path='/movie/:id' element={<Movie />} />
            <Route path='/genre' element={<Genre />} />
            <Route path='/search' element={<Search />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/favorites' element={<Favorites />} />
        </Route>
    )
  );

  export default  router














// function App() {
//   return (
//     <Router>
//           <Routes>
//       {/* <Header /> */}
//         {/* <main className="py-3"> */}
//           {/* <Container> */}
//             <Route path='/' component={Home} exact />
//             {/* <Route path='/movie/:id' component={Movie} />
//             <Route path='/favorites' component={Favorites} />
//             <Route path='/search' component={Search} />
//             <Route path='/genre' component={Genre} />
//             <Route path='/register' component={Register} />
//             <Route path='/login' component={Login} />
//             <Route path='/profile' component={Profile} /> */}
//           {/* </Container> */}
//         {/* </main> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
