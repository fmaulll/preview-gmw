import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import { GiMining, GiGoldBar, GiEarthAmerica, GiTeamIdea } from 'react-icons/gi';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 60px;
`;

const Card = styled.div`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.1);
  padding: 30px;
  border-radius: 16px;
`;

const CardIcon = styled.div`
  color: #FFD700;
  font-size: 40px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  color: #FFD700;
  font-size: 24px;
  margin-bottom: 16px;
`;

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  text-align: center;
  margin-top: 60px;
`;

const StatItem = styled.div`
  h4 {
    color: #FFD700;
    font-size: 36px;
    margin-bottom: 8px;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
  }
`;

const WhyUs: React.FC = () => {
  return (
    <Layout>
      <PageContainer
        title="Why Choose MineVest"
        description="With decades of experience in mining and resource investments, we provide unparalleled access to premium opportunities in the global mining sector."
      >
        <Grid>
          <Card>
            <CardIcon>
              {GiMining({ size: 40 })}
            </CardIcon>
            <CardTitle>Industry Expertise</CardTitle>
            <CardDescription>
              Our team brings together decades of experience in mining operations,
              geological assessment, and investment management, ensuring thorough
              due diligence and optimal project selection.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>
              {GiGoldBar({ size: 40 })}
            </CardIcon>
            <CardTitle>Premium Opportunities</CardTitle>
            <CardDescription>
              Access carefully vetted mining projects across precious metals,
              industrial minerals, and energy resources, with proven potential
              for significant returns.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>
              {GiEarthAmerica({ size: 40 })}
            </CardIcon>
            <CardTitle>Global Network</CardTitle>
            <CardDescription>
              Leverage our extensive network of industry connections spanning
              six continents, providing unique access to off-market deals and
              emerging opportunities.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>
              {GiTeamIdea({ size: 40 })}
            </CardIcon>
            <CardTitle>Strategic Support</CardTitle>
            <CardDescription>
              Benefit from our comprehensive support services, including technical
              analysis, market intelligence, and operational optimization
              strategies.
            </CardDescription>
          </Card>
        </Grid>

        <Stats>
          <StatItem>
            <h4>25+</h4>
            <p>Years Experience</p>
          </StatItem>
          <StatItem>
            <h4>$2.5B+</h4>
            <p>Assets Managed</p>
          </StatItem>
          <StatItem>
            <h4>200+</h4>
            <p>Active Projects</p>
          </StatItem>
          <StatItem>
            <h4>45+</h4>
            <p>Countries</p>
          </StatItem>
        </Stats>
      </PageContainer>
    </Layout>
  );
};

export default WhyUs; 