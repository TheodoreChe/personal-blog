import React, { ReactNode } from 'react';
import styles from './Typography.module.css';

type Props = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
    color?: 'gradient' | 'gray';
    size?: 'small';
    children: ReactNode;
};

export const Typography: React.FC<Props> = (props: Props) => {
    const className = [styles[props.as], styles[props.color], styles[props.size]].filter(Boolean).join(' ');

    switch (props.as) {
        case 'span':
            return <span className={className}>{props.children}</span>;
        case 'p':
            return <p className={className}>{props.children}</p>;
        case 'h1':
            return <h1 className={className}>{props.children}</h1>;
        case 'h2':
            return <h2 className={className}>{props.children}</h2>;
        case 'h3':
            return <h3 className={className}>{props.children}</h3>;
        default:
            return <div className={className}>{props.children}</div>;
    }
};
