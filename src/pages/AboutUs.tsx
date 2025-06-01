import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { GiTreeGrowth, GiForest } from 'react-icons/gi';
import { FaCertificate, FaHandshake } from 'react-icons/fa';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 24px;
  text-align: center;
  color: var(--primary-color);
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: var(--text-light);
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.6;
`;

const Section = styled.section`
  margin-bottom: 80px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const Card = styled(motion.div)`
  background: rgba(139, 69, 19, 0.1);
  border: 1px solid var(--primary-color);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(139, 69, 19, 0.2);
  }
`;

const Icon = styled.div`
  font-size: 48px;
  color: var(--primary-color);
  margin-bottom: 24px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: var(--primary-color);
  margin-bottom: 16px;
`;

const CardText = styled.p`
  color: var(--text-light);
  line-height: 1.6;
`;

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Content = styled.div`
  h2 {
    font-size: 36px;
    color: var(--primary-color);
    margin-bottom: 24px;
  }

  p {
    color: var(--text-light);
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const ImagePlaceholder = styled.div`
  background: var(--primary-color);
  border-radius: 16px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  color: var(--text-light);
`;

const AboutUs: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Title>About PT. Gunung Muro Wahanajaya</Title>
        <Subtitle>
          A trusted name in sustainable forestry and premium quality log supply,
          committed to environmental responsibility and community development.
        </Subtitle>

        <Section>
          <Grid>
            <Card whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Icon>{GiTreeGrowth({ size: 48 })}</Icon>
              <CardTitle>Sustainable Management</CardTitle>
              <CardText>
                We practice sustainable forest management to ensure long-term
                resource availability while protecting the environment.
              </CardText>
            </Card>

            <Card whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Icon>{FaCertificate({ size: 48 })}</Icon>
              <CardTitle>SVLK Certified</CardTitle>
              <CardText>
                Our operations are certified under the Timber Legality Verification
                System (SVLK), ensuring legal and sustainable sourcing.
              </CardText>
            </Card>

            <Card whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Icon>{FaHandshake({ size: 48 })}</Icon>
              <CardTitle>Community Partnership</CardTitle>
              <CardText>
                We work closely with local communities to promote sustainable
                development and economic growth.
              </CardText>
            </Card>
          </Grid>
        </Section>

        <ContentSection>
          <Content>
            <h2>Our History</h2>
            <p>
              PT. Gunung Muro Wahanajaya has been developing its business in the
              forestry sector since its establishment. Based on the decree of the
              Minister of Forestry in 2021, we were granted IUPHHK over the
              concession area located in Central Kalimantan Province.
            </p>
            <p>
              Our commitment to sustainable forest management and environmental
              protection has made us a trusted partner in the timber industry.
              We maintain strict quality control measures to ensure our products
              meet international standards.
            </p>
          </Content>
          <ImagePlaceholder>
            {GiForest({ size: 64 })}
          </ImagePlaceholder>
        </ContentSection>

        <ContentSection>
          <ImagePlaceholder>
            {FaHandshake({ size: 64 })}
          </ImagePlaceholder>
          <Content>
            <h2>Our Vision</h2>
            <p>
              At PT. Gunung Muro Wahanajaya, we are one team with one vision where
              the balance between economic interests, sustainable management, and
              environmental care can ensure sustainable growth for the company,
              long-term life cycles for forests, and prosperity for local communities.
            </p>
            <p>
              We strive to be the leading sustainable wood supplier in Indonesia,
              known for our commitment to quality, environmental responsibility,
              and community development.
            </p>
          </Content>
        </ContentSection>
      </Container>
    </Layout>
  );
};

export default AboutUs; 