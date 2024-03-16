import {
  generateBombsCoords,
  generateFinalGameTable,
  updateValuesWithNumberOfBombs,
} from "../../components/table/GameTableType";
import { useStore } from "../Store";

export default function useGenerateNewTable() {
  const { updateTable, size } = useStore();

  const generateNewTable = () => {
    const bombsCoords = generateBombsCoords(size);
    const table = generateFinalGameTable(size, bombsCoords);
    updateValuesWithNumberOfBombs(table, size);
    updateTable(table);
  };

  return generateNewTable;
}
