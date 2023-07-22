import { FaCartShopping, FaListUl, FaUser } from "react-icons/fa6";
import Logo from '..//assets/logo.png';
import './Header.css';


const Header = () => {
  return (
    <div className="header">
      <div className="conteiner-mercado">
        <div className="mercado-modelo">
          <img className="logo-mercado" src={Logo} alt="logo mercado" />
          <p>Supermercado <br/> Modelo</p>
        </div>
      
        <input type="text" placeholder="O que você Procura Hoje?" />
      
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
