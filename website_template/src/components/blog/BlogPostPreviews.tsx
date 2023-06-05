import React from 'react';
import styled from 'styled-components';
import BlogPostPreview from './BlogPostPreview';
import {getAllPosts} from "@/lib/api";

const PreviewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

// @ts-ignore
const BlogPostPreviews = ({ posts }) => {
    return (
        <PreviewsContainer>
            {posts
                .sort((a: { publishedAt: string | number | Date; }, b: { publishedAt: string | number | Date; }) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
                .map((post: any, index: number) => (
                    <BlogPostPreview key={index} post={post} />
                ))}
        </PreviewsContainer>
    );
};

export default BlogPostPreviews;

export async function getStaticProps() {
    const allPosts = await getAllPosts();
    return {
        props: { allPosts },
    };
}