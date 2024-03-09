import {
  generateBombsCoords,
  generateFinalGameTable,
  updateValuesWithNumberOfBombs,
} from "../../components/table/GameTableType";
import useSizeSelector from "./useSizeSelector";
import { useStore } from "../Store";

export default function useGenerateNewTable() {
  const size = useSizeSelector();
  const { updateTable } = useStore();

  const generateNewTable = () => {
    const bombsCoords = generateBombsCoords(size);
    const table = generateFinalGameTable(size, bombsCoords);
    updateValuesWithNumberOfBombs(table, size);
    updateTable(table);
  };

  return generateNewTable;
}
