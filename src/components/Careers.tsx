import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { GiMiningHelmet, GiGoldBar, GiOilPump, GiCrystalGrowth } from 'react-icons/gi';
import { BsArrowRight } from 'react-icons/bs'; // Assuming you might want an arrow for "Apply Now" or similar
import { MdWork, MdLocationOn, MdOutlineBusinessCenter } from 'react-icons/md'; // New icons for careers
import Layout from './Layout';
import PageContainer from './PageContainer';

// Re-using existing styled components from App.tsx or defining similar ones
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #FFD700;
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  opacity: 0.8;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

const ContactButton = styled.button`
  background: rgba(255, 215, 0, 0.1);
  color: #FFD700;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(255, 215, 0, 0.2);
  }
`;

// New styled components for the Careers page
const CareersHero = styled.div`
  padding: 80px 0;
  text-align: center;
`;

const CareersTitle = styled.h1`
  font-size: 56px;
  line-height: 1.2;
  margin-bottom: 24px;
  background: linear-gradient(to right, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CareersSubtitle = styled.p`
  font-size: 18px;
  opacity: 0.8;
  margin-bottom: 32px;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const JobOpeningsSection = styled.section`
  padding: 60px 0;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #FFD700;
  text-align: center;
  margin-bottom: 40px;
`;

const JobGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const JobCard = styled(motion.div)`
  background: rgba(255, 215, 0, 0.05);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid rgba(255, 215, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const JobTitle = styled.h3`
  font-size: 24px;
  color: #FFD700;
  margin-bottom: 10px;
`;

const JobDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;

  svg {
    font-size: 18px;
    color: #FFD700;
  }
`;

const JobDescription = styled.p`
  font-size: 16px;
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 25px;
  flex-grow: 1; /* Allow description to take up available space */
`;

const ApplyButton = styled(motion.button)`
  background: #FFD700;
  color: #1A1105;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  
  &:hover {
    background: #FFA500;
  }
`;

const BenefitsSection = styled.section`
  padding: 60px 0;
  background: rgba(255, 215, 0, 0.03);
  margin-top: 80px;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const BenefitCard = styled.div`
  background: rgba(255, 215, 0, 0.08);
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(255, 215, 0, 0.05);
`;

const BenefitIcon = styled.div`
  font-size: 40px;
  color: #FFD700;
  margin-bottom: 15px;
`;

const BenefitTitle = styled.h3`
  font-size: 20px;
  color: #FFD700;
  margin-bottom: 10px;
`;

const BenefitDescription = styled.p`
  font-size: 15px;
  opacity: 0.8;
  line-height: 1.5;
`;

const Careers: React.FC = () => {
  return (
    <Layout>
      <PageContainer
        title="Join Our Team"
        description="Be part of a dynamic team shaping the future of mining investments. We're always looking for talented individuals who share our passion for excellence."
      >
        <JobOpeningsSection>
          <SectionTitle>Current Job Openings</SectionTitle>
          <JobGrid>
            <JobCard>
              <JobTitle>Investment Analyst</JobTitle>
              <JobDetails>
                <span>{MdOutlineBusinessCenter({ size: 18 })} Full-time</span>
                <span>{MdLocationOn({ size: 18 })} New York, USA</span>
                <span>{MdWork({ size: 18 })} Finance</span>
              </JobDetails>
              <JobDescription>
                Seeking a sharp analytical mind to evaluate potential mining and natural resource
                investment opportunities. Must have strong financial modeling skills and understanding
                of the mining sector.
              </JobDescription>
              <ApplyButton>
                Apply Now
                {BsArrowRight({ size: 16 })}
              </ApplyButton>
            </JobCard>

            <JobCard>
              <JobTitle>Geologist / Mining Engineer</JobTitle>
              <JobDetails>
                <span>{MdOutlineBusinessCenter({ size: 18 })} Full-time</span>
                <span>{MdLocationOn({ size: 18 })} Remote / Field</span>
                <span>{MdWork({ size: 18 })} Engineering</span>
              </JobDetails>
              <JobDescription>
                We're looking for an experienced Geologist or Mining Engineer to assess the technical
                aspects of mining projects and conduct due diligence on potential investments.
              </JobDescription>
              <ApplyButton>
                Apply Now
                {BsArrowRight({ size: 16 })}
              </ApplyButton>
            </JobCard>

            <JobCard>
              <JobTitle>Marketing Specialist</JobTitle>
              <JobDetails>
                <span>{MdOutlineBusinessCenter({ size: 18 })} Full-time</span>
                <span>{MdLocationOn({ size: 18 })} London, UK</span>
                <span>{MdWork({ size: 18 })} Marketing</span>
              </JobDetails>
              <JobDescription>
                Develop and execute marketing strategies to attract new investors and promote our
                mining investment opportunities through various channels.
              </JobDescription>
              <ApplyButton>
                Apply Now
                {BsArrowRight({ size: 16 })}
              </ApplyButton>
            </JobCard>

            <JobCard>
              <JobTitle>Software Developer (Full-stack)</JobTitle>
              <JobDetails>
                <span>{MdOutlineBusinessCenter({ size: 18 })} Full-time</span>
                <span>{MdLocationOn({ size: 18 })} Berlin, Germany</span>
                <span>{MdWork({ size: 18 })} Tech</span>
              </JobDetails>
              <JobDescription>
                Join our tech team to build and maintain the core platform, investor dashboards, and
                data analytics tools for mining investment analysis.
              </JobDescription>
              <ApplyButton>
                Apply Now
                {BsArrowRight({ size: 16 })}
              </ApplyButton>
            </JobCard>
          </JobGrid>
        </JobOpeningsSection>

        <BenefitsSection>
          <SectionTitle>Why Work With Us</SectionTitle>
          <BenefitsGrid>
            <BenefitCard>
              <BenefitIcon>{GiGoldBar({ size: 32 })}</BenefitIcon>
              <BenefitTitle>Competitive Compensation</BenefitTitle>
              <BenefitDescription>
                Attractive salaries and performance-based bonuses to reward your hard work.
              </BenefitDescription>
            </BenefitCard>

            <BenefitCard>
              <BenefitIcon>{GiOilPump({ size: 32 })}</BenefitIcon>
              <BenefitTitle>Growth Opportunities</BenefitTitle>
              <BenefitDescription>
                Clear career paths, mentorship programs, and opportunities for professional development.
              </BenefitDescription>
            </BenefitCard>

            <BenefitCard>
              <BenefitIcon>{GiCrystalGrowth({ size: 32 })}</BenefitIcon>
              <BenefitTitle>Impactful Work</BenefitTitle>
              <BenefitDescription>
                Contribute to significant projects that shape the future of global resources.
              </BenefitDescription>
            </BenefitCard>

            <BenefitCard>
              <BenefitIcon>{GiMiningHelmet({ size: 32 })}</BenefitIcon>
              <BenefitTitle>Dynamic Culture</BenefitTitle>
              <BenefitDescription>
                Join a collaborative, innovative, and supportive team environment.
              </BenefitDescription>
            </BenefitCard>
          </BenefitsGrid>
        </BenefitsSection>
      </PageContainer>
    </Layout>
  );
};

export default Careers;