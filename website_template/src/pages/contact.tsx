import React from 'react';
import styled from 'styled-components';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

const PageContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const FormContainer = styled.div`
  width: 60%;
`;

const InfoContainer = styled.div`
  width: 40%;
`;

// @ts-ignore
const Contact = ( ) => {
    const info = {
        "address": "123 Main St, Anytown, USA",
        "phone": "(123) 456-7890",
        "email": "info@example.com"
    }

    return (
            <PageContainer>
                <FormContainer>
                    <ContactForm />
                </FormContainer>
                <InfoContainer>
                    <ContactInfo info={info} />
                </InfoContainer>
            </PageContainer>
    );
};

export default Contact;
