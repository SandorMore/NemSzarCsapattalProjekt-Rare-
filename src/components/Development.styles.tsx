import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const DevelopmentSection = styled.section`
  padding: 8rem 0;
  background: var(--color-background);
  position: relative;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Title = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

export const Card = styled(motion.div)`
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

export const CardTitle = styled.h3`
  color: var(--color-text);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const CardContent = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.8;
`; 