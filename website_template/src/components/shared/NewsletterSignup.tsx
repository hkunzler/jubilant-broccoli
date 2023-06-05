import React from 'react';
import styled from 'styled-components';
import { Form, Input } from 'antd';
import {Button} from './Button';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledInput = styled(Input)`
  width: 200px;
  border-radius: 5px;
`;

const NewsletterSignup = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    // @ts-ignore
    return (
        <StyledForm onFinish={onFinish}>
            <Form.Item
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <StyledInput placeholder="Enter your email" />
            </Form.Item>
            <Form.Item>
                <Button onClick={() => console.log('test')} label="Subscribe" />
            </Form.Item>
        </StyledForm>
    );
};

export default NewsletterSignup;
