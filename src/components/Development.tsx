import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DevelopmentSection = styled.section`
  padding: 8rem 0;
  background: var(--color-background);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-primary);
  }
`;

const CardTitle = styled.h3`
  color: var(--color-text);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CardContent = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.8;
`;

const Development = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const StyledDevelopmentSection = DevelopmentSection as any;
  const StyledContainer = Container as any;
  const StyledTitle = Title as any;
  const StyledGrid = Grid as any;
  const StyledCard = Card as any;
  const StyledCardTitle = CardTitle as any;
  const StyledCardContent = CardContent as any;

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