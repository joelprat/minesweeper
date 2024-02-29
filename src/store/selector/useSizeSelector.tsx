import { useStore } from "../Store";

export default function useSizeSelector() {
  const { size } = useStore();
  return size;
}
