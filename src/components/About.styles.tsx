import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const AboutSection = styled.section`
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

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  align-items: center;
`;

export const Content = styled.div`
  color: var(--color-text);
`;

export const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled(motion.p)`
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

export const TechStack = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const TechBadge = styled(motion.span)`
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid var(--color-primary);
  color: var(--color-text);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

export const ImageContainer = styled(motion.div)`
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