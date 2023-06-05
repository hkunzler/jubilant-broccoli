import React from 'react';
import {H1, HeroSection} from "@/styles/GlobalStyles";

const AboutHero = ({ title }: {title: string}) => {
    return (
        <HeroSection>
            <H1>{title}</H1>
        </HeroSection>
    );
};

export default AboutHero;
