import { CellStatus, CellType } from "../cell/CellType";
import { startDFS } from "../../utils/DFS";

export const generateFinalGameTable = (
  size: number,
  bombsCoords: number[][]
): CellType[][] => {
  return Array.from({ length: size }).map((_, rIndex) => {
    return Array.from({ length: size }).map((_, cIndex) => {
      const value = bombsCoords.some(([x, y]) => x === rIndex && y === cIndex)
        ? -1
        : 0;
      const cell: CellType = {
        status: CellStatus.notOpen,
        value: value,
        x: rIndex,
        y: cIndex,
      };

      return cell;
    });
  });
};

export const generateBombsCoords = (size: number) => {
  const coords = new Set<string>();
  while (coords.size < size) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);
    const coordString = `${x},${y}`;

    if (!coords.has(coordString)) {
      console.log(coordString);
      coords.add(coordString);
    }
  }
  return Array.from(coords).map((coord) => coord.split(",").map(Number));
};

export const updateValuesWithNumberOfBombs = (
  table: CellType[][],
  size: number
) => {
  table.map((row, rIndex) => {
    row.map((_, cIndex) => {
      const cell = table[rIndex][cIndex];
      if (cell && cell.value !== -1) {
        const numberOfBombs = calculateNumberOfBombs(
          rIndex,
          cIndex,
          size,
          table
        );
        cell.value = numberOfBombs;
      }
    });
  });
};

const calculateNumberOfBombs = (
  x: number,
  y: number,
  size: number,
  table: CellType[][]
) => {
  let counter = 0;
  const offsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  offsets.forEach((offset) => {
    const newX = x + offset[0];
    const newY = y + offset[1];

    if (
      newX >= 0 &&
      newX < size &&
      newY >= 0 &&
      newY < size &&
      table[newX][newY].value === -1
    ) {
      counter++;
    }
  });

  return counter;
};

export const gameCicle = (table: CellType[][], x: number, y: number) => {
  if (table[x][y].value === -1) return false;

  if (table[x][y].value === 0) {
    startDFS(table, x, y);
  }
};
