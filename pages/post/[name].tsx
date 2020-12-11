import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';
import { getPost, Post } from 'lib/markdown';
import { Layout } from 'components/Layout';
import { Content, Header } from 'components/Post';

type Props = {
    post: Post;
};

const PostPage: React.FC<Props> = (props: Props) => (
    <Layout pageName={props.post?.data?.title}>
        <Header title={props.post?.data?.title} icon={props.post?.data?.icon} />
        <Content>
            <ReactMarkdown source={props.post?.content} />
        </Content>
    </Layout>
);

const getStaticPaths: GetStaticPaths = async () => {
    const paths = require
        .context('markdown/posts')
        .keys()
        .map((path: string) => ({
            params: {
                name: path.match(/\.\/(.*)\./)?.[1],
            },
        }));

    return { paths, fallback: false };
};

const getStaticProps: GetStaticProps<Props, { name: string }> = async ({ params }) => {
    const post = await getPost(params?.name);

    return { props: { post } };
};

export { PostPage as default, getStaticProps, getStaticPaths };
