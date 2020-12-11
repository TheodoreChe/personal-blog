import React from 'react';
import { Typography } from 'components/Typography';
import styles from './Header.module.css';

type Props = {
    icon?: string;
    title?: string;
};

export const Header: React.FC<Props> = ({ icon, title }: Props) => {
    return (
        <>
            {icon && (
                <div className={styles.wrapper}>
                    <span role="image" className={styles.icon}>
                        {icon}
                    </span>
                </div>
            )}
            {title && <Typography as="h2">{title}</Typography>}
        </>
    );
};
