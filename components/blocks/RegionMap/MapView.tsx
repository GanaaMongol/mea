'use client'

import { useRef, useState } from 'react'

type Region = { pathId: string; name: string }

/**
 * Hover lifts one aimag out of the map; clicking it broadcasts the name so the
 * registry table on the same page can filter itself (see `TableFilters`).
 */
export function MapView({
  svg,
  regions,
  linkToTable,
}: {
  svg: string
  regions: Region[]
  linkToTable: boolean
}) {
  const wrapper = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<{ name: string; x: number; y: number } | null>(null)
  const [selected, setSelected] = useState<string | null>(null)

  const nameFrom = (target: EventTarget | null): string | null => {
    const element = target as HTMLElement | null
    return element?.getAttribute?.('data-region') ?? null
  }

  const select = (name: string | null) => {
    setSelected(name)
    // The highlight lives on the path itself so CSS can target just that one.
    wrapper.current?.querySelectorAll('path[data-region]').forEach((node) => {
      node.setAttribute('data-active', String(node.getAttribute('data-region') === name))
    })
    if (linkToTable) {
      window.dispatchEvent(new CustomEvent('mea:region', { detail: name }))
    }
  }

  return (
    <div className="region-map" ref={wrapper}>
      <div
        className="region-map__svg"
        data-selected={selected ?? undefined}
        // The markup is our own asset, read from public/ on the server.
        dangerouslySetInnerHTML={{ __html: svg }}
        onMouseMove={(event) => {
          const name = nameFrom(event.target)
          if (!name) return setHovered(null)
          const box = wrapper.current?.getBoundingClientRect()
          setHovered({
            name,
            x: event.clientX - (box?.left ?? 0),
            y: event.clientY - (box?.top ?? 0),
          })
        }}
        onMouseLeave={() => setHovered(null)}
        onClick={(event) => {
          const name = nameFrom(event.target)
          if (name) select(name === selected ? null : name)
        }}
      />

      {hovered ? (
        <span className="region-map__tip" style={{ left: hovered.x, top: hovered.y }}>
          {hovered.name}
        </span>
      ) : null}

      <div className="region-map__legend">
        {selected ? (
          <>
            <span className="region-map__selected">{selected}</span>
            <button type="button" className="region-map__clear" onClick={() => select(null)}>
              Цэвэрлэх
            </button>
          </>
        ) : (
          <span className="region-map__hint">
            Аймаг дээр дарж {regions.length ? 'жагсаалтыг шүүнэ' : 'сонгоно'}
          </span>
        )}
      </div>
    </div>
  )
}
