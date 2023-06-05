import React, { useContext } from 'react';
import { CartContext } from "@/pages/_app";
import PayPalButton from "@/components/shared/PaypalButton";
import { List, Button, Typography, Card, Divider } from 'antd';

const { Title } = Typography;

const Cart = () => {

    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <Card>
            <Title level={2}>Your Cart</Title>
            <p>Total Items: {cart.reduce((total: any, item: { quantity: any; }) => item.quantity, 0)}</p>
            <Divider />
            <List
                itemLayout="horizontal"
                dataSource={cart}
                renderItem={(item: any) => (
                    <List.Item
                        actions={[
                            <Button type="primary" danger onClick={() => removeFromCart(item.slug.current)}>
                                Remove from cart
                            </Button>
                        ]}
                    >
                        <List.Item.Meta
                            title={item.name}
                            description={<>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.price}</p>
                            </>}
                        />

                    </List.Item>
                )}
            />
            <Divider />
            <p style={{textAlign: 'end'}}>Total: ${cart.reduce((total: any, item: { price: any; quantity: any }) => item.price * item.quantity, 0)} </p>
            <PayPalButton cart={cart} onSuccess={undefined} />
        </Card>
    );
};

export default Cart;
