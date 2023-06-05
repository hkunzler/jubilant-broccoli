import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: ${({ theme }) => theme.typography.fontPrimary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

// @ts-ignore
export const Button = ({ label, onClick }) => {
    return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

