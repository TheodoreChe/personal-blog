import React from 'react';
import { Post } from 'lib/markdown';
import { PostPreview } from './PostPreview';

type Props = {
    postList: Array<Post>;
};

export const PostList: React.FC<Props> = (props: Props) => (
    <>
        {props.postList.map((post) => (
            <PostPreview post={post} key={post.name} />
        ))}
    </>
);
