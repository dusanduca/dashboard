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
import {
  daysInWeek,
  eachDayOfInterval,
  endOfWeek,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { Weekday, Date } from "../../../interface";
import { TaskTitle } from "../TaskTimesheet/TaskTitle";
import { Weekdays } from "../TaskTimesheet/Weekdays";




export interface TimeSheetRow {
  projectId: string;
  taskId: string;
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  sun: number;
}

const columnHelper = createColumnHelper<TimeSheetRow>();

const columns = [
  columnHelper.accessor("projectId", {
    cell: (info) => info.getValue(),
    header: () => <span>Project</span>,
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor("taskId", {
    cell: (info) => info.getValue(),
    header: () => <span>Task</span>,
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor("mon", {
    header: (props) => Weekdays,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("tue", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("wed", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("thu", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("fri", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("sat", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("sun", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

const Home: NextPageWithLayout = () => {
  const [data, setData] = React.useState([...addedTask]);
  const today = startOfToday();
  const newDays = eachDayOfInterval({
    start: startOfWeek(today),
    end: endOfWeek(today),
  });
  console.log(newDays);

  const mockData: TimeSheetRow[] = [
    {
      projectId: "project1",
      taskId: "task1",
      mon: 0,
      tue: 1,
      wed: 3,
      thu: 4,
      fri: 5,
      sat: 6,
      sun: 7,
    },
  ];

  const table = useReactTable({
    data: mockData,
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