import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

// @ts-ignore
const ContactInfo = ({ info }) => {
    return (
        <InfoContainer>
            <Title level={2}>Contact Information</Title>
            <Text>{info.address}</Text>
            <br />
            <Text>{info.phone}</Text>
            <br />
            <Text>{info.email}</Text>
        </InfoContainer>
    );
};

export default ContactInfo;
