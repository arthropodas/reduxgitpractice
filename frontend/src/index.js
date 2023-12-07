import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./styles/tailwind.css";
import { Provider } from "react-redux";
import { store } from "./app/Store";
import MovieListing from "./components/movielisting/MovieListing";
import MovieCards from "./components/moviecards/MovieCards";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="bg-red-400 mt-14 h-screen ">
            <App />
        </div>
        <Footer />
      </div>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
