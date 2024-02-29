export interface CellType {
  status: CellStatus;
  value: number;
}

export enum CellStatus {
  notOpen,
  empty,
  bomb,
  marked,
}
