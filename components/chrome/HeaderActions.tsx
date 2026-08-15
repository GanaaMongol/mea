'use client'

import { useState } from 'react'

/**
 * The only interactive bits of the chrome: the search toggle and the mobile menu
 * button. Everything else in the header stays a Server Component.
 */
export function SearchButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="header__search-btn"
        aria-label="Хайх"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
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
      {open ? (
        <form action="/news" className="header__search-form" role="search">
          <input type="search" name="q" placeholder="Хайх..." aria-label="Хайх" autoFocus />
        </form>
      ) : null}
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
