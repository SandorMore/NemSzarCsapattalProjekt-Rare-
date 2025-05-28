import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

type Section = 'hero' | 'about' | 'features' | 'gallery' | 'development' | 'footer';

interface NavigationContextType {
  currentSection: Section;
  navigateToSection: (section: Section) => void;
  isTransitioning: boolean;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<Section>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const programmaticScrollRef = useRef<{ active: boolean; targetSection: Section | null }>({
    active: false,
    targetSection: null
  });
  const sections: Section[] = ['hero', 'about', 'features', 'gallery', 'development', 'footer'];

  // Function to handle section visibility updates
  const handleSectionVisibility = (entries: IntersectionObserverEntry[]) => {
    // If we're in a programmatic scroll, only update for the target section
    if (programmaticScrollRef.current.active) {
      const targetEntry = entries.find(entry => entry.target.id === programmaticScrollRef.current.targetSection);
      if (targetEntry?.isIntersecting) {
        setCurrentSection(targetEntry.target.id as Section);
      }
      return;
    }

    // For manual scrolling, find the most visible section
    let maxVisibility = 0;
    let mostVisibleSection: Section | null = null;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const visibilityRatio = entry.intersectionRatio;
        if (visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio;
          mostVisibleSection = entry.target.id as Section;
        }
      }
    });

    if (mostVisibleSection && maxVisibility > 0.5) {
      setCurrentSection(mostVisibleSection);
    }
  };

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleSectionVisibility, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-20% 0px'
    });

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navigateToSection = (section: Section) => {
    if (isTransitioning) return;

    // Set up programmatic scroll state
    programmaticScrollRef.current = {
      active: true,
      targetSection: section
    };
    
    setIsTransitioning(true);
    setCurrentSection(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      // Reset programmatic scroll state after animation
      setTimeout(() => {
        programmaticScrollRef.current = {
          active: false,
          targetSection: null
        };
        setIsTransitioning(false);
      }, 1000); // Match this with your scroll-behavior transition duration
    }
  };

  // Handle manual scrolling detection
  useEffect(() => {
    let scrollTimeout: number;

    const handleManualScroll = () => {
      // If this is a programmatic scroll, don't interfere
      if (programmaticScrollRef.current.active) return;

      // Clear any existing timeout
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }

      // Set a timeout to detect when scrolling ends
      scrollTimeout = window.setTimeout(() => {
        programmaticScrollRef.current = {
          active: false,
          targetSection: null
        };
      }, 150);
    };

    window.addEventListener('scroll', handleManualScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleManualScroll);
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <NavigationContext.Provider value={{ currentSection, navigateToSection, isTransitioning }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}; 