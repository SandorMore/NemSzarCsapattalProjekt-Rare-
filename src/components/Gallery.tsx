import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const GalleryCard = styled(motion.div)`
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

const ImageContainer = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 16/9;
  margin-bottom: 1.5rem;
  
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

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const CardDescription = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const Gallery = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const galleryItems = [
    {
      image: "/screenshot1.jpg",
      titleKey: "gallery.card1.title",
      descriptionKey: "gallery.card1.description"
    },
    {
      image: "/screenshot2.jpg",
      titleKey: "gallery.card2.title",
      descriptionKey: "gallery.card2.description"
    },
    {
      image: "/screenshot3.jpg",
      titleKey: "gallery.card3.title",
      descriptionKey: "gallery.card3.description"
    },
    {
      image: "/screenshot4.jpg",
      titleKey: "gallery.card4.title",
      descriptionKey: "gallery.card4.description"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <GallerySection ref={ref}>
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {t('gallery.title')}
        </Title>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid>
            {galleryItems.map((item, index) => (
              <GalleryCard key={item.titleKey} variants={itemVariants}>
                <ImageContainer>
                  <img src={item.image} alt={t(item.titleKey)} />
                </ImageContainer>
                <CardTitle>{t(item.titleKey)}</CardTitle>
                <CardDescription>{t(item.descriptionKey)}</CardDescription>
              </GalleryCard>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </GallerySection>
  );
};

export default Gallery; 