import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const GallerySection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(180deg, var(--color-background) 0%, rgba(10, 11, 15, 0.95) 100%);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

export const ThumbnailCard = styled(motion.div)<{ isSelected: boolean }>`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${props => props.isSelected ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(${props => props.isSelected ? 1.1 : 1});
  z-index: ${props => props.isSelected ? 1 : 0};
  
  &:hover {
    transform: scale(${props => props.isSelected ? 1.1 : 1.05});
    border-color: var(--color-primary);
  }
`;

export const ThumbnailImage = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ThumbnailTitle = styled.h3`
  font-size: 0.9rem;
  color: var(--color-text);
  padding: 0.5rem;
  margin: 0;
  text-align: center;
`;

export const DetailView = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailImage = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 16/9;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DetailTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-text);
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const DetailDescription = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
`; 