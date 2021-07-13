import React from 'react';
import { DarkModeToggle } from 'modules/DarkModeToggle';
import { Typography } from 'modules/Typography';
import { Image } from 'modules/Image';
import styles from './Header.module.css';

const HEADER_TITLE = 'Theodore Chernin';
const HEADER_DESC = '';

export const Header: React.FC = () => (
    <header className={styles.header}>
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <Image src="/assets/theodore.chernin.jpeg" alt="Theodore Chernin Avatar" />
            </div>
            <div>
                <Typography as="h1" color="gradient" size="small">
                    {HEADER_TITLE}
                </Typography>
                <Typography as="span" color="gray">
                    {HEADER_DESC}
                </Typography>
            </div>
            <div className={styles.toggle}>
                <DarkModeToggle />
            </div>
        </div>
    </header>
);
