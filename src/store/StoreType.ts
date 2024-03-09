import { CellType } from "../components/cell/CellType";

export interface StoreType {
  size: number;
  updateSize: (newSize: number) => void;
  table: CellType[][];
  updateTable: (newTable: CellType[][]) => void;
}
