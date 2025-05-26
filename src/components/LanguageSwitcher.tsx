import React from 'react';
import styled from '@emotion/styled';
import { useLanguage } from '../context/LanguageContext';

const SwitcherContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  display: flex;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
`;

const LanguageButton = styled.button<{ isActive: boolean }>`
  background: ${props => props.isActive ? 'var(--color-primary)' : 'transparent'};
  color: ${props => props.isActive ? '#fff' : 'var(--color-text-secondary)'};
  border: 1px solid ${props => props.isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)'};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.isActive ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const StyledSwitcherContainer = SwitcherContainer as any;
  const StyledLanguageButton = LanguageButton as any;

  return (
    <StyledSwitcherContainer>
      <StyledLanguageButton
        isActive={language === 'en'}
        onClick={() => setLanguage('en')}
      >
        EN
      </StyledLanguageButton>
      <StyledLanguageButton
        isActive={language === 'hu'}
        onClick={() => setLanguage('hu')}
      >
        HU
      </StyledLanguageButton>
      <StyledLanguageButton
        isActive={language === 'fr'}
        onClick={() => setLanguage('fr')}
      >
        FR
      </StyledLanguageButton>
    </StyledSwitcherContainer>
  );
};

export default LanguageSwitcher; 