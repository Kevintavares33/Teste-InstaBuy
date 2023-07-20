import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BannerCarousel from './BannerCarousel';
import Header from './Header';
import './Home.css';
import ProductCarousel from './ProductCarousel';

const BASE_URL = 'https://api.instabuy.com.br/apiv3/';

const Home= () => {
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}layout?subdomain=supermercado`)
      .then((response) => {
        const { data } = response.data;

        
        if (data) {
          setBanners(data.banners || []);
          setProducts(data.promo || []);
        }
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
     <Header/>
     
      <h2>Banners</h2>
      <BannerCarousel banners={banners} />

      <h2>Ofertas</h2>
      <ProductCarousel products={products} />
    </div>
  );
};

export default Home




