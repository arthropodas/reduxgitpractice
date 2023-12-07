import logo from './logo.svg';
import './App.scss';
import { BrowserRouter , } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import { Provider } from 'react-redux';
import { store } from './app/Store';
import MovieListing from './components/movielisting/MovieListing';
import ErrorBoundary from './components/errorboundary/ErrorBoundary';
function App() {
  return (

    <ErrorBoundary>

   <Provider store={store}>
     <RouterProvider router={router}/>
     <MovieListing/>
   </Provider>
    </ErrorBoundary>
 
  
  );
}

export default App;
