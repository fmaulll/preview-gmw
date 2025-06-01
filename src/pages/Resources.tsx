import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import { GiBookmark, GiNewspaper, GiChart, GiMagnifyingGlass } from 'react-icons/gi';

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;

const ResourceCard = styled.div`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.1);
  padding: 30px;
  border-radius: 16px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ResourceIcon = styled.div`
  color: #FFD700;
  font-size: 40px;
  margin-bottom: 20px;
`;

const ResourceTitle = styled.h3`
  color: #FFD700;
  font-size: 24px;
  margin-bottom: 16px;
`;

const ResourceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ResourceLink = styled.a`
  color: #FFD700;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const SearchSection = styled.div`
  margin: 60px 0;
  text-align: center;
`;

const SearchInput = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.2);
  padding: 12px 20px;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: block;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #FFD700;
  }
`;

const Resources: React.FC = () => {
  return (
    <Layout>
      <PageContainer
        title="Resource Center"
        description="Access our comprehensive collection of mining industry insights, market analysis, and educational materials."
      >
        <SearchSection>
          <SearchInput placeholder="Search resources..." />
        </SearchSection>

        <ResourceGrid>
          <ResourceCard>
            <ResourceIcon>
              {GiBookmark({ size: 40 })}
            </ResourceIcon>
            <ResourceTitle>Educational Materials</ResourceTitle>
            <ResourceDescription>
              Comprehensive guides and tutorials on mining investment fundamentals,
              risk assessment, and market analysis techniques.
            </ResourceDescription>
            <ResourceLink href="/resources/education">
              Browse Materials →
            </ResourceLink>
          </ResourceCard>

          <ResourceCard>
            <ResourceIcon>
              {GiNewspaper({ size: 40 })}
            </ResourceIcon>
            <ResourceTitle>Industry News</ResourceTitle>
            <ResourceDescription>
              Stay updated with the latest developments in the mining sector,
              regulatory changes, and market trends.
            </ResourceDescription>
            <ResourceLink href="/resources/news">
              Read Latest News →
            </ResourceLink>
          </ResourceCard>

          <ResourceCard>
            <ResourceIcon>
              {GiChart({ size: 40 })}
            </ResourceIcon>
            <ResourceTitle>Market Analysis</ResourceTitle>
            <ResourceDescription>
              In-depth analysis of commodity markets, price trends, and investment
              opportunities in the mining sector.
            </ResourceDescription>
            <ResourceLink href="/resources/analysis">
              View Analysis →
            </ResourceLink>
          </ResourceCard>

          <ResourceCard>
            <ResourceIcon>
              {GiMagnifyingGlass({ size: 40 })}
            </ResourceIcon>
            <ResourceTitle>Research Reports</ResourceTitle>
            <ResourceDescription>
              Detailed research reports on specific mining projects, commodities,
              and regional market conditions.
            </ResourceDescription>
            <ResourceLink href="/resources/research">
              Access Reports →
            </ResourceLink>
          </ResourceCard>
        </ResourceGrid>
      </PageContainer>
    </Layout>
  );
};

export default Resources; 