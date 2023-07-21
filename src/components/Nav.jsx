import { AiOutlineAppstore } from "react-icons/ai";
import { IoHomeOutline ,IoPricetagsOutline} from "react-icons/io5";
import kit from '../assets/kit.jpeg'
import './Nav.css';
const Nav = () => {
  return (
    <Nav className="nav">
            <a className='button' href="./">
         <button><IoHomeOutline/><span> Inicio</span></button>
       
         <button className="categorias"><AiOutlineAppstore/><span> Todas as Categorias</span></button>
       
         <button id="ofertas"><IoPricetagsOutline/><span> Ofertas</span></button>
       
         <button id="kit-churras"><img className='img-churras' src={kit} alt='kit-img'/><span> Kit Churrasco</span></button>
          </a>

    </Nav>
  )
}

export default Nav