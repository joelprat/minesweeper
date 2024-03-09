import { CellStatus, CellType } from "../components/cell/CellType";

function dfs(
  table: CellType[][],
  visited: boolean[][],
  row: number,
  column: number
) {
  if (
    row >= 0 &&
    row < table.length &&
    column >= 0 &&
    column < table.length &&
    !visited[row][column]
  ) {
    if (table[row][column].value === -1) return;
    //console.log(`Position: ${row}, ${column}`);
    visited[row][column] = true;
    table[row][column].status = CellStatus.empty;
    if (table[row][column].value > 0) return;
    dfs(table, visited, row + 1, column);
    dfs(table, visited, row - 1, column);
    dfs(table, visited, row, column + 1);
    dfs(table, visited, row, column - 1);
  }
}

export function startDFS(table: CellType[][], x: number, y: number) {
  const newTable = [...table];
  const size = table.length;
  const visited: boolean[][] = Array.from({ length: size }, () =>
    Array(size).fill(false)
  );
  if (!visited[x][y] && table[x][y].value === 0) {
    dfs(newTable, visited, x, y);
  }

  return newTable;
}
