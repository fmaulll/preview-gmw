import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const PageTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PageDescription = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  max-width: 800px;
  line-height: 1.6;
`;

interface PageContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Container>
      <PageTitle>{title}</PageTitle>
      {description && <PageDescription>{description}</PageDescription>}
      {children}
    </Container>
  );
};

export default PageContainer; 