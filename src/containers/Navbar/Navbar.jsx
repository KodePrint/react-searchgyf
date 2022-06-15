import { useLocation, Link } from "wouter";
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
// Import components
import ThemeButton from "components/ThemeButton/ThemeButton";
// Import Custom Hooks
import { useTheme } from "hooks/useTheme";
// Import css module
import NavStyle from './styles.module.scss';

const Navbar = () => {

  const { theme } = useTheme();

  return (
    <nav className={
      `${theme === 'light' 
        ? (NavStyle.base +' '+ NavStyle.light) 
        : (NavStyle.base +' '+ NavStyle.dark) }` }
      >
      <ul className={NavStyle.ul}>
        <li>
          <Link to="/">
            <img src="" alt="Logo" />
            <h1>SearchPhy</h1>
          </Link>
        </li>
        <li>
          <ThemeButton />
        </li>
        <li>
          <Link to="/">
            <RiHome5Fill />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to='#'>
            <RiSearch2Line />
            <span>Search</span>
          </Link>
        </li>
        <li>
          <Link to='/fav'>
            <RiHeart3Line />
            <span>Favorites</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <RiLoginCircleLine />
            <span>Login</span>
          </Link>
        </li>
      </ul>
    </nav> 
  )
}

export default Navbar;