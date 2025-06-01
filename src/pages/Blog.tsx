import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import { GiMiningHelmet, GiGoldBar, GiMineralPearls, GiMinerals } from 'react-icons/gi';
import { BsSearch, BsArrowRight } from 'react-icons/bs';

const SearchBar = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
`;

const SearchInput = styled.input`
  flex: 1;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.2);
  padding: 12px 20px;
  border-radius: 8px;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #FFD700;
  }
`;

const CategoryTags = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const CategoryTag = styled.button<{ active: boolean }>`
  background: ${props => props.active ? '#FFD700' : 'rgba(255, 215, 0, 0.1)'};
  color: ${props => props.active ? '#1A1105' : '#FFD700'};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.active ? '#FFA500' : 'rgba(255, 215, 0, 0.2)'};
  }
`;

const FeaturedArticle = styled(motion.article)`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 40px;
`;

const FeaturedContent = styled.div`
  padding: 32px;
`;

const ArticleImage = styled.div`
  height: 300px;
  background: rgba(255, 215, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  color: #FFD700;
`;

const ArticleTitle = styled.h2`
  font-size: 32px;
  color: #FFD700;
  margin-bottom: 16px;
`;

const ArticleMeta = styled.div`
  display: flex;
  gap: 16px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin-bottom: 16px;
`;

const ArticleExcerpt = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 24px;
`;

const ReadMore = styled(Link)`
  color: #FFD700;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
`;

const ArticleCard = styled(motion.article)`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;
`;

const CardImage = styled.div`
  height: 200px;
  background: rgba(255, 215, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: #FFD700;
`;

const CardContent = styled.div`
  padding: 24px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #FFD700;
  margin-bottom: 12px;
`;

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Market Analysis', 'Industry News', 'Investment Tips', 'Technology'];

  return (
    <Layout>
      <PageContainer
        title="Mining Investment Insights"
        description="Stay informed with the latest news, analysis, and insights from the mining and natural resources sector."
      >
        <SearchBar>
          <SearchInput placeholder="Search articles..." />
        </SearchBar>

        <CategoryTags>
          {categories.map(category => (
            <CategoryTag
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryTag>
          ))}
        </CategoryTags>

        <FeaturedArticle
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <ArticleImage>
            {GiGoldBar({ size: 64 })}
          </ArticleImage>
          <FeaturedContent>
            <ArticleTitle>The Future of Gold Mining: Trends and Opportunities in 2024</ArticleTitle>
            <ArticleMeta>
              <span>Market Analysis</span>
              <span>•</span>
              <span>10 min read</span>
              <span>•</span>
              <span>March 15, 2024</span>
            </ArticleMeta>
            <ArticleExcerpt>
              Explore the evolving landscape of gold mining, from technological innovations
              to emerging markets and investment opportunities. Our analysis covers key trends,
              challenges, and strategic considerations for investors.
            </ArticleExcerpt>
            <ReadMore to="/blog/future-of-gold-mining">
              Read Full Article
              {BsArrowRight({ size: 16 })}
            </ReadMore>
          </FeaturedContent>
        </FeaturedArticle>

        <ArticleGrid>
          <ArticleCard
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <CardImage>
              {GiMineralPearls({ size: 48 })}
            </CardImage>
            <CardContent>
              <ArticleMeta>
                <span>Industry News</span>
                <span>•</span>
                <span>March 12, 2024</span>
              </ArticleMeta>
              <CardTitle>Rare Earth Elements: The New Gold Rush</CardTitle>
              <ArticleExcerpt>
                How rare earth elements are becoming increasingly crucial for modern
                technology and creating new investment opportunities.
              </ArticleExcerpt>
              <ReadMore to="/blog/rare-earth-elements">
                Read More
                {BsArrowRight({ size: 16 })}
              </ReadMore>
            </CardContent>
          </ArticleCard>

          <ArticleCard
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <CardImage>
              {GiMinerals({ size: 48 })}
            </CardImage>
            <CardContent>
              <ArticleMeta>
                <span>Investment Tips</span>
                <span>•</span>
                <span>March 10, 2024</span>
              </ArticleMeta>
              <CardTitle>Due Diligence in Mining Investments</CardTitle>
              <ArticleExcerpt>
                Essential factors to consider when evaluating mining projects and
                performing thorough due diligence.
              </ArticleExcerpt>
              <ReadMore to="/blog/due-diligence-guide">
                Read More
                {BsArrowRight({ size: 16 })}
              </ReadMore>
            </CardContent>
          </ArticleCard>

          <ArticleCard
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <CardImage>
              {GiMiningHelmet({ size: 48 })}
            </CardImage>
            <CardContent>
              <ArticleMeta>
                <span>Technology</span>
                <span>•</span>
                <span>March 8, 2024</span>
              </ArticleMeta>
              <CardTitle>Sustainable Mining Technologies</CardTitle>
              <ArticleExcerpt>
                Innovative technologies making mining operations more sustainable
                and environmentally friendly.
              </ArticleExcerpt>
              <ReadMore to="/blog/sustainable-mining">
                Read More
                {BsArrowRight({ size: 16 })}
              </ReadMore>
            </CardContent>
          </ArticleCard>
        </ArticleGrid>
      </PageContainer>
    </Layout>
  );
};

export default Blog; 