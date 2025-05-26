import React from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/GlobalStyles';
import { LanguageProvider } from './context/LanguageContext';
import { NavigationProvider } from './context/NavigationContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Development from './components/Development';
import Footer from './components/Footer';

const App = () => {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <LanguageSwitcher />
        <Global styles={globalStyles} />
        <main>
          <div id="hero"><Hero /></div>
          <div id="about"><About /></div>
          <div id="features"><Features /></div>
          <div id="gallery"><Gallery /></div>
          <div id="development"><Development /></div>
          <div id="footer"><Footer /></div>
        </main>
      </NavigationProvider>
    </LanguageProvider>
  );
};

export default App; 