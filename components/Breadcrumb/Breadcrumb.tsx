import React from 'react';
import Link from 'next/link';
import styles from './Breadcrumb.module.scss';

type Props = {
    pageName: string;
};

export const Breadcrumb: React.FC<Props> = ({ pageName }: Props) => (
    <div className={styles.wrap}>
        <div className={styles.item}>
            <Link href="/">
                <a className={styles.link}>
                    <div role="button" className={styles.text}>
                        🏡 Theodore Chernin
                    </div>
                </a>
            </Link>
            <span className={styles.slash}>/</span>
            <div role="button" className={styles.text}>
                {pageName}
            </div>
        </div>
    </div>
);
