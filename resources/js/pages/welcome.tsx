import { Link, useForm } from '@inertiajs/react';

interface Post {
    id: number;
    body: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedPosts {
    data: Post[];
    links: PaginationLink[];
}

interface WelcomeProps {
    posts: PaginatedPosts;
}

export default function Welcome({ posts }: WelcomeProps) {
    const { delete: destroy } = useForm();

    function submit(e: React.FormEvent, id: number) {
        e.preventDefault();
        destroy(`/posts/${id}`);
    }
    console.log(posts);
    return (
        <div>
            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="border-2 py-4">
                        <p>{post.body}</p>
                        <br />
                        <Link href={`/posts/${post.id}`}>Read more...</Link>
                        <br />
                        <form onSubmit={(e) => submit(e, post.id)}>
                            <button>Delete</button>
                        </form>
                        <Link href={`/posts/${post.id}/edit`}>Edit</Link>
                    </div>
                ))}
            </div>
            <div className="px-4 py-12">
                {posts.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url || '#'}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`p-1 ${link.active ? 'text-blue-500' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}
