import React from 'react';
import styled from 'styled-components';
import Hero from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import FeaturedBlogPosts from '@/components/home/FeaturedBlogPosts';
import ShopPreview from '@/components/home/ShopPreview';
import NewsletterSignup from '../components/shared/NewsletterSignup';
import {getAllCategories, getAllPosts, getAllProducts} from "@/lib/api";

const MainContent = styled.main`
  min-height: calc(100vh - 60px); 
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

// @ts-ignore
const Home = ({allPosts}) => {
    return (
            <MainContent>
                <Hero />
                <AboutPreview />
                <FeaturedBlogPosts posts={allPosts} />
                <ShopPreview />
                <NewsletterSignup />
            </MainContent>
    );
};

export default Home;

export async function getStaticProps() {
    const allPosts = await getAllPosts();
    const allProducts = await getAllProducts();
    const allCategories = await getAllCategories();

    return {
        props: { allPosts, allProducts, allCategories },
    };
}