import React from 'react';
import Link from 'next/link';
import { Post } from 'lib/markdown';
import { Typography } from 'modules/Typography';
import styles from './Preview.module.css';

type Props = {
    post: Post;
};

export const Preview: React.FC<Props> = ({ post }: Props) => {
    return (
        <article className={styles.wrapper}>
            <Link href={`post/${post.name}`} key={post.name}>
                <a className={styles.link}>
                    <Typography as="h4">{post.data.title}</Typography>
                    {post.data.description}
                </a>
            </Link>
        </article>
    );
};
