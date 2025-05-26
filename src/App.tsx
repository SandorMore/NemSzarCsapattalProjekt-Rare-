import React from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/GlobalStyles';
import { LanguageProvider } from './context/LanguageContext';
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
      <LanguageSwitcher />
      <Global styles={globalStyles} />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Development />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default App; 