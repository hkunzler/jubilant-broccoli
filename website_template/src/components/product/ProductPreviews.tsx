import React, {useContext} from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import Link from "next/link";
import {CartContext} from "@/pages/_app";

const { Meta } = Card;

const ProductCard = styled(Card)`
  margin-bottom: 20px;
`;
// @ts-ignore
const ProductPreview = ({ product }) => {
    // @ts-ignore
    const {addToCart, removeFromCart, getCartItemQuantity } = useContext(CartContext);
    const quantity = getCartItemQuantity(product.slug.current);

    return (
        <Link href={`/shop/${product.slug.current}`}>
            <ProductCard hoverable cover={<img alt={product.name} src={product.image} />}>
                <Meta title={product.name} description={`$${product.price}`} />
                {quantity > 0 ? (
                    <div>
                        <button onClick={(e) => { e.preventDefault(); addToCart(product); }}>+</button>
                        <span>{quantity}</span>
                        <button onClick={(e) => { e.preventDefault(); removeFromCart(product.slug.current); }}>-</button>
                    </div>
                ) : (
                    <button onClick={(e) => { e.preventDefault(); addToCart(product); }}>Add to cart</button>
                )}
            </ProductCard>
        </Link>
    );
};



// @ts-ignore
const ProductPreviews = ({ products }) => {
    return (
        <>
            {products.map((product: { id: React.Key | null | undefined; }) => (
                <ProductPreview key={product.id} product={product} />
            ))}
        </>
    );
};

export default ProductPreviews;
