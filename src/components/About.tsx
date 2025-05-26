import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  padding: 8rem 0;
  background: var(--color-background);
  position: relative;
  overflow: hidden;

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  align-items: center;
`;

const Content = styled.div`
  color: var(--color-text);
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled(motion.p)`
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const TechStack = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const TechBadge = styled(motion.span)`
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid var(--color-primary);
  color: var(--color-text);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 16/9;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const StyledAboutSection = AboutSection as any;
  const StyledContainer = Container as any;
  const StyledContent = Content as any;
  const StyledTitle = Title as any;
  const StyledDescription = Description as any;
  const StyledTechStack = TechStack as any;
  const StyledTechBadge = TechBadge as any;
  const StyledImageContainer = ImageContainer as any;

  const technologies = [
    "Unity", "C#", "Physics Simulation", "Procedural Generation",
    "Orbital Mechanics", "Particle Systems", "Real-time Rendering"
  ];

  return (
    <StyledAboutSection>
      <StyledContainer ref={ref}>
        <StyledContent>
          <StyledTitle
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            About the Project
          </StyledTitle>
          <StyledDescription
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            This planetary system simulation is built using Unity's powerful physics engine
            and custom-written gravitational algorithms. It allows users to explore and
            interact with procedurally generated solar systems, offering both educational
            value and stunning visuals.
          </StyledDescription>
          <StyledDescription
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The project combines accurate physics calculations with artistic visualization
            to create an immersive experience that helps users understand complex
            astronomical concepts.
          </StyledDescription>
          <StyledTechStack
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {technologies.map((tech, index) => (
              <StyledTechBadge
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {tech}
              </StyledTechBadge>
            ))}
          </StyledTechStack>
        </StyledContent>
        <StyledImageContainer
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <img src="/simulation-preview.jpg" alt="Planetary System Simulation Preview" />
        </StyledImageContainer>
      </StyledContainer>
    </StyledAboutSection>
  );
};

export default About; 