import React, { createContext, useContext, useState, useEffect } from 'react';

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

  const sections: Section[] = ['hero', 'about', 'features', 'gallery', 'development', 'footer'];

  const navigateToSection = (section: Section) => {
    if (isTransitioning) return; // Prevent navigation during transition
    
    setIsTransitioning(true);
    setCurrentSection(section);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Wait for the scroll animation to complete
      // The timeout duration should match your CSS transition duration
      window.setTimeout(() => {
        setIsTransitioning(false);
      }, 800); // Match this with your scroll-behavior transition duration
    }
  };

  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (!isScrolling && !isTransitioning) {
        isScrolling = true;
        
        const currentIndex = sections.indexOf(currentSection);
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
        const nextSection = sections[nextIndex];
        
        if (nextSection !== currentSection) {
          navigateToSection(nextSection);
        }

        // Reset the scroll lock after a short delay
        window.setTimeout(() => {
          isScrolling = false;
        }, 50); // Short debounce for wheel events
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection, isTransitioning]);

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