import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CarProvider } from './components/carcontext/CarContext';
import Home from './components/home/Home';
import ProductScreen from './components/productscreen/ProductScreen';

const RoutesTeste = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/p/:id/" element={<ProductScreen />} />
    </Routes>
  );
};

const RoutesWrapper = () => {
  return (
    <CarProvider>
      <RoutesTeste />
    </CarProvider>
  );
};

export default RoutesWrapper;
