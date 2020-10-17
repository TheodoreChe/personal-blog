import React from 'react';
import { Typography } from '../typography';
import { Image } from '../image';
import styles from './Header.module.css';

const HEADER_TITLE = 'Theodore Chernin';
const HEADER_DESC = 'Personal blog';

export const Header: React.FC = () => (
    <header className={styles.header}>
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <Image src="./assets/theodore.chernin.png" alt="Theodore Chernin Avatar" />
            </div>
            <div>
                <Typography as="h1" color="gradient" size="small">
                    {HEADER_TITLE}
                </Typography>
                <Typography as="span" color="gray">
                    {HEADER_DESC}
                </Typography>
            </div>
        </div>
    </header>
);
