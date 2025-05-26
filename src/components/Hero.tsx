import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(rgba(10, 11, 15, 0.8), rgba(10, 11, 15, 0.9)),
    url('/space-bg.jpg') center/cover no-repeat;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(74, 158, 255, 0.1) 0%, rgba(10, 11, 15, 0) 70%);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(CTAButton)`
  background: transparent;
  border: 1px solid var(--color-primary);
  
  &:hover {
    background: rgba(74, 158, 255, 0.1);
  }
`;

const Hero = () => {
  const { t } = useLanguage();
  const StyledHeroSection = HeroSection as any;
  const StyledHeroContent = HeroContent as any;
  const StyledTitle = Title as any;
  const StyledSubtitle = Subtitle as any;
  const StyledCTAButton = CTAButton as any;
  const StyledSecondaryButton = SecondaryButton as any;
  const StyledButtonContainer = ButtonContainer as any;

  return (
    <StyledHeroSection>
      <StyledHeroContent>
        <StyledTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('hero.title')}
        </StyledTitle>
        <StyledSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {t('hero.subtitle')}
        </StyledSubtitle>
        <StyledButtonContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <StyledCTAButton>
              {t('hero.install')}
            </StyledCTAButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <StyledSecondaryButton as="a" href="https://github.com/SandorMore/NemSzarCsapattalProjekt-Rare-#" target="_blank">
              {t('hero.viewGithub')}
            </StyledSecondaryButton>
          </motion.div>
        </StyledButtonContainer>
      </StyledHeroContent>
    </StyledHeroSection>
  );
};

export default Hero; 