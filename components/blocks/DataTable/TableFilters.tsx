'use client'

import { useEffect, useMemo, useState } from 'react'

import type { DataTableBlock } from '@/payload-types'

type Columns = NonNullable<DataTableBlock['columns']>
type Rows = NonNullable<DataTableBlock['rows']>
type Filters = NonNullable<DataTableBlock['filters']>

const cellValue = (row: Rows[number], index: number) => row.cells?.[index]?.value ?? ''

/** Client-side filtering: each select narrows the rows by one column's value. */
export function TableFilters({
  columns,
  rows,
  filters,
  regionColumn,
}: {
  columns: Columns
  rows: Rows
  filters: Filters
  /** 1-based column the map's aimag name is matched against. */
  regionColumn?: number | null
}) {
  const [selected, setSelected] = useState<Record<number, string>>({})
  const [region, setRegion] = useState<string | null>(null)

  // The map block on the same page broadcasts the aimag the reader picked.
  useEffect(() => {
    const onRegion = (event: Event) => setRegion((event as CustomEvent<string | null>).detail)
    window.addEventListener('mea:region', onRegion)
    return () => window.removeEventListener('mea:region', onRegion)
  }, [])

  const options = useMemo(() => {
    const map: Record<number, string[]> = {}
    filters.forEach((filter) => {
      const index = (filter.column ?? 1) - 1
      map[index] = Array.from(
        new Set(rows.map((row) => cellValue(row, index)).filter(Boolean)),
      ).sort((a, b) => a.localeCompare(b, 'mn'))
    })
    return map
  }, [filters, rows])

  const regionIndex = (regionColumn ?? columns.length) - 1
  const visible = rows.filter(
    (row) =>
      Object.entries(selected).every(
        ([index, value]) => !value || cellValue(row, Number(index)) === value,
      ) &&
      // The map filters by substring: an address holds the aimag name inside it.
      (!region || cellValue(row, regionIndex).toLowerCase().includes(region.toLowerCase())),
  )

  return (
    <>
      <div className="filter-row">
        {filters.map((filter, index) => {
          const column = (filter.column ?? 1) - 1
          return (
            <div className="filter-field" key={filter.id ?? index}>
              <label className="filter-field__label" htmlFor={`filter-${index}`}>
                {filter.label}
              </label>
              <select
                id={`filter-${index}`}
                className="filter-field__select"
                value={selected[column] ?? ''}
                onChange={(event) =>
                  setSelected((current) => ({ ...current, [column]: event.target.value }))
                }
              >
                <option value="">Бүгд</option>
                {(options[column] ?? []).map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )
        })}
      </div>

      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={column.id ?? index}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((row, rowIndex) => (
              <tr key={row.id ?? rowIndex}>
                {columns.map((_, cellIndex) => (
                  <td key={cellIndex}>{cellValue(row, cellIndex)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {visible.length === 0 ? (
          <p className="data-table__empty">
            {region ? `«${region}»-д бүртгэлтэй чуулган олдсонгүй.` : 'Илэрц олдсонгүй.'}
          </p>
        ) : null}
      </div>
    </>
  )
}
