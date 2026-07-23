// lib/posts.ts
export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
};

export const posts: Post[] = [
    {
        slug: "anhnii-niitlel",
        title: "Миний анхны нийтлэл",
        date: "2026-07-20",
        excerpt: "Next.js сурч эхэлсэн тухай миний тэмдэглэл.",
        content: "Next.js сурч эхлээд нэг долоо хоног боллоо. App Router-ийн бүтэц эхэндээ сонин санагдсан ч одоо ойлгомжтой болж байна."
    },
    {
        slug: "server-components",
        title: "Server Components гэж юу вэ",
        date: "2026-07-22",
        excerpt: "React-ээс хамгийн том ялгаа нь энэ байлаа.",
        content: "Server Component дээр useState хэрэггүй, шууд async функц бичиж дата татаж болдог нь гайхалтай."
    },
    {
        slug: "css-songolt",
        title: "Tailwind уу, native CSS үү",
        date: "2026-07-23",
        excerpt: "Би native CSS-ээр эхлэхээр шийдлээ.",
        content: "CSS суурьтай хүнд native CSS-ээр эхлээд дараа нь Tailwind сурах нь илүү тохиромжтой юм шиг санагдлаа."
    }
];

export function getPost(slug: string) {
    return posts.find((p) => p.slug === slug);
}
