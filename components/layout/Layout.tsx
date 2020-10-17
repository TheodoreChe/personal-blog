import React, { ReactNode } from 'react';
import styles from './Layout.module.css';
import { Header } from './Header';

type Props = {
    children: ReactNode;
};

export const Layout: React.FC<Props> = (props: Props) => (
    <main className={styles.main}>
        <Header />
        <div className={styles.wrapper}>{props.children}</div>
    </main>
);
