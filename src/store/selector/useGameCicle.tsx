import { useStore } from "../Store";
import { startDFS } from "../../utils/DFS";
import { CellStatus } from "../../components/cell/CellType";
import { cleanTable } from "../../utils/CleanTable";

export default function useGameCicle() {
  const {
    table,
    updateTable,
    updateGameOver,
    numberOfOpenedCells,
    updateNumberOfOpenedCells,
  } = useStore();

  const gameCicle = (x: number, y: number) => {
    const tableToUpdate = [...table];
    tableToUpdate[x][y].status = CellStatus.open;
    startDFS(tableToUpdate, x, y);
    updateTable(tableToUpdate);

    if (tableToUpdate[x][y].value === -1) {
      cleanTable(tableToUpdate);
      updateGameOver(true);
    }
  };

  return gameCicle;
}
