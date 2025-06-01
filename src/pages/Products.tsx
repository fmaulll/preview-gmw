import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { GiWoodBeam, GiTreeBranch } from 'react-icons/gi';
import { FaShip, FaWarehouse, FaLeaf } from 'react-icons/fa';

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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const ProductCard = styled(motion.div)`
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

const ProductImage = styled.div`
  height: 200px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  color: var(--text-light);
`;

const ProductContent = styled.div`
  padding: 24px;
`;

const ProductTitle = styled.h3`
  font-size: 24px;
  color: var(--primary-color);
  margin-bottom: 12px;
`;

const ProductDescription = styled.p`
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ProductFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--text-light);
  opacity: 0.9;

  li {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;

    &:before {
      content: "•";
      color: var(--primary-color);
    }
  }
`;

const products = [
  {
    id: 1,
    title: 'Meranti',
    icon: GiWoodBeam({ size: 64 }),
    description: 'Premium quality Meranti logs available in Red, Yellow, and White varieties.',
    features: [
      'Ideal for plywood industry',
      'Multiple color variations',
      'Excellent workability',
      'Suitable for furniture making'
    ]
  },
  {
    id: 2,
    title: 'Keruing',
    icon: FaShip({ size: 64 }),
    description: 'Versatile hardwood perfect for construction and marine applications.',
    features: [
      'High durability',
      'Excellent for shipbuilding',
      'Ideal for truck flooring',
      'Strong structural properties'
    ]
  },
  {
    id: 3,
    title: 'Mersawa',
    icon: FaWarehouse({ size: 64 }),
    description: 'Light construction wood with excellent versatility.',
    features: [
      'Perfect for light construction',
      'Ideal for flooring',
      'Good for marine applications',
      'Suitable for poles and posts'
    ]
  },
  {
    id: 4,
    title: 'Bengkirai',
    icon: GiTreeBranch({ size: 64 }),
    description: 'Premium hardwood with density exceeding teak wood.',
    features: [
      'Superior hardness',
      'Excellent for furniture',
      'Easy to work with',
      'Beautiful natural finish'
    ]
  },
  {
    id: 5,
    title: 'Nyatoh',
    icon: FaLeaf({ size: 64 }),
    description: 'Beautiful hardwood with pink to reddish-brown color.',
    features: [
      'Attractive color variations',
      'Perfect for construction',
      'Ideal for door frames',
      'Excellent for plywood'
    ]
  }
];

const Products: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Title>Our Premium Wood Products</Title>
        <Subtitle>
          Discover our wide range of high-quality wood products sourced from
          sustainably managed forests in Kalimantan. We offer various species
          suitable for different applications in construction and manufacturing.
        </Subtitle>

        <ProductGrid>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <ProductImage>
                {product.icon}
              </ProductImage>
              <ProductContent>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductFeatures>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ProductFeatures>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductGrid>
      </Container>
    </Layout>
  );
};

export default Products; 