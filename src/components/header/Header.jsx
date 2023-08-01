import { AiOutlineSearch } from 'react-icons/ai';
import { FaListUl, FaUser } from 'react-icons/fa6';
import Logo from '../../assets/logo.png';
import Carrinho from '../carrinho/Carrinho';
import './Header.css';

const Header = () => {
  return ( 
      <div className="header">
      <div className="conteiner-mercado">
     <a href='./'>   
        <div className="mercado-modelo">
          <img className="logo-mercado" src={Logo} alt="logo mercado" />
          <p className="supermercado-paragrafo">Supermercado <br /> Modelo</p>
        </div>
        </a>
        <div className="search-input">
          <AiOutlineSearch className="search-icon" style={{ fontSize: '25px' }} />
          <input type="text" id="busca" placeholder="O que você procura?" aria-required="true" />
        </div>

        <div className="buttons">
            <button className="my-list-button"><FaListUl /><span> Lista</span></button>
            <button className="my-account-button"><FaUser /><span> Minha Conta</span></button>
          <div>
            <Carrinho />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;
