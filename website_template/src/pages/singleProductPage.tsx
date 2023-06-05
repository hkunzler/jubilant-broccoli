import React from 'react';
import styled from 'styled-components';
import {ProductDetails} from '@/components/product/ProductDetails';
import {ReviewsSection} from '@/components/ReviewsSection';
import {RelatedProducts} from '@/components/product/RelatedProducts';

const PageContainer = styled.main`
  padding: 20px;
`;

// @ts-ignore
const SingleProductPage = ({ product, reviews, relatedProducts }) => {
    return (
            <PageContainer>
                <ProductDetails product={product} />
                <ReviewsSection reviews={reviews} />
                <RelatedProducts products={relatedProducts} />
            </PageContainer>
    );
};

export default SingleProductPage;
