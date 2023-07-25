import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

const Carrinho = () => {
  return (
    <div className='Buttons'>
<button className="cart-button" id="carrinho-icon">
    <FaCartShopping/>
    <span> Carrinho</span>
 
</button>
        
        
    </div>
  )
}

export default Carrinho