import { useStore } from "../Store";
import { startDFS } from "../../utils/DFS";
import { cleanTable } from "../../utils/CleanTable";

export default function useGameCicle() {
  const {
    size,
    table,
    updateTable,
    updateGameOver,
    updateNumberOfOpenedCells,
    updateWin,
  } = useStore();

  const gameCicle = (x: number, y: number) => {
    const tableToUpdate = [...table];

    const counter = startDFS(tableToUpdate, x, y);
    updateNumberOfOpenedCells((prev) => {
      if (prev + counter === size * size - size) {
        cleanTable(tableToUpdate);
        updateWin(true);
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
