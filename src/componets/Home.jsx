import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Home.css";

const BASE_URL = 'https://api.instabuy.com.br/apiv3/';

const HomeScreen = () => {
  const [banners, setBanners] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}layout?subdomain=supermercado`)
      .then((response) => {
        const { data } = response.data;

        if (data) {
          setBanners(data.banners || []);
          setProduct(data.promo || []);
          
        }
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);
  

  return (
    <div className='container'>

      {banners.map((banner) => (
        <div className='banner' key={banner.id}>
          <img src={`https://assets.instabuy.com.br/ib.store.banner/bnr-${banner.image}`} alt={banner.title} />
        </div>
      ))}
      <h2>Products</h2>
      {product.map((product) => (
        <div key={product.id}>
          {product.images && product.images.length > 0 && (
            <img src={`https://assets.instabuy.com.br/ib.item.image.medium/m-${product.images[0]}`} alt={product.name} />
          )}
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};



//2 tela

const ProductScreen = ({ slug }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}item?subdomain=supermercado&slug=${slug}`)
      .then((response) => {
        const { data } = response.data;

        if (data) {
          setProduct(data);
        }
      })
      .catch((error) => {
        console.log('Error fetching product:', error);
      });
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='scream'>
      <h1>Product screen</h1>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <img src={`https://assets.instabuy.com.br/ib.item.image.medium/m-${product.photo}`} alt={product.name} />
      <p>Description: {product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

const Home = () => {
  const [currentScreen, setCurrentScreen] = useState('home');

  const handleProductClick = (slug) => {
    setCurrentScreen('product');
    // Pass the slug to the ProductScreen component
  };

  return (
    <div>
      {currentScreen === 'home' && <HomeScreen handleProductClick={handleProductClick} />}
      {currentScreen === 'product' && <ProductScreen slug="product-slug" />}
    </div>
  );
};

export default Home;
