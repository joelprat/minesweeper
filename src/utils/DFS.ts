import { CellStatus, CellType } from "../components/cell/CellType";

function dfs(
  table: CellType[][],
  visited: boolean[][],
  row: number,
  column: number,
  counter: { value: number } // Pasar contador como referencia
) {
  if (
    row >= 0 &&
    row < table.length &&
    column >= 0 &&
    column < table[row].length && // Corregir el chequeo de límites
    !visited[row][column] &&
    table[row][column].status !== CellStatus.open
  ) {
    if (table[row][column].value === -1) return; // No necesitamos devolver contador aquí
    visited[row][column] = true;
    table[row][column].status = CellStatus.open;
    counter.value++; // Incrementar el contador dentro del objeto
    if (table[row][column].value > 0) return; // No necesitamos devolver contador aquí
    dfs(table, visited, row + 1, column, counter); // No necesitamos asignar contador aquí
    dfs(table, visited, row - 1, column, counter); // No necesitamos asignar contador aquí
    dfs(table, visited, row, column + 1, counter); // No necesitamos asignar contador aquí
    dfs(table, visited, row, column - 1, counter); // No necesitamos asignar contador aquí
  }
}

export function startDFS(table: CellType[][], x: number, y: number): number {
  const size = table.length;
  const visited: boolean[][] = Array.from({ length: size }, () =>
    Array(size).fill(false)
  );
  const counter = { value: 0 }; // Inicializar contador como objeto
  dfs(table, visited, x, y, counter);
  return counter.value; // Devolver el valor del contador
}
