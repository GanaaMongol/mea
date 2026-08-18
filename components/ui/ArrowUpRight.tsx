/** The mockups' ↗ glyph, inlined so it inherits `currentColor` on hover. */
export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 12.6667L12.6666 4M4.34667 4H12.6666V12.32"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
