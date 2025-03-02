import Cell from "../cell/Cell";
import { CellType } from "../cell/CellType";
import styled from "styled-components";

interface GameTableProps {
  table: CellType[][];
}

const StyledTableBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 95%;
  height: 95%;
  gap: 12px;
`;

const StyledColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 12px;
`;

export default function GameTable(props: GameTableProps) {
  return (
    <StyledTableBox>
      {props.table.map((column, cIndex) => (
        <StyledColumnBox key={cIndex}>
          {column.map((cell, rIndex) => (
            <Cell {...cell} key={rIndex} />
          ))}
        </StyledColumnBox>
      ))}
    </StyledTableBox>
  );
}
