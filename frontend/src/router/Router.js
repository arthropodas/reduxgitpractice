import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/login/Login'

import MovieCards from '../components/moviecards/MovieCards';
import MovieListing from '../components/movielisting/MovieListing';

const routes = [
  {
    path: '/',
    element: <MovieCards />
  },
  {
    path: '/',
    element: <MovieCards />
  },
  {
    path:'/',
    element: <MovieListing/>
  },
  {
    path:'/login/',
    element: <Login/>
  }
];

const router = createBrowserRouter(routes);
export default router;