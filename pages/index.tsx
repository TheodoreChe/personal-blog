import React from 'react';
import { GetStaticProps } from 'next';
import { getPost, Post } from 'lib/markdown';
import { Layout } from 'modules/Layout';
import { List } from 'modules/Post';

type Props = {
    postList: Array<Post>;
};

const HomePage: React.FC<Props> = ({ postList }: Props) => {
    return (
        <Layout withHeader>
            <List postList={postList} />
        </Layout>
    );
};

const getStaticProps: GetStaticProps = async () => {
    const paths = require
        .context('markdown/posts')
        .keys()
        .map((path: string) => path.match(/\.\/(.*)\./)?.[1]);

    const postList = await Promise.all(paths.map(getPost));

    return {
        props: {
            postList,
        },
    };
};

export { HomePage as default, getStaticProps };
