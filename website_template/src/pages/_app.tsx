import React, {useState} from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {theme} from '@/styles/theme';
import HeaderComponent from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;
// @ts-ignore
export const CartContext = React.createContext();

// @ts-ignore
export default function App({Component, pageProps}) {
    const [cart, setCart] = useState<any>([]);

    const addToCart = (product: any) => {
        const existingProduct = cart.find((item: any) => item.slug.current === product.slug.current);
        if (existingProduct) {

            setCart(cart.map((item: any) =>
                item.slug.current === product.slug.current
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {

            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productSlug: any) => {
        const existingProduct = cart.find((item: any) => item.slug.current === productSlug);
        if (existingProduct && existingProduct.quantity > 1) {

            setCart(cart.map((item: any) =>
                item.slug.current === productSlug
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ));
        } else {

            setCart(cart.filter((item: any) => item.slug.current !== productSlug));
        }
    };

    const getCartItemQuantity = (productSlug: any) => {
        const existingProduct = cart.find((item: any) => item.slug.current === productSlug);
        return existingProduct ? existingProduct.quantity : 0;
    };


    return (
        <ThemeProvider theme={theme}>
            <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartItemQuantity }}>                <GlobalStyle/>
                <HeaderComponent/>
                <main>
                    <Component {...pageProps} />
                </main>
                <Footer/>
            </CartContext.Provider>
        </ThemeProvider>
    );
}
