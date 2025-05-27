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
import CubeNav from './components/CubeNav';
import styled from '@emotion/styled';

const MainContainer = styled.main`
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;

  /* Ensure content is stacked properly */
  & > * {
    flex-shrink: 0;
  }
`;

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <LanguageSwitcher />
        <Global styles={globalStyles} />
        <CubeNav />
        <MainContainer>
          <Section id="hero">
            <ContentWrapper>
              <Hero />
            </ContentWrapper>
          </Section>
          <Section id="about">
            <ContentWrapper>
              <About />
            </ContentWrapper>
          </Section>
          <Section id="features">
            <ContentWrapper>
              <Features />
            </ContentWrapper>
          </Section>
          <Section id="gallery">
            <ContentWrapper>
              <Gallery />
            </ContentWrapper>
          </Section>
          <Section id="development">
            <ContentWrapper>
              <Development />
            </ContentWrapper>
          </Section>
        </MainContainer>
      </NavigationProvider>
    </LanguageProvider>
  );
};

export default App; 