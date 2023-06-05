import React from 'react';
import styled from 'styled-components';
import { Card, Row, Col } from 'antd';

const RelatedProductCard = styled(Card)`
  margin-bottom: 20px;
`;

// @ts-ignore
export const RelatedProducts = ({ products }) => {
    return (
        <Row gutter={16}>
            {products.map((product: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.PromiseLikeOfReactNode | null | undefined; image: string | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (

                <Col span={8}>
                    <RelatedProductCard
                        hoverable
                        cover={<img src={product.image} alt={''} />}
                    >
                        <Card.Meta title={product.name} description={product.description} />
                    </RelatedProductCard>
                </Col>
            ))}
        </Row>
    );
};
