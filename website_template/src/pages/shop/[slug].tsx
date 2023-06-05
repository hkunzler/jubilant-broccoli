import React, {useContext} from 'react';
import {getAllProducts, getProductBySlug} from '@/lib/api';

import {H1} from "@/styles/GlobalStyles";
import {CartContext} from "@/pages/_app";



// @ts-ignore
const Post = ({ product }) => {
    // @ts-ignore
    const {addToCart, removeFromCart, getCartItemQuantity } = useContext(CartContext);
    const quantity = getCartItemQuantity(product.slug.current);
    return (
        <div>
            <H1>{product.name}</H1>
            {quantity > 0 ? (
                <div>
                    <button onClick={(e) => { e.preventDefault(); addToCart(product); }}>+</button>
                    <span>{quantity}</span>
                    <button onClick={(e) => { e.preventDefault(); removeFromCart(product.slug.current); }}>-</button>
                </div>
            ) : (
                <button onClick={(e) => { e.preventDefault(); addToCart(product); }}>Add to cart</button>
            )}        </div>
    );
};

export default Post;

export async function getStaticPaths() {
    const products = await getAllProducts();
    const paths = products.map((product: any) => ({
        params: {
            slug: product.slug.current,
        },
    }))
    return {
        paths,
        fallback: false
    };
}

// @ts-ignore
export async function getStaticProps({ params }) {
    const product = await getProductBySlug(params.slug);
    return {
        props: { product },
    };
}
