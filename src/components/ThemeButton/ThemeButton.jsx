import React, { useState, useEffect, useContext } from 'react';
// Import icons
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
// Import customHooks
import { useTheme } from 'hooks/useTheme';
// Import context
// Import styles
import ThemeBtnStyle from './styles.module.scss';

const ThemeButton = () => {
  const { theme, setTheme} = useTheme()

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={handleChangeTheme} 
      // className={`${ThemeBtnStyle.themeBtn} ${themeDark ? ThemeBtnStyle.darkBtn : ''}`}
      className={
        `${theme === 'light' 
          ? (ThemeBtnStyle.base +' '+ ThemeBtnStyle.light) 
          : (ThemeBtnStyle.base +' '+ ThemeBtnStyle.dark) }` }
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