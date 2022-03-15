import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="shoppingcart" element={<ShoppingCart />} />
  <Route path="products" element={<Products />} />
  <Route path="*" element={<NoPage />} />
  </Route>
  </Routes>
  </BrowserRouter>
  );
 }

  
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
