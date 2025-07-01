// resources/js/pages/about/about.tsx

import { useForm } from '@inertiajs/react';
import React from 'react';

export default function About() {
    const { data, setData, post, processing, errors } = useForm({
        body: '',
    });

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/posts/store');
    }

    return (
        <>
            <h1 className="mb-4 text-xl font-bold text-blue-500">Create Post</h1>

            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <textarea
                        className="w-full rounded border border-gray-300 p-2"
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                    />
                    {errors.body && <p className="mt-1 text-sm text-red-500">{errors.body}</p>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
                >
                    {processing ? 'Posting...' : 'Submit'}
                </button>
            </form>
        </>
    );
}
