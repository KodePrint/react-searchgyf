import React, { useState, useEffect } from 'react';
// Import icons
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { useContext } from "react";
// Import customHooks
import { useTheme } from 'hooks/useTheme';
// Import context
// Import servicves
import { getSystemTheme } from "services/getSystemTheme";
// Import styles
import ThemeBtnStyle from './styles.module.scss';

const ThemeButton = () => {
  const [themeDark, setThemeDark] = useState();

  useEffect(() => {
    if (getSystemTheme() === 'dark' && themeDark === true) {
      setThemeDark(true);
    } else {
      setThemeDark(false)
    }
  }, [themeDark, setThemeDark]);

  const handleChangeTheme = () => {
    setThemeDark(!themeDark);
  }

  return (
    <button
      onClick={handleChangeTheme} 
      // className={`${ThemeBtnStyle.themeBtn} ${themeDark ? ThemeBtnStyle.darkBtn : ''}`}
      className={`${ThemeBtnStyle.themeBtn}`}
    >
      <span>
        <RiSunFill />
      </span>
      <span>
        <RiMoonFill />
      </span>
    </button>
  );
}

export default React.memo(ThemeButton);