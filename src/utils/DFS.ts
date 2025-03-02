import { CellStatus, CellType } from "../components/cell/CellType";

function dfs(
  table: CellType[][],
  visited: boolean[][],
  row: number,
  column: number,
  counter: { value: number }
) {
  if (
    row >= 0 &&
    row < table.length &&
    column >= 0 &&
    column < table[row].length &&
    !visited[row][column] &&
    table[row][column].status !== CellStatus.open
  ) {
    if (table[row][column].value === -1) return;
    visited[row][column] = true;
    table[row][column].status = CellStatus.open;
    counter.value++;
    if (table[row][column].value > 0) return;
    dfs(table, visited, row + 1, column, counter);
    dfs(table, visited, row - 1, column, counter);
    dfs(table, visited, row, column + 1, counter);
    dfs(table, visited, row, column - 1, counter);
  }
}

export function startDFS(table: CellType[][], x: number, y: number): number {
  const size = table.length;
  const visited: boolean[][] = Array.from({ length: size }, () =>
    Array(size).fill(false)
  );
  const counter = { value: 0 };
  dfs(table, visited, x, y, counter);
  return counter.value;
}
