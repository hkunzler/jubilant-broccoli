import styled from "styled-components";

export const HeroSection = styled.section`
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.background};
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const H1 = styled.h1`
    font-size: ${({theme}) => theme.typography.h1};
`;
export const H2 = styled.h2`
    font-size: ${({theme}) => theme.typography.h2};
  color: ${({theme}) => theme.colors.textPrimary};
  
`;
export const H3 = styled.h3`
    font-size: ${({theme}) => theme.typography.h3};
`;
export const H4 = styled.h4`
    font-size: ${({theme}) => theme.typography.h4};
`;
export const H5 = styled.h5`
    font-size: ${({theme}) => theme.typography.h5};
`;
export const H6 = styled.h6`
    font-size: ${({theme}) => theme.typography.h6};
`;
export const P = styled.p`
    font-size: ${({theme}) => theme.typography.p};
  color: ${({theme}) => theme.colors.textSecondary};
`;