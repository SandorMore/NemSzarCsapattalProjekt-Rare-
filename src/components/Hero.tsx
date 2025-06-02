import React from 'react';
import { motion } from 'framer-motion';
import {
  HeroSection,
  HeroContent,
  Title,
  Subtitle,
  ButtonContainer,
  CTAButton,
  SecondaryButton
} from './Hero.styles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Solar System Simulator
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the beauty and complexity of planetary systems through an advanced Unity-powered simulation. Explore orbital mechanics, gravitational forces, and celestial dynamics in real-time.
        </Subtitle>
        <ButtonContainer>
          <CTAButton
            href="/Install/solar-system-install.zip"
            download="solar-system-install.zip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Install
          </CTAButton>
          <SecondaryButton
            href="https://github.com/SandorMore/NemSzarCsapattalProjekt-Rare-#"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            View on GitHub
          </SecondaryButton>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 