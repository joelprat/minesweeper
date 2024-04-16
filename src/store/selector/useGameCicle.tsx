import { useStore } from "../Store";
import { startDFS } from "../../utils/DFS";
import { CellStatus } from "../../components/cell/CellType";
import { cleanTable } from "../../utils/CleanTable";

export default function useGameCicle() {
  const {
    size,
    table,
    updateTable,
    updateGameOver,
    updateNumberOfOpenedCells,
  } = useStore();

  const gameCicle = (x: number, y: number) => {
    const tableToUpdate = [...table];
    tableToUpdate[x][y].status = CellStatus.open;

    const counter = startDFS(tableToUpdate, x, y);
    updateNumberOfOpenedCells((prev) => {
      if (prev + counter === size * size - size) {
        alert("WIN");
      }
      return prev + counter;
    });
    updateTable(tableToUpdate);

    if (tableToUpdate[x][y].value === -1) {
      cleanTable(tableToUpdate);
      updateGameOver(true);
    }
  };

  return gameCicle;
}
