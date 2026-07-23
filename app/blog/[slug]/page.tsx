// app/blog/[slug]/page.tsx
import { posts, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

// ЭНЭ ФУНКЦИЙГ НЭМНЭ
export function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug
    }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article>
            <h1>{post.title}</h1>
            <time>{post.date}</time>
            <p>{post.content}</p>
        </article>
    );
}
