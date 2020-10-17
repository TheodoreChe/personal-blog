import React from 'react';
import { GetStaticProps } from 'next';
import { getPost, Post } from 'lib/markdown';
import { Layout } from 'components/layout';
import { PostList } from 'components/postList';

type Props = {
    postList: Array<Post>;
};

const Home: React.FC<Props> = (props: Props) => {
    return (
        <Layout>
            <PostList postList={props.postList} />
        </Layout>
    );
};

const getStaticProps: GetStaticProps = async () => {
    const postNameList = require
        .context('markdown/posts')
        .keys()
        .map((k: string) => k.match(/\.\/(.*)\./)?.[1]);

    const postList = await Promise.all(postNameList.map(getPost));

    return {
        props: {
            postList,
        },
    };
};

export { getStaticProps };
export default Home;
