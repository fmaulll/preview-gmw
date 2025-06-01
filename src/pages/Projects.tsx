import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import { GiMineralPearls, GiGoldBar, GiSilverBullet, GiMinerals } from 'react-icons/gi';

const FilterBar = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? '#FFD700' : 'rgba(255, 215, 0, 0.1)'};
  color: ${props => props.active ? '#1A1105' : '#FFD700'};
  border: 1px solid ${props => props.active ? '#FFD700' : 'rgba(255, 215, 0, 0.2)'};
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.active ? '#FFA500' : 'rgba(255, 215, 0, 0.2)'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
`;

const ProjectCard = styled.div`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: rgba(255, 215, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: #FFD700;
`;

const ProjectContent = styled.div`
  padding: 24px;
`;

const ProjectTitle = styled.h3`
  color: #FFD700;
  font-size: 24px;
  margin-bottom: 12px;
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ProjectStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 20px;
`;

const StatItem = styled.div`
  h4 {
    color: #FFD700;
    font-size: 20px;
    margin-bottom: 4px;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
`;

const ProjectLink = styled(Link)`
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

type Project = {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  investment: string;
  stage: string;
  icon: React.ReactNode;
};

const projects: Project[] = [
  {
    id: 'golden-peak',
    title: 'Golden Peak Mine',
    type: 'Gold',
    location: 'Nevada, USA',
    description: 'High-grade gold project with established infrastructure and significant expansion potential.',
    investment: '$25M',
    stage: 'Production',
    icon: GiGoldBar({ size: 48 }),
  },
  {
    id: 'silver-valley',
    title: 'Silver Valley Project',
    type: 'Silver',
    location: 'Idaho, USA',
    description: 'Advanced-stage silver exploration project with historical high-grade production.',
    investment: '$15M',
    stage: 'Development',
    icon: GiSilverBullet({ size: 48 }),
  },
  {
    id: 'copper-mountain',
    title: 'Copper Mountain',
    type: 'Copper',
    location: 'Chile',
    description: 'Large-scale copper porphyry project with excellent infrastructure and expansion potential.',
    investment: '$40M',
    stage: 'Production',
    icon: GiMinerals({ size: 48 }),
  },
  {
    id: 'rare-earth-one',
    title: 'Rare Earth One',
    type: 'Rare Earths',
    location: 'Australia',
    description: 'Strategic rare earth elements project with significant resource potential.',
    investment: '$20M',
    stage: 'Exploration',
    icon: GiMineralPearls({ size: 48 }),
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.type === filter || project.stage === filter);

  return (
    <Layout>
      <PageContainer
        title="Investment Projects"
        description="Explore our carefully selected portfolio of mining projects across various commodities and development stages."
      >
        <FilterBar>
          <FilterButton
            active={filter === 'All'}
            onClick={() => setFilter('All')}
          >
            All Projects
          </FilterButton>
          <FilterButton
            active={filter === 'Gold'}
            onClick={() => setFilter('Gold')}
          >
            Gold
          </FilterButton>
          <FilterButton
            active={filter === 'Silver'}
            onClick={() => setFilter('Silver')}
          >
            Silver
          </FilterButton>
          <FilterButton
            active={filter === 'Copper'}
            onClick={() => setFilter('Copper')}
          >
            Copper
          </FilterButton>
          <FilterButton
            active={filter === 'Rare Earths'}
            onClick={() => setFilter('Rare Earths')}
          >
            Rare Earths
          </FilterButton>
        </FilterBar>

        <ProjectsGrid>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id}>
              <ProjectImage>
                {project.icon}
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectMeta>
                  <span>{project.type}</span>
                  <span>•</span>
                  <span>{project.location}</span>
                </ProjectMeta>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                <ProjectStats>
                  <StatItem>
                    <h4>{project.investment}</h4>
                    <p>Investment Size</p>
                  </StatItem>
                  <StatItem>
                    <h4>{project.stage}</h4>
                    <p>Project Stage</p>
                  </StatItem>
                </ProjectStats>
                <ProjectLink to={`/projects/${project.id}`}>
                  View Details →
                </ProjectLink>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </PageContainer>
    </Layout>
  );
};

export default Projects; 