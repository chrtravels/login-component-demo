import { useContext } from 'react';
import styles from './navbar.module.css';
import { ThemeContext } from '../../pages/index';
import ToggleSwitch from '../toggle/ToggleSwitch';

const Navbar = () => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <h1>Login Test Component</h1>
      </div>
      <div className={styles.themeToggle}>
        <ToggleSwitch />
      </div>
    </div>
  )
}

export default Navbar;
