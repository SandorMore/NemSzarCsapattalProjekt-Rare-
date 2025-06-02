import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FeaturesSection,
  Container,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from './Features.styles';

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const StyledFeaturesSection = FeaturesSection;
  const StyledContainer = Container;
  const StyledSectionTitle = SectionTitle;
  const StyledFeaturesGrid = FeaturesGrid;
  const StyledFeatureCard = FeatureCard;
  const StyledFeatureIcon = FeatureIcon;
  const StyledFeatureTitle = FeatureTitle;
  const StyledFeatureDescription = FeatureDescription;

  const features = [
    {
      icon: "🌍",
      title: "Physics Implementation",
      description: "Implemented accurate gravitational forces and orbital mechanics using Unity's physics engine, with custom modifications for precise celestial body interactions."
    },
    {
      icon: "🎮",
      title: "Procedural Generation",
      description: "Developed algorithms for generating realistic planetary systems, including planet sizes, orbits, and surface features based on astronomical principles."
    },
    {
      icon: "✨",
      title: "Visual Effects",
      description: "Created advanced particle systems and shader effects for atmospheric glow, star fields, and space phenomena using Unity's VFX Graph system."
    },
    {
      icon: "🔧",
      title: "Technical Challenges",
      description: "Overcame performance optimization challenges through efficient physics calculations and LOD systems for handling multiple celestial bodies simultaneously."
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
    <StyledFeaturesSection>
      <StyledContainer>
        <StyledSectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Key Features
        </StyledSectionTitle>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <StyledFeaturesGrid>
            {features.map((feature, index) => (
              <StyledFeatureCard key={index} variants={itemVariants}>
                <StyledFeatureIcon>{feature.icon}</StyledFeatureIcon>
                <StyledFeatureTitle>{feature.title}</StyledFeatureTitle>
                <StyledFeatureDescription>{feature.description}</StyledFeatureDescription>
              </StyledFeatureCard>
            ))}
          </StyledFeaturesGrid>
        </motion.div>
      </StyledContainer>
    </StyledFeaturesSection>
  );
};

export default Features; 