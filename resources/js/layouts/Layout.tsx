// resources/js/Layouts/Layout.tsx
import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <main>
            <header>
                <Link href="/">Home</Link>
                <Link href="/create">create</Link>
                <Link href="/contact">Contact</Link>
            </header>
            <article>{children}</article>
        </main>
    );
}
