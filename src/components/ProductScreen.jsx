
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://api.instabuy.com.br/apiv3/';

const ProductScreen = () => {
  const { slug } = useParams();
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
        console.log('Este é o erro:', error);
      });
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-container">
      <h1>{product.name}</h1>
      <p>Vai dar certo {product.price}</p>
      
    </div>
  );
};

export default ProductScreen;
