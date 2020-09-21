import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
    title: undefined | string;
    children: ReactNode;
};

export const Layout: React.FC<Props> = (props: Props) => (
    <>
        <Head>
            <title>TC | {props.title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{props.children}</main>
    </>
);
