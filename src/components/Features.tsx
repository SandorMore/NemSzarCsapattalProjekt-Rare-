import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const FeaturesSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(180deg, var(--color-background) 0%, rgba(10, 11, 15, 0.95) 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
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

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const FeatureDescription = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const Features = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const StyledFeaturesSection = FeaturesSection as any;
  const StyledContainer = Container as any;
  const StyledSectionTitle = SectionTitle as any;
  const StyledFeaturesGrid = FeaturesGrid as any;
  const StyledFeatureCard = FeatureCard as any;
  const StyledFeatureIcon = FeatureIcon as any;
  const StyledFeatureTitle = FeatureTitle as any;
  const StyledFeatureDescription = FeatureDescription as any;

  const features = [
    {
      icon: "🌍",
      titleKey: "development.physics",
      descriptionKey: "development.physicsDesc"
    },
    {
      icon: "🎮",
      titleKey: "development.procedural",
      descriptionKey: "development.proceduralDesc"
    },
    {
      icon: "✨",
      titleKey: "development.visual",
      descriptionKey: "development.visualDesc"
    },
    {
      icon: "🔧",
      titleKey: "development.technical",
      descriptionKey: "development.technicalDesc"
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
          {t('features.title')}
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
                <StyledFeatureTitle>{t(feature.titleKey)}</StyledFeatureTitle>
                <StyledFeatureDescription>{t(feature.descriptionKey)}</StyledFeatureDescription>
              </StyledFeatureCard>
            ))}
          </StyledFeaturesGrid>
        </motion.div>
      </StyledContainer>
    </StyledFeaturesSection>
  );
};

export default Features; 