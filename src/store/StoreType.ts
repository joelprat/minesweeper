import { CellType } from "../components/cell/CellType";

export interface StoreType {
  size: number;
  updateSize: (newSize: number) => void;
  table: CellType[][];
  updateTable: React.Dispatch<React.SetStateAction<CellType[][]>>;
  isGameOver: boolean;
  isWin: boolean;
  updateGameOver: (game: boolean) => void;
  updateWin: (game: boolean) => void;
  numberOfOpenedCells: number;
  updateNumberOfOpenedCells: React.Dispatch<React.SetStateAction<number>>;
  resetStates: () => void;
}
