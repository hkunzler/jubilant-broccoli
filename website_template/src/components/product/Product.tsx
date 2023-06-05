import React from 'react';

import {H2} from "@/styles/GlobalStyles";


// @ts-ignore
const Product = ({ product }) => {
    return (
        <div>
            <H2>{product.title}</H2>
        </div>
    );
};

export default Product;
