import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BannerCarousel from './BannerCarousel';
import CollectionItems from './CollectionItems';
import Header from './Header';
import './Home.css';
import Nav from './Nav';
import ProductCarousel from './ProductCarousel';

const BASE_URL = 'https://api.instabuy.com.br/apiv3/';

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);
  const [collectionItems, setCollectionItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}layout?subdomain=supermercado`)
      .then((response) => {
        const { data } = response.data;

        if (data) {
          setBanners(data.banners || []);
          setProducts(data.promo || []);
          setCollectionItems(data.collection_items || []);
        
        }
      })
      .catch((error) => {
        console.log('Este é erro:', error);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <Nav/>

      <h2>Banners</h2>
      <BannerCarousel banners={banners} />

      <h2>Ofertas</h2>
      <ProductCarousel products={products} />

     
      <h2>Collection Items</h2>
      <CollectionItems collectionItems={collectionItems} />
    </div>
  );
};

export default Home;





