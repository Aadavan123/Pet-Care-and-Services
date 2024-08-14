import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Home from './components/Home';
import Pets from './components/Pets';
import Products from './components/Product';
import Services from './components/Services';
import Cart from './components/Cart';
import PetDetails from './components/PetDetails'; 
import ProductDetails from './components/ProductDetails';
import ServiceDetails from './components/ServiceDetails'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <ToastContainer />
          <main>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pets" element={<Pets />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                {isLoggedIn && <Route path="/cart" element={<Cart />} />}
                <Route path="/pets/:id" element={<PetDetails />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/services/:id" element={<ServiceDetails />} /> 
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
