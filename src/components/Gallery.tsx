import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  GallerySection,
  Container,
  ThumbnailGrid,
  ThumbnailCard,
  ThumbnailImage,
  ThumbnailTitle,
  DetailView,
  DetailImage,
  DetailContent,
  DetailTitle,
  DetailDescription
} from './Gallery.styles';

const Gallery = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const galleryItems = [
    {
      image: "/screenshot1.jpg",
      title: "Celestial Dance",
      description: "Experience the mesmerizing orbital ballet of planets as they traverse their cosmic paths around the central star."
    },
    {
      image: "/screenshot2.jpg",
      title: "Planetary Details",
      description: "Dive deep into the intricate details of each planet, from atmospheric compositions to surface features."
    },
    {
      image: "/screenshot3.jpg",
      title: "Orbital Mechanics",
      description: "Witness the complex interplay of gravitational forces that shape the paths of celestial bodies."
    },
    {
      image: "/screenshot4.jpg",
      title: "Cosmic Phenomena",
      description: "Marvel at the stunning visual effects that bring space phenomena to life in our simulation."
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
                key={item.title}
                variants={itemVariants}
                onClick={() => setSelectedItem(index)}
                isSelected={selectedItem === index}
              >
                <ThumbnailImage>
                  <img src={item.image} alt={item.title} />
                </ThumbnailImage>
                <ThumbnailTitle>{item.title}</ThumbnailTitle>
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
              <img src={galleryItems[selectedItem].image} alt={galleryItems[selectedItem].title} />
            </DetailImage>
            <DetailContent>
              <DetailTitle>{galleryItems[selectedItem].title}</DetailTitle>
              <DetailDescription>{galleryItems[selectedItem].description}</DetailDescription>
            </DetailContent>
          </DetailView>
        </AnimatePresence>
      </Container>
    </GallerySection>
  );
};

export default Gallery; 