import { AiOutlineAppstore } from "react-icons/ai";
import { IoHomeOutline, IoPricetagsOutline } from "react-icons/io5";
import kit from '../../assets/kit.jpeg';
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav-container'>
      <a className='button' href="./">
        <button className='inicio'><IoHomeOutline style={{ fontSize: '25px'}}  /> <span> Inicio</span></button>
        <button className="categorias"><AiOutlineAppstore style={{ fontSize: '25px'}} /><span> Todas as Categorias</span></button>
        <button className="ofertass"><IoPricetagsOutline style={{ fontSize: '25px'}} /><span> Ofertas</span></button>
        <button className="kit-churrass"><img className='img-churras' src={kit} alt='kit-img'/><span> Kit Churrasco</span></button>
      </a>
    </div>
  );
};

export default Nav;
