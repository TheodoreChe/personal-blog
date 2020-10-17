import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render(): ReactElement {
        return (
            <Html lang="en">
                <Head>
                    <title>Theodore Che</title>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
                    />
                </Head>
                <body className="dark">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
