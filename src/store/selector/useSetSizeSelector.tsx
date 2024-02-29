import { useStore } from "../Store";

export default function useSetSizeSelector() {
  const { updateSize } = useStore();

  const functionUpdateSize = (newSize: number) => {
    updateSize(newSize);
  };

  return functionUpdateSize;
}
