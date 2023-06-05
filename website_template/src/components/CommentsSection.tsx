import React from 'react';
import styled from 'styled-components';
import { List, Avatar, Typography, Form, Input, Button } from 'antd';

const { TextArea } = Input;
const { Text } = Typography;

const CommentForm = styled(Form)`
  margin-top: 20px;
`;

// @ts-ignore
const CommentsSection = ({ comments }) => {
    // @ts-ignore
    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={(item: any) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={item.author}
                            description={item.content}
                        />
                        <Text type="secondary">{item.datetime}</Text>
                    </List.Item>
                )}
            />
            <CommentForm>
                <Form.Item>
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        Add Comment
                    </Button>
                </Form.Item>
            </CommentForm>
        </>
    );
};

export default CommentsSection;
