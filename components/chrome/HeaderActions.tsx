"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import type { UiStrings } from "@/lib/dictionary";

/**
 * The only interactive bits of the chrome: the search toggle and the mobile menu
 * button. Everything else in the header stays a Server Component.
 */
export function SearchButton({ action, t }: { action: string; t: UiStrings }) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <button
                className="header__search-btn"
                aria-label={t.search}
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
                aria-label={t.search}
                className="search-modal"
                onClick={(event) => {
                    if (event.target === dialogRef.current) dialogRef.current?.close();
                }}>
                <div className="search-modal__layout">
                    <form
                        action={action}
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
                            placeholder={t.searchPlaceholder}
                            aria-label={t.search}
                            className="search-modal__input"
                        />
                        <button
                            type="button"
                            aria-label={t.close}
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

export function MenuToggle({ t }: { t: UiStrings }) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const [navigatedFrom, setNavigatedFrom] = useState(pathname);

    // The header sits in the root layout and stays mounted across navigations,
    // so an open menu would survive the tap that navigated away from it.
    // Adjusted during render rather than in an effect — React re-runs this
    // component before painting, so the panel never flashes open on the new page.
    if (pathname !== navigatedFrom) {
        setNavigatedFrom(pathname);
        setOpen(false);
    }

    // The nav is a sibling rendered by a Server Component, so the open state
    // travels through <body> rather than a shared parent. Deriving the class
    // from state (instead of toggling it in the handler) keeps the two from
    // drifting apart.
    useEffect(() => {
        document.body.classList.toggle("nav-open", open);
        return () => document.body.classList.remove("nav-open");
    }, [open]);

    return (
        <button
            className="header__menu-toggle"
            aria-label={t.menu}
            aria-expanded={open}
            data-open={open || undefined}
            onClick={() => setOpen((value) => !value)}>
            <span />
        </button>
    );
}
