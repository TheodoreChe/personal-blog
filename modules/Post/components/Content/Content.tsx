import React from 'react';
import styles from './Content.module.scss';

type Props = {
    children: React.ReactNode;
};

export const Content: React.FC<Props> = ({ children }: Props) => <div className={styles.wrapper}>{children}</div>;
