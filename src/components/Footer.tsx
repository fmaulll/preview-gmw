import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { GiWoodBeam } from 'react-icons/gi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: var(--background-dark);
  border-top: 1px solid var(--primary-color);
  padding: 60px 0 20px;
  margin-top: 80px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: var(--primary-color);
    margin-bottom: 20px;
    font-size: 18px;
  }

  p {
    color: var(--text-light);
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-decoration: none;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterLink = styled(Link)`
  color: var(--text-light);
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  transition: color 0.2s;

  &:hover {
    color: var(--accent-color);
  }
`;

const ExternalLink = styled.a`
  color: var(--text-light);
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  transition: color 0.2s;

  &:hover {
    color: var(--accent-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    color: var(--text-light);
    font-size: 20px;
    transition: color 0.2s;

    &:hover {
      color: var(--accent-color);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: var(--text-light);
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--primary-color);
  opacity: 0.8;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo to="/">
            {GiWoodBeam({ size: 24 })}
            GMW
          </Logo>
          <p>
            PT. Gunung Muro Wahanajaya - Your trusted partner for premium quality logs
            and sustainable forestry products. We are committed to sustainable forest
            management and environmental responsibility.
          </p>
          <SocialLinks>
            <a href="#" aria-label="Facebook">
              {FaFacebook({ size: 20 })}
            </a>
            <a href="#" aria-label="Twitter">
              {FaTwitter({ size: 20 })}
            </a>
            <a href="#" aria-label="LinkedIn">
              {FaLinkedin({ size: 20 })}
            </a>
            <a href="#" aria-label="Instagram">
              {FaInstagram({ size: 20 })}
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Products</h3>
          <FooterLink to="/products/meranti">Meranti</FooterLink>
          <FooterLink to="/products/keruing">Keruing</FooterLink>
          <FooterLink to="/products/mersawa">Mersawa</FooterLink>
          <FooterLink to="/products/bengkirai">Bengkirai</FooterLink>
          <FooterLink to="/products/nyatoh">Nyatoh</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Company</h3>
          <FooterLink to="/about-us">About Us</FooterLink>
          <FooterLink to="/sustainability">Sustainability</FooterLink>
          <FooterLink to="/certifications">Certifications</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Contact</h3>
          <p>PT. Gunung Muro Wahanajaya<br />Kalimantan Tengah<br />Indonesia</p>
          <ExternalLink href="tel:+62">Contact Phone</ExternalLink>
          <ExternalLink href="mailto:info@gmw.co.id">info@gmw.co.id</ExternalLink>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} PT. Gunung Muro Wahanajaya. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 