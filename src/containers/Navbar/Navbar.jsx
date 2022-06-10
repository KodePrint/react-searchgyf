import { useLocation } from "wouter";
// Import react-icons
import { 
  RiSearch2Line,
  RiSearch2Fill,
  RiHome5Line,
  RiHome5Fill,
  RiAccountCircleFill, 
  RiLoginCircleLine, 
  RiHeart3Fill, 
  RiHeart3Line, 
  RiAccountCircleLine,
} from 'react-icons/ri';
import NavStyle from './styles.module.scss';

const Navbar = () => {
  const [path, pushLocation] = useLocation()

  return (
    <nav className={NavStyle.navbar}>
      <ul className={NavStyle.ul}>
        <li onClick={() => pushLocation(`/`)}>
          <RiHome5Fill />
        </li>
        <li onClick={() => alert('call the form')}>
          <RiSearch2Line />
        </li>
        <li onClick={() => pushLocation(`/favs`)}>
          <RiHeart3Line />
        </li>
        <li onClick={() => pushLocation(`/login`)}>
          <RiLoginCircleLine />
        </li>
      </ul>
    </nav> 
  )
}

export default Navbar;