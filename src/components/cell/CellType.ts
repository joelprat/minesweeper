export interface CellType {
  status: CellStatus;
  value: number; //bomb -1
  x: number;
  y: number;
}

export enum CellStatus {
  open,
  close,
  marked,
}
