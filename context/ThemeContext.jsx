import { useState } from "react";
import ToggleSwitch from '../components/toggle/ToggleSwitch';
import { createContext } from "react";
export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);
    };

    return (
        <ThemeContext.Provider value={ { isDarkMode, toggleDarkMode } }>
            { children }
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
