import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const NavContainer = styled(motion.nav)`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  background: rgba(10, 11, 15, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  border: 1px solid rgba(74, 158, 255, 0.1);

  @media (max-width: 768px) {
    right: 1rem;
    top: 1rem;
    transform: none;
    border-radius: 15px;
  }
`;

const NavItem = styled(motion.a)<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.isActive 
    ? 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))'
    : 'rgba(255, 255, 255, 0.3)'};
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &::before {
    content: attr(data-tooltip);
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(10, 11, 15, 0.9);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.875rem;
    color: white;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    white-space: nowrap;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 15px var(--color-primary);

    &::before {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
  }
`;

const MenuLine = styled(motion.span)`
  width: 24px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 4rem;
    right: 1rem;
    background: rgba(10, 11, 15, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem;
    border-radius: 15px;
    border: 1px solid rgba(74, 158, 255, 0.1);
    flex-direction: column;
    gap: 1rem;
  }
`;

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'planets', label: 'Planets' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

const VerticalNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <NavContainer
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <MenuLine animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }} />
          <MenuLine animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} />
          <MenuLine animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }} />
        </MobileMenuButton>

        {!isMobileMenuOpen && (
          <motion.div className="desktop-nav">
            {sections.map((section) => (
              <NavItem
                key={section.id}
                isActive={activeSection === section.id}
                onClick={() => scrollToSection(section.id)}
                data-tooltip={t(`nav.${section.id}`)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        )}

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {sections.map((section) => (
                <motion.a
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  style={{
                    color: activeSection === section.id ? 'var(--color-primary)' : 'white',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem'
                  }}
                  whileHover={{ x: 5 }}
                >
                  {t(`nav.${section.id}`)}
                </motion.a>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContainer>
    </>
  );
};

export default VerticalNav; 