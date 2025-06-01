import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import { GiMining, GiOfficeChair, GiEarthAmerica, GiGraduateCap } from 'react-icons/gi';

const Section = styled.section`
  margin-bottom: 60px;
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 60px;
`;

const ValueCard = styled.div`
  text-align: center;
  padding: 30px;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 16px;
`;

const ValueIcon = styled.div`
  color: #FFD700;
  font-size: 40px;
  margin-bottom: 20px;
`;

const ValueTitle = styled.h3`
  color: #FFD700;
  font-size: 20px;
  margin-bottom: 12px;
`;

const ValueDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1.6;
`;

const JobList = styled.div`
  display: grid;
  gap: 20px;
`;

const JobCard = styled.div`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 16px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  color: #FFD700;
  font-size: 24px;
  margin-bottom: 8px;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 16px;
`;

const JobDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ApplyButton = styled.button`
  background: #FFD700;
  color: #1A1105;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #FFA500;
  }
`;

const SectionTitle = styled.h2`
  color: #FFD700;
  font-size: 32px;
  margin-bottom: 30px;
`;

const Careers: React.FC = () => {
  return (
    <Layout>
      <PageContainer
        title="Join Our Team"
        description="Be part of a dynamic team shaping the future of mining investments. We're always looking for talented individuals who share our passion for excellence."
      >
        <Section>
          <ValueGrid>
            <ValueCard>
              <ValueIcon>
                {GiMining({ size: 40 })}
              </ValueIcon>
              <ValueTitle>Industry Impact</ValueTitle>
              <ValueDescription>
                Make a real difference in the global mining and resources sector
              </ValueDescription>
            </ValueCard>

            <ValueCard>
              <ValueIcon>
                {GiOfficeChair({ size: 40 })}
              </ValueIcon>
              <ValueTitle>Work Culture</ValueTitle>
              <ValueDescription>
                Enjoy a collaborative and innovative work environment
              </ValueDescription>
            </ValueCard>

            <ValueCard>
              <ValueIcon>
                {GiEarthAmerica({ size: 40 })}
              </ValueIcon>
              <ValueTitle>Global Reach</ValueTitle>
              <ValueDescription>
                Work with teams and projects across the globe
              </ValueDescription>
            </ValueCard>

            <ValueCard>
              <ValueIcon>
                {GiGraduateCap({ size: 40 })}
              </ValueIcon>
              <ValueTitle>Growth</ValueTitle>
              <ValueDescription>
                Continuous learning and career development opportunities
              </ValueDescription>
            </ValueCard>
          </ValueGrid>
        </Section>

        <Section>
          <SectionTitle>Open Positions</SectionTitle>
          <JobList>
            <JobCard>
              <JobInfo>
                <JobTitle>Senior Mining Analyst</JobTitle>
                <JobMeta>
                  <span>Full Time</span>
                  <span>•</span>
                  <span>London, UK</span>
                  <span>•</span>
                  <span>On-site</span>
                </JobMeta>
                <JobDescription>
                  We're seeking an experienced mining analyst to join our investment
                  team. The ideal candidate will have a strong background in
                  geological assessment and financial modeling.
                </JobDescription>
              </JobInfo>
              <ApplyButton>Apply Now</ApplyButton>
            </JobCard>

            <JobCard>
              <JobInfo>
                <JobTitle>Project Manager</JobTitle>
                <JobMeta>
                  <span>Full Time</span>
                  <span>•</span>
                  <span>Toronto, Canada</span>
                  <span>•</span>
                  <span>Hybrid</span>
                </JobMeta>
                <JobDescription>
                  Looking for a project manager to oversee multiple mining investment
                  initiatives. Experience in resource sector project management required.
                </JobDescription>
              </JobInfo>
              <ApplyButton>Apply Now</ApplyButton>
            </JobCard>

            <JobCard>
              <JobInfo>
                <JobTitle>Investment Associate</JobTitle>
                <JobMeta>
                  <span>Full Time</span>
                  <span>•</span>
                  <span>Sydney, Australia</span>
                  <span>•</span>
                  <span>On-site</span>
                </JobMeta>
                <JobDescription>
                  Join our investment team to help identify and evaluate mining
                  investment opportunities across the Asia-Pacific region.
                </JobDescription>
              </JobInfo>
              <ApplyButton>Apply Now</ApplyButton>
            </JobCard>
          </JobList>
        </Section>
      </PageContainer>
    </Layout>
  );
};

export default Careers; 