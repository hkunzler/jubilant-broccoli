import React from 'react';
import styled from 'styled-components';
import { Image } from 'antd';

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 2rem 5rem;
`;


// @ts-ignore
const MediaGallery = ({ gallery }) => {
    return (
        <StyledGallery>
            {gallery.images.map((imageUrl: string | undefined, index: React.Key | null | undefined) => (
                <Image key={index} width={200} src={imageUrl} />
            ))}
        </StyledGallery>
    );
};

export default MediaGallery;
