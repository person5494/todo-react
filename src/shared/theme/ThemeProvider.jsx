import { useState, useMemo, useCallback,  useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
  
  const [ theme, setTheme ] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDefaultThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme) {
      return savedTheme
    } return isDefaultThemeDark ? 'dark' : 'light'
  })

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light'
    );
  }, []);

  useEffect(() => {
    const html = document.documentElement
    const favicon = document.querySelector('#favicon')
    const searchTaskIcon = document.querySelector

    html.dataset.theme = theme
    localStorage.setItem('theme', theme)
    if (favicon) {
      favicon.href = theme === 'dark'
      ? '/todo-react/favicon-dark.svg'
      : '/todo-react/favicon-light.svg'
    }
  }, [theme])

  const value = useMemo(() => ({
      theme,
      toggleTheme
  }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
