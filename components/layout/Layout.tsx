import React, { ReactNode } from 'react';

type Props = {
    title: undefined | string;
    children: ReactNode;
};

export const Layout: React.FC<Props> = (props: Props) => (
    <>
        <main>{props.children}</main>
    </>
);
