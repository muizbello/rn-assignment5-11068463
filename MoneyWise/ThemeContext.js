import React, { createContext, useState } from 'react';


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isOn, setisOn] = useState(false);

    const handletoggle = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
        setisOn(!isOn);
    };

    const theme = {
        isDarkTheme,
        colors: isDarkTheme ? darkColors : lightColors,
        handletoggle,
        isOn,
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

// Define light and dark theme colors
const lightColors = {
    background: 'white',
    text: 'black',
    tabbar: 'white',
    tabbar1: 'black',
    
};

const darkColors = {
    background: '#0b1828',
    text: 'white',
    tabbar: '#142840',
    tabbar1: '#00BBBF',
    filter: 'invert(100%)',
};
