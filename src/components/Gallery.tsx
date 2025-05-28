import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const GallerySection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(180deg, var(--color-background) 0%, rgba(10, 11, 15, 0.95) 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const ThumbnailCard = styled(motion.div)<{ isSelected: boolean }>`
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

const ThumbnailImage = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ThumbnailTitle = styled.h3`
  font-size: 0.9rem;
  color: var(--color-text);
  padding: 0.5rem;
  margin: 0;
  text-align: center;
`;

const DetailView = styled(motion.div)`
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

const DetailImage = styled.div`
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

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DetailTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-text);
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DetailDescription = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
`;

const Gallery = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [selectedItem, setSelectedItem] = useState<number>(0);

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ThumbnailGrid>
            {galleryItems.map((item, index) => (
              <ThumbnailCard
                key={item.titleKey}
                variants={itemVariants}
                onClick={() => setSelectedItem(index)}
                isSelected={selectedItem === index}
              >
                <ThumbnailImage>
                  <img src={item.image} alt={t(item.titleKey)} />
                </ThumbnailImage>
                <ThumbnailTitle>{t(item.titleKey)}</ThumbnailTitle>
              </ThumbnailCard>
            ))}
          </ThumbnailGrid>
        </motion.div>

        <AnimatePresence mode="wait">
          <DetailView
            key={selectedItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <DetailImage>
              <img src={galleryItems[selectedItem].image} alt={t(galleryItems[selectedItem].titleKey)} />
            </DetailImage>
            <DetailContent>
              <DetailTitle>{t(galleryItems[selectedItem].titleKey)}</DetailTitle>
              <DetailDescription>{t(galleryItems[selectedItem].descriptionKey)}</DetailDescription>
            </DetailContent>
          </DetailView>
        </AnimatePresence>
      </Container>
    </GallerySection>
  );
};

export default Gallery; 