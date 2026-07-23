// app/blog/page.tsx
import { posts } from "@/lib/posts";
import BlogList from "@/components/BlogList";

export const metadata = { title: "Блог" };

export default function BlogPage() {
    return (
        <section>
            <h1>Блог</h1>
            <BlogList posts={posts} />
        </section>
    );
}
