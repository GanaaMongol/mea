export type About = {
    title: string;
    description: string;
    content: string;
};

const AboutData: About = {
    title: "Бидний тухай",
    description: "Next.js сурч байгаа миний анхны төсөл",
    content:
        "Энэ бол миний анхны Next.js төсөл бөгөөд би React болон Next.js-ийн үндсэн ойлголтуудыг сурахыг зорьж байна. Энэ төсөл нь миний хувийн блог бөгөөд би энд өөрийн тэмдэглэлүүдийг хуваалцах болно."
};

export function getAbout() {
    return AboutData;
}
