import { useStore } from "../Store";

export default function useTableSelector() {
  const { table } = useStore();
  return table;
}
