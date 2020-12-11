import React from 'react';
import { Post } from 'lib/markdown';
import { Preview } from '../Preview';

type Props = {
    postList: Array<Post>;
};

export const List: React.FC<Props> = (props: Props) => (
    <>
        {props.postList.map((post) => (
            <Preview post={post} key={post.name} />
        ))}
    </>
);
