import { TimesheetRow } from "@/components/Home";
import { CellContext } from "@tanstack/react-table";

export function TaskTitle({
  row,
  column,
  getValue,
}: CellContext<TimesheetRow, string>) {
  return <>{getValue()}</>;
}
