import { AiOutlineAppstore } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import './Nav.css';
const Nav = () => {
  return (
    <div className="nav">
            <a className='button' href="./">
         <button><IoHomeOutline/><span> Inicio</span></button>
         <button><AiOutlineAppstore/><span> Todas as Categorias</span></button>
         <button id="carrinho-icon"><span> Ofertas</span></button>
         <button id="carrinho-icon"><span> Kit Churrasco</span></button>
          </a>

    </div>
  )
}

export default Nav