export interface CellType {
  status: CellStatus;
  value: number;
  x: number;
  y: number;
}

export enum CellStatus {
  notOpen,
  empty,
  bomb,
  marked,
}
