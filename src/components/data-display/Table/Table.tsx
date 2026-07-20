import type { TableProps } from "./Table.types";

export function Table<T>({
  columns,
  data,
  emptyMessage = "No data available",
  className = "",
}: TableProps<T>) {
  return (
    <div className={["w-full", "overflow-x-auto", className].filter(Boolean).join(" ")}>
      <table
        className="
        w-full
        border-collapse
        text-sm
        "
      >
        <thead>
          <tr
            className="
            border-b
            border-neutral-200
            bg-neutral-50
            "
          >
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="
                px-4
                py-3
                text-left
                font-semibold
                text-neutral-700
                "
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="
                px-4
                py-6
                text-center
                text-neutral-500
                "
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={index}
                className="
                border-b
                border-neutral-100
                hover:bg-neutral-50
                "
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="
                    px-4
                    py-3
                    text-neutral-700
                    "
                  >
                    {column.render ? column.render(row[column.key], row) : String(row[column.key])}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
