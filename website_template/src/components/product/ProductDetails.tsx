import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const ProductContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

// @ts-ignore
export const ProductDetails = ({ product }) => {
    return (
        <ProductContainer>
            <img src={product.image} alt={product.name} />
            <Title level={1}>{product.name}</Title>
            <Paragraph>{product.description}</Paragraph>
            <Title level={2}>${product.price}</Title>
            <Button type="primary">Add to Cart</Button>
        </ProductContainer>
    );
};
