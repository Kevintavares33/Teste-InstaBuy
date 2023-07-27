import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '..//src/components/Home/Home';
import ProductScreen from '..//src/components/ProductScreen/ProductScreen';
import { CarProvider } from '../src/components/CarContext/CarContext';

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
