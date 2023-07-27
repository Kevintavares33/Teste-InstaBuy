import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCar } from '../carcontext/CarContext';
import '../carrinho/Carrinho.css';

const Carrinho = () => {
  const { carItems } = useCar();

  return (
    <div className="cart-container">
      <button className="cart-button" id="carrinho-icon">
        <AiOutlineShoppingCart style={{ fontSize: '23px', color: 'white' }} />
        <p className="car-name" style={{ color: 'white', fontSize: '18px', fontWeight: '100' }}>Carrinho</p>
        <span className="cart-status">{carItems.reduce((total, item) => total + item.quantity, 0)}</span>
      </button>
    </div>
  );
};

export default Carrinho;
