import { AiOutlineSearch } from 'react-icons/ai';
import { FaCartShopping, FaListUl, FaUser } from "react-icons/fa6";
import Logo from '..//assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="conteiner-mercado">
        <div className="mercado-modelo">
          <img className="logo-mercado" src={Logo} alt="logo mercado" />
          <p className="supermercado-paragrafo">Supermercado <br/> Modelo</p>
        </div>
       
        <div className="search-input">
         <AiOutlineSearch className="search-icon" style={{ fontSize: '25px' }} />
         <input type="text" id="busca" placeholder="O que você procura?" aria-required="true" />
        </div>
      
        <div className="buttons">
          <a className='button' href="./">
            <button className="my-list-button"><FaListUl/><span> Lista</span></button>
            <button className="my-account-button"><FaUser/><span> Minha Conta</span></button>
            <button className="cart-button" id="carrinho-icon"><FaCartShopping/><span> Carrinho</span></button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
