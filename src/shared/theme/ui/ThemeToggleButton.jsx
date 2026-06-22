import Button from '@/shared/ui/Button';
import useTheme from '@/shared/theme/useTheme';
import styles from './ThemeToggleButton.module.scss';

const ThemeToggleButton = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  const isDarkTheme = theme === 'dark';

  return (
    <Button
      className={`${styles.themeToggleButton} ${className}`}
      onClick={toggleTheme}
      title={
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      }
    >
      {isDarkTheme ? '☀️' : '🌙'}
    </Button>
  );
};

export default ThemeToggleButton;
