import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GallerySection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(180deg, var(--color-background) 0%, rgba(10, 11, 15, 0.95) 100%);
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

const VideoContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  margin-bottom: 4rem;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 16/9;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Screenshot = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 16/9;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const Gallery = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const StyledGallerySection = GallerySection as any;
  const StyledContainer = Container as any;
  const StyledTitle = Title as any;
  const StyledVideoContainer = VideoContainer as any;
  const StyledGrid = Grid as any;
  const StyledScreenshot = Screenshot as any;

  const screenshots = [
    { src: "/screenshot1.jpg", alt: "Solar System Overview" },
    { src: "/screenshot2.jpg", alt: "Planet Detail View" },
    { src: "/screenshot3.jpg", alt: "Orbital Mechanics Visualization" },
    { src: "/screenshot4.jpg", alt: "Particle Effects Demo" },
  ];

  return (
    <StyledGallerySection ref={ref}>
      <StyledContainer>
        <StyledTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Gallery
        </StyledTitle>
        <StyledVideoContainer
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            title="Project Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </StyledVideoContainer>
        <StyledGrid>
          {screenshots.map((screenshot, index) => (
            <StyledScreenshot
              key={screenshot.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <img src={screenshot.src} alt={screenshot.alt} />
            </StyledScreenshot>
          ))}
        </StyledGrid>
      </StyledContainer>
    </StyledGallerySection>
  );
};

export default Gallery; 