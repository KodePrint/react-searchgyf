import { Link } from "wouter";
// Import components
import ThemeButton from "components/ThemeButton/ThemeButton";
// Import styles
import HeadBarStyle from './styles.module.scss';

const HeadBar = () => {
  return (
    <header>
      <div className={HeadBarStyle.header}>
        <Link to="/">
        </ Link>
        <ThemeButton />
      </div>
    </header>
  );
}

export default HeadBar;