import React, {useEffect, useRef} from 'react';
import styled from "styled-components";

const PayPalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  div {
    width: fit-content !important;
  }
`;

// @ts-ignore
const PayPalButton = ({ cart, onSuccess}) => {
    // @ts-ignore

    const paypalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const items = cart.map((product:any) => ({
            name: product.name,
            unit_amount: {
                currency_code: 'USD',
                value: product.price,
            },
            quantity: product.quantity,
        }));
        window.paypal.Buttons({
            createOrder: function(data:any, actions:any) {
                const total = items.reduce((sum: number, product: any) => sum + product.unit_amount.value * product.quantity, 0);
                const totalStr = total.toString();
                return actions.order.create({
                    purchase_units: [{
                        description: 'My Shopping Cart',
                        amount: {
                            currency_code: 'USD',
                            value: totalStr,
                            breakdown: {
                                item_total: {
                                    currency_code: "USD",
                                    value: totalStr
                                }
                            },// Total price
                        },
                        items,
                    }],
                });
            },
            onApprove: async (data: any, actions: { order: { capture: () => any; }; }) => {
                const order = await actions.order.capture();
                onSuccess(order);
            },
            onError: (err: any) => {
                console.error(err);
            },
        }).render(paypalRef.current);
    }, []);

    return <PayPalButtonContainer ref={paypalRef} />;
};

export default PayPalButton;
