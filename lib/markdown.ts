import Matter from 'gray-matter';

type RawFile = string;
export type Post = {
    name: string;
    content: string;
    data: Record<string, string>;
};

const importRawFile = async (path: string): Promise<RawFile> => {
    const file = await import(`../${path}`);
    return file.default;
};

export const importPostFile = (filename: string): Promise<RawFile> => importRawFile(`markdown/posts/${filename}.md`);

export const getPost = async (name: string): Promise<Post> => {
    const doc: Matter.GrayMatterFile<RawFile> = Matter(await importPostFile(name));
    return {
        name,
        content: doc.content,
        data: doc.data,
    };
};
