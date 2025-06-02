import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  DevelopmentSection,
  Container,
  Title,
  Grid,
  Card,
  CardTitle,
  CardContent
} from './Development.styles';

const Development = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const StyledDevelopmentSection = DevelopmentSection;
  const StyledContainer = Container;
  const StyledTitle = Title;
  const StyledGrid = Grid;
  const StyledCard = Card;
  const StyledCardTitle = CardTitle;
  const StyledCardContent = CardContent;

  const developmentSteps = [
    {
      title: "Physics Implementation",
      content: "Implemented accurate gravitational forces and orbital mechanics using Unity's physics engine, with custom modifications for precise celestial body interactions."
    },
    {
      title: "Procedural Generation",
      content: "Developed algorithms for generating realistic planetary systems, including planet sizes, orbits, and surface features based on astronomical principles."
    },
    {
      title: "Visual Effects",
      content: "Created advanced particle systems and shader effects for atmospheric glow, star fields, and space phenomena using Unity's VFX Graph system."
    },
    {
      title: "Technical Challenges",
      content: "Overcame performance optimization challenges through efficient physics calculations and LOD systems for handling multiple celestial bodies simultaneously."
    }
  ];

  return (
    <StyledDevelopmentSection ref={ref}>
      <StyledContainer>
        <StyledTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Development Process
        </StyledTitle>
        <StyledGrid>
          {developmentSteps.map((step, index) => (
            <StyledCard
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <StyledCardTitle>{step.title}</StyledCardTitle>
              <StyledCardContent>{step.content}</StyledCardContent>
            </StyledCard>
          ))}
        </StyledGrid>
      </StyledContainer>
    </StyledDevelopmentSection>
  );
};

export default Development; 