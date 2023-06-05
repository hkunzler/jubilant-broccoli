import React from 'react';
import styled from 'styled-components';
import { Button } from '../shared/Button';
import {H2, P} from "@/styles/GlobalStyles";

const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  margin: 0 5rem;

`;

const StyledImage = styled.img`
  max-width: 300px;
  border-radius: 50%;
  margin: 20px;
`;

const AboutPreview = () => {
    return (
        <AboutSection>
            <StyledImage src="https://images.pexels.com/photos/15250698/pexels-photo-15250698/free-photo-of-view-of-a-river-in-autumn.jpeg" alt="Activist" />
            <div>
                <H2>About Us</H2>
                <P>
                    We are a group of dedicated activists with a mission to create a just
                    and fair society. Our goal is to raise awareness and foster dialogue
                    around critical issues affecting our community. We invite you to join
                    us in our cause and help us make a difference.
                </P>
                <Button label="Learn More" onClick={undefined} />
            </div>
        </AboutSection>
    );
};

export default AboutPreview;
