import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const ContactCard = styled.div`
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

const ContactIcon = styled.div`
  font-size: 36px;
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const ContactTitle = styled.h3`
  font-size: 24px;
  color: var(--primary-color);
  margin-bottom: 12px;
`;

const ContactInfo = styled.p`
  color: var(--text-light);
  line-height: 1.6;
`;

const ContactLink = styled.a`
  color: var(--accent-color);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: var(--primary-color);
  }
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: rgba(139, 69, 19, 0.1);
  border: 1px solid var(--primary-color);
  border-radius: 16px;
  padding: 40px;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  color: var(--primary-color);
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  background: rgba(139, 69, 19, 0.05);
  color: var(--text-light);
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  background: rgba(139, 69, 19, 0.05);
  color: var(--text-light);
  font-size: 16px;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const SubmitButton = styled.button`
  background: var(--primary-color);
  color: var(--text-light);
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
  }
`;

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Layout>
      <Container>
        <Title>Contact Us</Title>
        <Subtitle>
          Get in touch with us for inquiries about our premium wood products or to
          discuss your specific requirements. We're here to help you find the
          perfect wood solutions for your projects.
        </Subtitle>

        <ContactGrid>
          <ContactCard>
            <ContactIcon>
              {FaPhone({ size: 36 })}
            </ContactIcon>
            <ContactTitle>Phone</ContactTitle>
            <ContactInfo>
              <ContactLink href="tel:+62">Contact Phone</ContactLink>
            </ContactInfo>
          </ContactCard>

          <ContactCard>
            <ContactIcon>
              {FaEnvelope({ size: 36 })}
            </ContactIcon>
            <ContactTitle>Email</ContactTitle>
            <ContactInfo>
              <ContactLink href="mailto:info@gmw.co.id">
                info@gmw.co.id
              </ContactLink>
            </ContactInfo>
          </ContactCard>

          <ContactCard>
            <ContactIcon>
              {FaMapMarkerAlt({ size: 36 })}
            </ContactIcon>
            <ContactTitle>Address</ContactTitle>
            <ContactInfo>
              PT. Gunung Muro Wahanajaya<br />
              Kalimantan Tengah<br />
              Indonesia
            </ContactInfo>
          </ContactCard>
        </ContactGrid>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" required />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input type="email" required />
          </FormGroup>

          <FormGroup>
            <Label>Subject</Label>
            <Input type="text" required />
          </FormGroup>

          <FormGroup>
            <Label>Message</Label>
            <TextArea required />
          </FormGroup>

          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </Container>
    </Layout>
  );
};

export default Contact; 