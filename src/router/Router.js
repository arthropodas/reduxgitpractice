import { createBrowserRouter } from 'react-router-dom';


import MovieCards from '../components/moviecards/MovieCards';
import MovieListing from '../components/movielisting/MovieListing';

const routes = [
  {
    path: '/',
    element: <MovieCards />
  },
  {
    path: '/moviecards',
    element: <MovieCards />
  },
  {
    path:'/list/',
    element: <MovieListing/>
  }
];

const router = createBrowserRouter(routes);
export default router;