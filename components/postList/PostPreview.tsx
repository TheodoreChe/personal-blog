import React from 'react';
import Link from 'next/link';
import { Post } from 'lib/markdown';
import { Typography } from 'components/typography';
import styles from './PostPreview.module.css';

type Props = {
    post: Post;
};

export const PostPreview: React.FC<Props> = ({ post }: Props) => {
    return (
        <article className={styles.wrapper}>
            <Link href={`post/${post.name}`} key={post.name}>
                <a>
                    <Typography as="h4">{post.data.title}</Typography>
                    {post.data.description}
                </a>
            </Link>
        </article>
    );
};
