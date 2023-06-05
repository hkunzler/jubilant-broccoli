import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                <Main />
                <NextScript />
                <script src={process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_SRC}></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument
