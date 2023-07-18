import Logo from '..//assets/logo.png';


const Header = () => {
  return (
    <div className="header">
        <p>Supermercado Modelo </p>
    <img src={Logo} alt='logo mercado'></img>
    <input type='text' placeholder='O que você Procura Hoje?'/>
       
       <a href='./'>
         <button>listas</button>
         <br />
         <button>Minha Conta</button>
         <button>Carrinho</button>
       </a>
       
           
    </div>
  )
};

export default Header;