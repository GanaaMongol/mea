async function getQuote() {
    const res = await fetch("https://dummyjson.com/quotes/random", {
        cache: "force-cache"
    });
    return res.json();
}

export default async function QuotesPage() {
    const quote = await getQuote();
    const time = new Date().toLocaleTimeString("mn-MN");

    return (
        <section>
            <h1>Random quote</h1>
            <p>
                "{quote.quote}" — {quote.author}
            </p>
            <p>
                <small>Fetch хийсэн цаг: {time}</small>
            </p>
        </section>
    );
}
