import React, {useState} from 'react';
import styled from 'styled-components';
import BlogHero from '@/components/blog/BlogHero';
import BlogPostPreviews from '@/components/blog/BlogPostPreviews';
import BlogSidebar from "@/components/blog/BlogSidebar";
import {getAllCategories, getAllPosts, getAllProducts} from "@/lib/api";

const PageContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const BlogContent = styled.div`
  width: 70%;
`;

const Sidebar = styled(BlogSidebar)`
  width: 30%;
`;

// @ts-ignore
const Blog = ({allPosts}) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = ['Community', 'Activism', 'Events', 'Opinion', 'test', 'Test'];

    const filteredPosts = allPosts.filter((post: { tag: { name: string }; }) => {
            return (selectedCategory
                ? post.tag && post.tag.name === selectedCategory
                : true)
        }
    );

    const handleCategoryClick = (category: any) => {
        setSelectedCategory(category);
    };
    return (
        <>
            <BlogHero/>
            <PageContainer>
                <BlogContent>
                    <BlogPostPreviews posts={filteredPosts}/>
                </BlogContent>
                <Sidebar categories={categories}
                         onCategoryClick={handleCategoryClick}/>
            </PageContainer>
        </>
    );
};

export default Blog;

export async function getStaticProps() {
    const allPosts = await getAllPosts();
    const allProducts = await getAllProducts();
    const allCategories = await getAllCategories();

    return {
        props: {allPosts, allProducts, allCategories},
    };
}