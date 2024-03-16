import { CellStatus, CellType } from "../components/cell/CellType";

export const cleanTable = (table: CellType[][]) => {
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table.length; j++) {
      table[i][j].status = CellStatus.open;
      table[i][j].value = table[i][j].value === -1 ? table[i][j].value : 0;
    }
  }
};
