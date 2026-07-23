// components/SearchBox.tsx
"use client";

import { useState } from "react";

export default function SearchBox({ onSearch }: { onSearch: (query: string) => void }) {
    const [value, setValue] = useState("");

    return (
        <input
            type="text"
            placeholder="Нийтлэл хайх..."
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                onSearch(e.target.value);
            }}
            className="search-box"
        />
    );
}
