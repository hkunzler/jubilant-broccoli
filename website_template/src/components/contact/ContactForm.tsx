import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const StyledForm = styled(Form)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

const ContactForm = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <StyledForm onFinish={onFinish}>
            <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input placeholder="Name" />
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="message" rules={[{ required: true, message: 'Please input your message!' }]}>
                <TextArea rows={4} placeholder="Message" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </StyledForm>
    );
};

export default ContactForm;
