// components/BlogList.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import type { Post } from "@/lib/posts";
import SearchBox from "./SearchBox";

export default function BlogList({ posts }: { posts: Post[] }) {
    const [query, setQuery] = useState("");

    const filtered = posts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));

    return (
        <>
            <SearchBox onSearch={setQuery} />
            <ul className="post-list">
                {filtered.map((post) => (
                    <li
                        key={post.slug}
                        className="post-card">
                        <Link href={`/blog/${post.slug}`}>
                            <h2>{post.title}</h2>
                            <time>{post.date}</time>
                            <p>{post.excerpt}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
