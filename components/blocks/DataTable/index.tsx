import type { DataTableBlock as DataTableProps } from '@/payload-types'

export function DataTable({ variant, columns, rows }: DataTableProps) {
  if (!columns?.length) return null

  return (
    <section className="hub-content">
      <div className="hub-content__inner">
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
