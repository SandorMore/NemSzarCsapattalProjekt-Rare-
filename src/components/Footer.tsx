import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const FooterSection = styled.footer`
  padding: 4rem 0;
  background: linear-gradient(0deg, var(--color-background) 0%, rgba(10, 11, 15, 0.95) 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      var(--color-primary) 50%, 
      transparent 100%
    );
    opacity: 0.3;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const Column = styled.div`
  color: var(--color-text);
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`;

const Text = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  color: var(--color-text);
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--color-primary);
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Link = styled.a`
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--color-primary);
  }
`;

const Footer = () => {
  const { t } = useLanguage();
  const StyledFooterSection = FooterSection as any;
  const StyledContainer = Container as any;
  const StyledColumn = Column as any;
  const StyledTitle = Title as any;
  const StyledText = Text as any;
  const StyledSocialLinks = SocialLinks as any;
  const StyledSocialLink = SocialLink as any;
  const StyledLinks = Links as any;
  const StyledLink = Link as any;

  return (
    <StyledFooterSection>
      <StyledContainer>
        <StyledColumn>
          <StyledTitle>{t('footer.about')}</StyledTitle>
          <StyledText>
            {t('footer.aboutDesc')}
          </StyledText>
          <StyledSocialLinks>
            <StyledSocialLink href="https://github.com/SandorMore/NemSzarCsapattalProjekt-Rare-#" target="_blank">
              GitHub
            </StyledSocialLink>
            <StyledSocialLink href="https://twitter.com/yourusername" target="_blank">
              Twitter
            </StyledSocialLink>
            <StyledSocialLink href="https://linkedin.com/in/yourusername" target="_blank">
              LinkedIn
            </StyledSocialLink>
          </StyledSocialLinks>
        </StyledColumn>
        <StyledColumn>
          <StyledTitle>{t('footer.quickLinks')}</StyledTitle>
          <StyledLinks>
            <StyledLink href="#features">{t('footer.features')}</StyledLink>
            <StyledLink href="#gallery">{t('footer.gallery')}</StyledLink>
            <StyledLink href="#development">{t('footer.development')}</StyledLink>
            <StyledLink href="https://github.com/SandorMore/NemSzarCsapattalProjekt-Rare-#">{t('footer.sourceCode')}</StyledLink>
          </StyledLinks>
        </StyledColumn>
        <StyledColumn>
          <StyledTitle>{t('footer.contact')}</StyledTitle>
          <StyledText>
            {t('footer.contactDesc')}
          </StyledText>
          <StyledLink href="mailto:your.email@example.com">
            your.email@example.com
          </StyledLink>
        </StyledColumn>
      </StyledContainer>
    </StyledFooterSection>
  );
};

export default Footer; 