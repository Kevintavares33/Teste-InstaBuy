import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CarProvider } from './components/CarContext/CarContext';
import Home from './components/Home/Home';
import ProductScreen from './components/ProductScreen/ProductScreen';

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
