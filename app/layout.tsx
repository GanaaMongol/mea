// app/layout.tsx
import Link from "next/link";
import "./globals.css";

export const metadata = {
    title: "Миний блог",
    description: "Next.js сурч байгаа миний анхны төсөл"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="mn"
            suppressHydrationWarning>
            <body>
                <header className="site-header">
                    <Link href="/">Нүүр</Link>
                    <Link href="/blog">Блог</Link>
                    <Link href="/about">Бидний тухай</Link>
                    <Link href="/quotes">Quotes</Link>
                </header>

                <main className="site-main">{children}</main>

                <footer className="site-footer">© 2026 Миний блог</footer>
            </body>
        </html>
    );
}
