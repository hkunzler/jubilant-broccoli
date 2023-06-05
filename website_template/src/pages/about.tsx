import React from 'react';
import styled from 'styled-components';
import AboutHero from '../components/about/AboutHero';
import Bio from '../components/about/Bio';
import MediaGallery from '../components/MediaGallery';
import {getAboutContent, getGallery} from "@/lib/api";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
`;

const MainContent = styled.main`
  flex: 1;
`;

// @ts-ignore
const About = ({aboutContent, gallery}) => {
    return (
        <PageWrapper>
            <MainContent>
                <AboutHero title="About Me" />
                <Bio content={aboutContent} />
                <MediaGallery gallery={gallery} />
            </MainContent>
        </PageWrapper>
    );
};

export default About;

export async function getStaticProps() {
    const aboutContent = await getAboutContent();
    const gallery = await getGallery();  product

    return {
        props: {
            aboutContent,
            gallery,
        },
    };
}
