import { FaCartShopping, FaListUl, FaUser } from "react-icons/fa6";
import Logo from '..//assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="loc">
        <p>Retirar em: Asa Norte, Campus Universitário Darcy Ribeiro Bloco A PMU I Sala AT 08/03 - AC UNB, Edificio CDT, Brasília - DF</p>
      </div>
      
      <div className="nav">
        <div className="mercado-modelo">
          <img className="logo-mercado" src={Logo} alt="logo mercado" />
          <p>Supermercado <br/> Modelo</p>
        </div>
      
        <input type="text" placeholder="O que você Procura Hoje?" />
      
        <div className="buttons">
          <a className='button' href="./">
         <button><FaListUl/><span> Minha Lista</span></button>
         <button><FaUser/><span> Minha Conta</span></button>
         <button id="carrinho-icon"><FaCartShopping/><span> Carrinho</span></button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;