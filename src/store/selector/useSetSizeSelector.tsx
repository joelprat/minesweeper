import { useStore } from "../Store";

export default function useSetSizeSelector() {
  const { size, updateSize } = useStore();

  const functionUpdateSize = (newSize: number) => {
    if (newSize === size) return;
    updateSize(newSize);
  };

  return functionUpdateSize;
}
