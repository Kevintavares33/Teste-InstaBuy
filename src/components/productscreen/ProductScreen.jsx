import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useCar } from '../carcontext/CarContext';
import Header from '../header/Header';
import Loc from '../localizacao/Loc';
import Nav from '../navegacao/Nav';
import './ProductScreen.css';

const BASE_URL = 'https://api.instabuy.com.br/apiv3/';

const ProductScreen = () => {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { addToCar } = useCar();

  useEffect(() => {
    if (id) {
      axios
        .get(`${BASE_URL}item?subdomain=supermercado&slug=${id}`)
        .then((response) => {
          const { data } = response.data;
          if (data) {
            setProduct(data[0] || []);
          }
        })
        .catch((error) => {
          console.log('Este é erro:', error);
        });
    }
  }, [id]);

  
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.prices[0].price,
      quantity: quantity,
    };
    addToCar(newItem);
    console.log(`Adicionando ${quantity} unidades ao carrinho.`);
  };

  return (
    <>
      <Loc />
      <Header />
      <Nav />
      <div className="screen-product-container">
        {product ? (
          <div className="screen-product">
            <div className="screen-product-image">
              <img
                src={`https://assets.instabuy.com.br/ib.item.image.medium/m-${product.images[0]}`}
                alt={product.name}
              />
            </div>
            <div className="screen-product-info">
              <div className="screen-product-name">{product.name}</div>
              <div className="screen-product-price">R${product.prices[0].price}/und</div>
              <div className="quantity-container">
                <button className="quantity-btn" onClick={handleDecrement}>-</button>
                <span className="quantity-display">{quantity}</span>
                <button className="quantity-btn" onClick={handleIncrement}>+</button>
              </div>
              <button className="car-btn-screen" id="carrinho-icon" onClick={handleAddToCart}>
                <AiOutlineShoppingCart
                  style={{ fontSize: '33px', color: 'white', marginRight: '9px' }}/>
                Adicionar
              </button>
            </div>
          </div>
        ) : (
          <p>carregando....</p>
        )}
        {product && (
          <div className="screen-product-description">
            <h3>Descrição do Produto:</h3>
            <br />
            {product.description}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductScreen;
