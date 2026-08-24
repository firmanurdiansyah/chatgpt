import * as React from "react";
import { cx } from "@ui-platform/components";

export interface Column<T> { key: string; header: string; cell?: (row: T) => React.ReactNode; sortable?: boolean; }
export interface DataTableProps<T extends object> { columns: readonly Column<T>[]; rows: readonly T[]; getRowId: (row: T) => string; empty?: React.ReactNode; }

export function DataTable<T extends object>({ columns, rows, getRowId, empty = "No records found." }: DataTableProps<T>) {
  return <div className="ui-data-table__wrapper" role="region" tabIndex={0} aria-label="Data table"><table className="ui-data-table"><thead><tr>{columns.map(column => <th key={column.key} scope="col">{column.header}</th>)}</tr></thead><tbody>{rows.length ? rows.map(row => <tr key={getRowId(row)}>{columns.map(column => <td key={column.key}>{column.cell ? column.cell(row) : String((row as Record<string, unknown>)[column.key] ?? "")}</td>)}</tr>) : <tr><td colSpan={columns.length}><div className="ui-data-table__empty">{empty}</div></td></tr>}</tbody></table></div>;
}

export function FilterBar({ children }: { children: React.ReactNode }) { return <div className={cx("ui-filter-bar")}>{children}</div>; }
