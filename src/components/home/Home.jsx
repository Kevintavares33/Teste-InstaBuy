import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BannerCarousel from '../banners/BannerCarousel';
import CollectionItems from '../collectionitems/CollectionItems';
import Header from '../header/Header';
import Loc from '../localizacao/Loc';
import Nav from '../navegacao/Nav';
import ProductCarousel from '../productcarousel/ProductCarousel';
import './Home.css';

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
    <div className="container-elementos">
      <Loc />
      <Header />
      <Nav />
      <BannerCarousel banners={banners} />
      <ProductCarousel products={products} />
      <CollectionItems collectionItems={collectionItems} />
    </div>
  );
};

export default Home;





