import React from 'react';
import styled from 'styled-components';
import { Button } from '../shared/Button';

import {H2, P} from "@/styles/GlobalStyles";

const ShopSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 20px;
  text-align: center;
`;

const ShopPreview = () => {
    return (
        <ShopSection>
            <H2>Shop</H2>
            <P>Support us by purchasing our books.</P>
            <Button onClick={() => console.log('shop')} label="Visit Shop" />
        </ShopSection>
    );
};

export default ShopPreview;
