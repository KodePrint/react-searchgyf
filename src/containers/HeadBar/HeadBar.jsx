import { Link } from "wouter";
// Import components
import ThemeButton from "components/ThemeButton/ThemeButton";
// Import Context
// Import Custom Hooks
import { useTheme } from "hooks/useTheme";
// Import styles
import HeadBarStyle from './styles.module.scss';

const HeadBar = () => {

  const { theme } = useTheme();

  return (
    <header
      className={
        `${theme === 'light' 
        ? (HeadBarStyle.header +' '+ HeadBarStyle.light) 
        : (HeadBarStyle.header +' '+ HeadBarStyle.dark) }` }
    >
      <div className="logo">
        <img src="" alt="Logo" />
        <h1>SearchPhy</h1>
      </div>
      <div 
      >
        <Link to="/">
        </ Link>
        <ThemeButton />
      </div>
    </header>
  );
}

export default HeadBar;