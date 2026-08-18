import type { DataTableBlock as DataTableProps } from '@/payload-types'

import { SectionHeader } from '@/components/blocks/SectionHeader'
import { TableFilters } from './TableFilters'

export function DataTable({ variant, header, columns, rows, filters }: DataTableProps) {
  if (!columns?.length) return null

  /** membership-detail.html: a registry table with filter selects above it. */
  if (variant === 'list') {
    return (
      <section className="section section--warm">
        <div className="container">
          <div className="content-block">
            <SectionHeader header={header} />
            <TableFilters columns={columns} rows={rows ?? []} filters={filters ?? []} />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="hub-content">
      <div className="hub-content__inner">
        <SectionHeader header={header} />
        <div className={variant === 'plain' ? 'data-table' : 'data-table hub-region-table'}>
          <table>
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={column.id ?? index}>{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows?.map((row, rowIndex) => (
                <tr key={row.id ?? rowIndex}>
                  {columns.map((column, cellIndex) => (
                    <td key={column.id ?? cellIndex}>{row.cells?.[cellIndex]?.value ?? ''}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
