import React from 'react';
import styled from 'styled-components';
import {Typography} from 'antd';
import {imageBuilder} from "@/utils/imageBuilder";

const {Title} = Typography;

const PostContainer = styled.div`
  background-color: ${({theme}) => theme.colors.background};
  padding: 20px;
  min-height: calc(100vh - 60px);
`;

const StyledImage = styled.img`
max-width: 30rem;
`;

const BlogPost = ({post}: {
    post: {
        title: string, coverImage: {
            asset: {
                _type: 'reference';
                _ref: string;
            };
            alt?: string;
        }, body: [
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
        <PostContainer>
            <Title level={1}>{post.title}</Title>
            <StyledImage src={imageBuilder(post.coverImage)} alt={post.title}/>
            <div dangerouslySetInnerHTML={{__html: post.body[0].children?.[0].text}}></div>
        </PostContainer>
    );
};

export default BlogPost;
