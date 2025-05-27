import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const NavContainer = styled(motion.nav)`
  position: fixed;
  right: 3rem;
  height: 320px; /* Fixed height based on content */
  top: calc(50vh - 160px); /* Center exactly in viewport */
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(88, 161, 242, 0.2),
      rgba(88, 161, 242, 0.5),
      rgba(88, 161, 242, 0.2),
      transparent
    );
    z-index: -1;
    filter: blur(1px);
  }

  @media (max-width: 768px) {
    right: 1rem;
    transform: scale(0.8);
    transform-origin: center right;
  }
`;

const CubeButton = styled(motion.button)<{ isActive: boolean }>`
  width: 16px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => props.isActive 
      ? 'linear-gradient(135deg, #4A9EFF, #6D5ACF)'
      : 'rgba(88, 161, 242, 0.2)'};
    border: 1px solid rgba(88, 161, 242, ${props => props.isActive ? '0.8' : '0.3'});
    transform: translateZ(-10px);
    transition: all 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.isActive 
      ? 'linear-gradient(135deg, #4A9EFF, #6D5ACF)'
      : 'rgba(88, 161, 242, 0.1)'};
    border: 1px solid rgba(88, 161, 242, ${props => props.isActive ? '0.8' : '0.3'});
    box-shadow: ${props => props.isActive 
      ? '0 0 15px rgba(74, 158, 255, 0.5)'
      : 'none'};
  }
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  right: calc(100% + 15px);
  top: 50%;
  transform: translateY(-50%);
  background: rgba(10, 11, 25, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #fff;
  white-space: nowrap;
  pointer-events: none;
  border: 1px solid rgba(88, 161, 242, 0.2);
  backdrop-filter: blur(5px);

  &::after {
    content: '';
    position: absolute;
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid rgba(10, 11, 25, 0.9);
  }
`;

const MobileToggle = styled(motion.button)`
  display: none;
  position: fixed;
  right: 1rem;
  top: 1rem;
  background: rgba(10, 11, 25, 0.9);
  border: 1px solid rgba(88, 161, 242, 0.3);
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  z-index: 101;

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'development', label: 'Development' }
];

const CubeNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(true);
  const isScrolling = useRef(false);
  const lastScrollTime = useRef(Date.now());
  const targetSection = useRef<string | null>(null);
  const scrollEndTimeout = useRef<number | null>(null);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    // Don't update during programmatic scrolling to target section
    if (isScrolling.current && targetSection.current) {
      const targetEntry = entries.find(entry => entry.target.id === targetSection.current);
      if (targetEntry?.isIntersecting) {
        setActiveSection(targetSection.current);
        isScrolling.current = false;
        targetSection.current = null;
      }
      return;
    }

    // For manual scrolling, find the most visible section
    if (!isScrolling.current) {
      let maxVisibility = 0;
      let mostVisibleSection: string | null = null;

      entries.forEach((entry) => {
        const rect = entry.boundingClientRect;
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section is visible in the viewport
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibilityRatio = visibleHeight / rect.height;

        if (visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio;
          mostVisibleSection = entry.target.id;
        }
      });

      if (mostVisibleSection && maxVisibility > 0.5) {
        setActiveSection(mostVisibleSection);
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-20% 0px' // Reduced margin for more precise detection
    });

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Clear any existing scroll timeout on cleanup
    return () => {
      observer.disconnect();
      if (scrollEndTimeout.current) {
        window.clearTimeout(scrollEndTimeout.current);
      }
    };
  }, [observerCallback]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Set target section and scrolling state
    isScrolling.current = true;
    targetSection.current = sectionId;
    
    // Clear any existing scroll timeout
    if (scrollEndTimeout.current) {
      window.clearTimeout(scrollEndTimeout.current);
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

    // Fallback timeout to reset scrolling state
    scrollEndTimeout.current = window.setTimeout(() => {
      isScrolling.current = false;
      targetSection.current = null;
    }, 1000);
  };

  const cubeVariants = {
    active: {
      rotateY: [0, 90, 180, 270, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    },
    inactive: {
      rotateY: 0
    }
  };

  return (
    <>
      <MobileToggle
        onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="5" width="16" height="2" rx="1" fill="#4A9EFF" />
          <rect x="4" y="11" width="16" height="2" rx="1" fill="#4A9EFF" />
          <rect x="4" y="17" width="16" height="2" rx="1" fill="#4A9EFF" />
        </svg>
      </MobileToggle>

      <AnimatePresence>
        {(isMobileNavVisible || window.innerWidth > 480) && (
          <NavContainer
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            {sections.map((section) => (
              <div
                key={section.id}
                style={{ position: 'relative' }}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <CubeButton
                  isActive={activeSection === section.id}
                  onClick={() => scrollToSection(section.id)}
                  variants={cubeVariants}
                  animate={activeSection === section.id ? "active" : "inactive"}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                />
                <AnimatePresence>
                  {hoveredSection === section.id && (
                    <Tooltip
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {section.label}
                    </Tooltip>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </NavContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default CubeNav; 