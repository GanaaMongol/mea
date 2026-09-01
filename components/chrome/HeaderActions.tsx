"use client";

import { useRef, useState } from "react";

/**
 * The only interactive bits of the chrome: the search toggle and the mobile menu
 * button. Everything else in the header stays a Server Component.
 */
export function SearchButton() {
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <button
                className="header__search-btn"
                aria-label="Хайх"
                aria-haspopup="dialog"
                onClick={() => dialogRef.current?.showModal()}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle
                        cx="11"
                        cy="11"
                        r="8"
                    />
                    <line
                        x1="21"
                        y1="21"
                        x2="16.65"
                        y2="16.65"
                    />
                </svg>
            </button>
            <dialog
                ref={dialogRef}
                aria-label="Хайх"
                className="search-modal"
                onClick={(event) => {
                    if (event.target === dialogRef.current) dialogRef.current?.close();
                }}>
                <div className="search-modal__layout">
                    <form
                        action="/search"
                        role="search"
                        className="search-modal__panel">
                        <span
                            className="search-modal__icon"
                            aria-hidden="true">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle
                                    cx="11"
                                    cy="11"
                                    r="8"
                                />
                                <line
                                    x1="21"
                                    y1="21"
                                    x2="16.65"
                                    y2="16.65"
                                />
                            </svg>
                        </span>
                        <input
                            type="search"
                            name="q"
                            autoFocus
                            placeholder="Мэдээ мэдээллээс хайх..."
                            aria-label="Хайх"
                            className="search-modal__input"
                        />
                        <button
                            type="button"
                            aria-label="Хаах"
                            className="search-modal__close"
                            onClick={() => dialogRef.current?.close()}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M18 6 6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export function MenuToggle() {
    const [open, setOpen] = useState(false);

    return (
        <button
            className="header__menu-toggle"
            aria-label="Цэс"
            aria-expanded={open}
            data-open={open || undefined}
            onClick={() => {
                setOpen((value) => !value);
                document.body.classList.toggle("nav-open");
            }}>
            <span />
        </button>
    );
}
