import React from 'react';
import { List, Avatar, Typography } from 'antd';

const { Text } = Typography;

// @ts-ignore
export const ReviewsSection = ({ reviews }) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={reviews}
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
    );
};
