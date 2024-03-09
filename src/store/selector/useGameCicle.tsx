import { useStore } from "../Store";
import { startDFS } from "../../utils/DFS";

export default function useGameCicle() {
  const { table, updateTable } = useStore();

  const gameCicle = (x: number, y: number) => {
    const newTable = startDFS(table, x, y);
    updateTable(newTable);
  };

  return gameCicle;
}
