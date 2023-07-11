import { NextPageWithLayout } from "@/pages/_app";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Layout from "@/layout/layout";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Task } from "../../../interface";
import { addedTask } from "../../../makeData";
import Select from "../Select";

const columnHelper = createColumnHelper<Task>();

const columns = [
  columnHelper.accessor("projectId", {
    cell: (info) => info.getValue(),
    header: () => <span>Project</span>,
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor("title", {
    cell: (info) => info.getValue(),
    header: () => <span>Task</span>,
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor("timeRecords", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("timeRecords", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("timeRecords", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("timeRecords", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("timeRecords", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("timeRecords", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("timeRecords", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  }),
];

const Home: NextPageWithLayout = () => {
  const [data, setData] = React.useState(() => [...addedTask]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.container_table}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={styles.th}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.td}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <Select />
    </div>
  );
};

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Home;
