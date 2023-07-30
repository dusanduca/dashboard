import { TimeSheetRow } from "@/components/Home";
import { CellContext } from "@tanstack/react-table";

export function TaskTitle({
  row,
  column,
  getValue,
}: CellContext<TimeSheetRow, string>) {
  return <>{getValue()}</>;
}
