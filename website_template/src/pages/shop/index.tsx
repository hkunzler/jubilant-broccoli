import React, {useState} from 'react';
import styled from 'styled-components';
import ShopSidebar from "@/components/product/ShopSidebar";
import ShopHero from "@/components/product/ShopHero";
import ProductPreviews from "@/components/product/ProductPreviews";
import {getAllCategories,  getAllProducts} from "@/lib/api";

const PageContainer = styled.main`
  display: flex;
    justify-content: space-between;
  padding: 20px;
`;

const ShopContent = styled.div`
  width: 70%;
`;

const Sidebar = styled(ShopSidebar)`
  width: 30%;
`;

// @ts-ignore
const Shop = ({ allProducts, allCategories }) =>
{
    const [selectedCategory, setSelectedCategory] = useState<any>(null);

    const filteredProducts = allProducts.filter((product: { category: { name: string }; }) => {
            return (selectedCategory
                ? product.category && product.category.name === selectedCategory?.name
                : true)
        }
    );
    const handleCategoryClick = (category: any) => {
        setSelectedCategory(category);
    };
    return (
        <>
            <ShopHero />
            <PageContainer>
                <ShopContent>
                    <ProductPreviews products={filteredProducts} />
                </ShopContent>
                  <Sidebar categories={allCategories} onCategoryClick={handleCategoryClick}/>
            </PageContainer>
        </>
    );
};

export default Shop;

export async function getStaticProps() {
    const allProducts = await getAllProducts();
    const allCategories = await getAllCategories();

    return {
        props: {  allProducts, allCategories },
    };}
