import React from 'react';
import styled from 'styled-components';
import Link from "next/link";

const BlogSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 20px;
  text-align: center;
`;

const BlogGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
`;

const BlogPost = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  width: 250px;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  transition: transform .2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const PostTitle = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
`;

const PostExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.background};
`;

// @ts-ignore
const FeaturedBlogPosts = ({posts}) => {

    return (
        <BlogSection>
            <h2>Latest Blog Posts</h2>
            <BlogGrid>
                {posts
                    .sort((a: { publishedAt: string | number | Date; }, b: { publishedAt: string | number | Date; }) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
                    .slice(0, 3).map((post: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; excerpt: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => (
                    <BlogPost key={index}>
                        <PostTitle>{post.title}</PostTitle>
                        <PostExcerpt>{post.excerpt}</PostExcerpt>
                    </BlogPost>
                ))}
            </BlogGrid>
            <Link href={'/blog'}>View All Posts</Link>
        </BlogSection>
    );
};

export default FeaturedBlogPosts;
