import React from 'react';
import {getPostBySlug,  getAllPosts} from '@/lib/api';
import styled from "styled-components";
import BlogPost from "@/components/blog/BlogPost";



const PageContainer = styled.main`
  padding: 20px;
`;
// @ts-ignore
const Post  = ({ post } ) => {
    return (
        <PageContainer>
            <BlogPost post={post} />
        </PageContainer>
    );
};

export default Post;

export async function getStaticPaths() {
    const posts = await getAllPosts();

    const paths = posts.map((post: any) => ({
        params: {
            slug: post.slug.current,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}// @ts-ignore
export async function getStaticProps({ params }) {
    const post = await getPostBySlug(params.slug);
    return {
        props: { post },
    };
}
