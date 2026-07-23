// app/blog/page.tsx
import Link from "next/link";
import { getAbout } from "@/lib/about";

export const metadata = { title: "Бидний тухай" };

export default function AboutPage() {
    const about = getAbout();
    return (
        <section>
            <h2 className="post-list">{about.title}</h2>
            <p>{about.description}</p>
            <p>{about.content}</p>
        </section>
    );
}
