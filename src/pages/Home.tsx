import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { GiWoodBeam, GiTreeBranch } from 'react-icons/gi';
import { FaShip, FaLeaf, FaWarehouse } from 'react-icons/fa';

const HeroSection = styled.section`
  position: relative;
  height: 100vh; /* Full viewport height */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  background-image: url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 768px) {
    background-attachment: scroll; /* Better mobile performance */
    padding: 80px 20px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      rgba(44, 24, 16, 0.85),
      rgba(44, 24, 16, 0.7)
    );
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(32px, 6vw, 72px);
  margin-bottom: 24px;
  background: linear-gradient(to right, var(--accent-color), var(--text-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(16px, 3vw, 24px);
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin-bottom: 32px;
    font-size: 18px;
  }
`;

const CTAButton = styled(motion(Link))`
  margin-top: 20px;
  display: inline-block;
  background: var(--primary-color);
  color: var(--text-light);
  padding: 16px 32px;
  border-radius: 8px;
  font-size: clamp(16px, 2vw, 18px);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 16px;
  }

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(139, 69, 19, 0.4);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-light);
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: var(--primary-color);
  margin-bottom: 40px;
  text-align: center;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const BenefitCard = styled(motion.div)`
  background: rgba(139, 69, 19, 0.1);
  border: 1px solid var(--primary-color);
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(139, 69, 19, 0.2);
  }
`;

const BenefitIcon = styled.div`
  color: var(--primary-color);
  font-size: 40px;
  margin-bottom: 20px;
`;

const BenefitTitle = styled.h3`
  color: var(--primary-color);
  font-size: 24px;
  margin-bottom: 16px;
`;

const BenefitDescription = styled.p`
  color: var(--text-light);
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(139, 69, 19, 0.1);
  border: 1px solid var(--primary-color);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(139, 69, 19, 0.2);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: var(--text-light);
`;

const ProjectContent = styled.div`
  padding: 24px;
`;

const ProjectTitle = styled.h3`
  color: var(--primary-color);
  font-size: 24px;
  margin-bottom: 12px;
`;

const ProjectDescription = styled.p`
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ProjectLink = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: var(--secondary-color);
    text-decoration: underline;
  }
`;

const Home: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Layout>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Quality Log Supplier in Indonesia
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          PT. Gunung Muro Wahanajaya - Your trusted partner for premium quality logs
          and sustainable forestry products.
        </HeroSubtitle>
        <CTAButton
          to="/products"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover Our Products
        </CTAButton>
        <ScrollIndicator
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          ↓
        </ScrollIndicator>
      </HeroSection>

      <Section>
        <SectionTitle>Our Premium Products</SectionTitle>
        <BenefitsGrid>
          <BenefitCard
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <BenefitIcon>
              {GiWoodBeam({ size: 40 })}
            </BenefitIcon>
            <BenefitTitle>Meranti</BenefitTitle>
            <BenefitDescription>
              Red, Yellow, and White Meranti for plywood industry, and Meranti Batu
              for various applications.
            </BenefitDescription>
          </BenefitCard>

          <BenefitCard
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <BenefitIcon>
              {FaShip({ size: 40 })}
            </BenefitIcon>
            <BenefitTitle>Keruing</BenefitTitle>
            <BenefitDescription>
              Perfect for plywood, building construction, truck beds, and shipbuilding.
            </BenefitDescription>
          </BenefitCard>

          <BenefitCard
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <BenefitIcon>
              {GiTreeBranch({ size: 40 })}
            </BenefitIcon>
            <BenefitTitle>Bengkirai</BenefitTitle>
            <BenefitDescription>
              Premium hardwood with density exceeding teak, ideal for furniture and woodworking.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </Section>

      <Section>
        <SectionTitle>Featured Products</SectionTitle>
        <ProjectsGrid>
          <ProjectCard
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ProjectImage>
              {FaWarehouse({ size: 48 })}
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>Mersawa</ProjectTitle>
              <ProjectDescription>
                Ideal for light construction, boards, flooring, and marine applications.
                Premium quality wood for versatile use.
              </ProjectDescription>
              <ProjectLink to="/products">Learn More</ProjectLink>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ProjectImage>
              {FaLeaf({ size: 48 })}
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>Nyatoh</ProjectTitle>
              <ProjectDescription>
                Hard wood with beautiful pink to reddish-brown color, perfect for
                construction, plywood, and door frames.
              </ProjectDescription>
              <ProjectLink to="/products">Learn More</ProjectLink>
            </ProjectContent>
          </ProjectCard>
        </ProjectsGrid>
      </Section>
    </Layout>
  );
};

export default Home; 