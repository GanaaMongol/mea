'use client'

import { useRef, useState } from 'react'

/**
 * The only interactive bits of the chrome: the search toggle and the mobile menu
 * button. Everything else in the header stays a Server Component.
 */
export function SearchButton() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <>
      <button
        className="header__search-btn"
        aria-label="Хайх"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {/*
        A native <dialog> rather than a positioned div: `showModal()` puts it in
        the browser's top layer, so it sits above the sticky header and the
        announcement bar without competing on z-index, and Escape closes it for
        free. The dialog itself fills the viewport, so a click that lands on it
        (and not on the search panel) is a click on the backdrop.
      */}
      <dialog
        ref={dialogRef}
        aria-label="Хайх"
        className="fixed inset-0 m-0 h-full max-h-full w-full max-w-full bg-transparent p-0 backdrop:bg-neutral-600/85 backdrop:backdrop-blur-[2px]"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close()
        }}
      >
        <div className="flex h-full w-full items-center justify-center px-6">
          <form
            action="/news"
            role="search"
            className="flex w-11/12 items-center gap-3 rounded-2xl bg-neutral-0 px-6 py-4 shadow-[0_24px_64px_rgba(0,0,0,0.35)] sm:w-1/3"
          >
            <span className="shrink-0 text-neutral-400" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="search"
              name="q"
              autoFocus
              placeholder="Хайх..."
              aria-label="Хайх"
              className="min-w-0 flex-1 bg-transparent font-body text-h2 text-neutral-700 outline-none placeholder:text-neutral-400"
            />
            <kbd className="hidden shrink-0 rounded-sm border border-neutral-200 px-1.5 py-0.5 font-ui text-caption text-neutral-400 sm:block">
              ESC
            </kbd>
          </form>
        </div>
      </dialog>
    </>
  )
}

export function MenuToggle() {
  const [open, setOpen] = useState(false)

  return (
    <button
      className="header__menu-toggle"
      aria-label="Цэс"
      aria-expanded={open}
      data-open={open || undefined}
      onClick={() => {
        setOpen((value) => !value)
        document.body.classList.toggle('nav-open')
      }}
    >
      <span />
    </button>
  )
}
