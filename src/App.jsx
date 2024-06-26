/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import Error from './pages/Error/Error';
import Cadastro from './pages/Cadastro/Cadastro';
import ShoppingCard from './pages/ShoppingCart';
import PrivateRoute from './PrivateRoute';
import { ProdutosProvider } from './context/produtos-context';
import './App.css';


const App = () => {
  return (
    <ProdutosProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/login' Component={Login} />
          <Route path='/home' Component={Home} />
          <Route path='/error' Component={Error} />
          <Route path='/cadastro' Component={Cadastro} />
          {/* rotas privadas */}
          <Route element={<PrivateRoute />}>
            <Route path='/shop' Component={ShoppingCard} />
          </Route>
        </Routes>
      </div>
    </ProdutosProvider>
  );
};

export default App;
