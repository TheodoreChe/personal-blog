import React from 'react';
import styles from './Image.module.css';

type TProps = {
    src: string;
    alt: string;
};

export const Image: React.FC<TProps> = (props: TProps) => (
    <span className={styles.wrapper}>
        <img className={styles.image} src={props.src} alt={props.alt} loading="lazy" />
    </span>
);
