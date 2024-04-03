"use client";

import { Fragment } from "react";
import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "./button";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";
import { Input } from "./input";

export interface DataTableToolbarProps<TData, TValue> {
  table: Table<TData>;
  search?: {
    label?: string;
    id: string;
  };
  filters?: (Omit<DataTableFacetedFilter<TData, TValue>, "column"> & {
    id: string;
  })[];

  actions?: ((props: {
    rows: TData[];
    clear: () => void;
  }) => React.ReactNode)[];

  hideViewOptions?: boolean;
}

export function DataTableToolbar<TData, TValue>({
  table,
  search,
  filters = [],
  hideViewOptions = false,
  actions = [],
}: DataTableToolbarProps<TData, TValue>) {
  const selection = table
    .getFilteredSelectedRowModel()
    .rows.map((row) => row.original);
  const isFiltered =
    table.getPreFilteredRowModel().rows.length >
    table.getFilteredRowModel().rows.length;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {search && (
          <Input
            placeholder={search.label || "Search..."}
            value={
              (table.getColumn(search.id)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(search.id)?.setFilterValue(event.target.value)
            }
            className="h-9 w-[150px] bg-background lg:w-[250px]"
          />
        )}

        {!!filters.length &&
          filters.map(({ id, ...filter }, index) => (
            <Fragment key={index}>
              {table.getColumn(id) && (
                <DataTableFacetedFilter
                  column={table.getColumn(id)}
                  {...filter}
                />
              )}
            </Fragment>
          ))}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex gap-4">
        {!!actions.length &&
          actions.map((Action: any, index) => (
            <Action
              key={index}
              rows={selection || []}
              clear={() => table.resetRowSelection()}
            />
          ))}

        {!hideViewOptions && <DataTableViewOptions table={table} />}
      </div>
    </div>
  );
}
