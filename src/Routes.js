import React from "react";
import {Route, Routes, Switch } from 'react-router-dom';
import ProductScreen from "./components/ProductScreen";
import Home from "./components/Home";


const RoutesTeste = () => {

return(
    <Routes>
        <Route exact path="/" element={<Home />}/>
        
        <Route path="/p/:id/" element={<ProductScreen />} />
    
    
    </Routes>
)

}

export default RoutesTeste