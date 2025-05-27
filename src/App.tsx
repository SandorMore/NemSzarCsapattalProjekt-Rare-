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
import CubeNav from './components/CubeNav';
import styled from '@emotion/styled';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-margin-top: 50px;
`;

const App = () => {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <LanguageSwitcher />
        <Global styles={globalStyles} />
        <CubeNav />
        <main>
          <Section id="hero">
            <Hero />
          </Section>
          <Section id="about">
            <About />
          </Section>
          <Section id="features">
            <Features />
          </Section>
          <Section id="gallery">
            <Gallery />
          </Section>
          <Section id="development">
            <Development />
          </Section>
          <Footer />
        </main>
      </NavigationProvider>
    </LanguageProvider>
  );
};

export default App; 