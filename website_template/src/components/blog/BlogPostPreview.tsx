import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import Link  from 'next/link';
import {imageBuilder} from "@/utils/imageBuilder";

const {Meta} = Card;

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  cursor: pointer;

  .ant-card-body {
    padding: 15px;
  }
`;

const BlogPostPreview = ({post}: {post: any }) => {
      return (
        <Link href={`/blog/${post.slug.current}`}>
            <StyledCard
                hoverable
                cover={
                    <img
                        alt={post.title}
                        src={imageBuilder(post.coverImage)}
                    />
                }
            >
                <Meta
                    title={post.title}
                    description={post.excerpt}
                />
            </StyledCard>
        </Link>
    );
};

export default BlogPostPreview;
