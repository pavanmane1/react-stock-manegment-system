import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import LoginScreen from './components/LoginScrren/Login.jsx';
import RegistrationScreen from './components/RegistrationScreen/registration.jsx';
import Product_type from './components/product_type/product_type.jsx';
import Transaction from './components/transactionScreen/transactions.jsx';
import Dashboard from './components/dashboardScreen/dashboard.jsx';
import Catagoury from './components/catagoury/categories.jsx';
import Navbar from './components/menu/navbar.jsx';
import Newuserregistration from './components/New_user_Registration/newuserregistration.jsx';
import Newcatagory from './components/newcatagory/newcatagory.jsx';

function PrivateRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check localStorage for token to determine if the user is authenticated
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem('token', token); // Persist the token
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/Dashboard" />
            ) : (
              <LoginScreen onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/Dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/Product_type"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Product_type />
            </PrivateRoute>
          }
        />
        <Route
          path="/Transaction"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Transaction />
            </PrivateRoute>
          }
        />
        <Route
          path="/Newuserregistration"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Newuserregistration />
            </PrivateRoute>
          }
        />
        <Route
          path="/Catagoury"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Catagoury />
            </PrivateRoute>
          }
        />
        <Route
          path="/Newcatagory"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Newcatagory />
            </PrivateRoute>
          }
        />
        <Route path="/RegistrationScreen" element={<RegistrationScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
