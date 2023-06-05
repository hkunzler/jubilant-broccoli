import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import {H2} from "@/styles/GlobalStyles";

const StyledBio = styled.div`
  padding: 2rem 5rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Bio = ({ content }:  {
    content: {
        title: string, body: [
            {
                children: [
                    {
                        text: string
                    }
                ]
            }
        ]
    }
}) => {
    return (
        <StyledBio>
            <H2>{content.title}</H2>
            <BlockContent blocks={content.body} />
        </StyledBio>
    );
};

export default Bio;
