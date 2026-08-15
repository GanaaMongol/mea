type Header = {
  label?: string | null
  title?: string | null
  description?: string | null
  align?: ('left' | 'center') | null
} | null

/**
 * The `content-block__header` pattern. Shared by most blocks, so it lives here
 * rather than being duplicated in each one.
 */
export function SectionHeader({ header }: { header?: Header }) {
  if (!header?.label && !header?.title && !header?.description) return null

  return (
    <div
      className="content-block__header"
      data-align={header.align ?? 'left'}
      style={header.align === 'center' ? { textAlign: 'center' } : undefined}
    >
      {header.label ? <span className="content-block__label">{header.label}</span> : null}
      {header.title ? <h2 className="content-block__title">{header.title}</h2> : null}
      {header.description ? <p className="content-block__desc">{header.description}</p> : null}
    </div>
  )
}
