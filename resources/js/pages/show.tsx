import React from 'react';

type Post = {
    id: number;
    body: string;
};

type ShowProps = {
    post: Post;
};

const Show: React.FC<ShowProps> = ({ post }) => {
    console.log(post);
    return (
        <div className="p-4">
            <h1 className="mb-2 text-2xl font-bold">Post</h1>
            <p className="text-white">{post.body}</p>
        </div>
    );
};

export default Show;
