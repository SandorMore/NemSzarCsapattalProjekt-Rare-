import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  AboutSection,
  Container,
  Content,
  Title,
  Description,
  TechStack,
  TechBadge,
  ImageContainer
} from './About.styles';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const StyledAboutSection = AboutSection;
  const StyledContainer = Container;
  const StyledContent = Content;
  const StyledTitle = Title;
  const StyledDescription = Description;
  const StyledTechStack = TechStack;
  const StyledTechBadge = TechBadge;
  const StyledImageContainer = ImageContainer;

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
          <img src="/main.png" alt="Planetary System Simulation Preview" />
        </StyledImageContainer>
      </StyledContainer>
    </StyledAboutSection>
  );
};

export default About; 