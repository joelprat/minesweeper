import React from "react";
import { CellStatus, CellType } from "./CellType";
import { Text } from "@chakra-ui/react";
import Flag from "../../assets/Flag";
import Bomb from "../../assets/Bomb";
import useGameCicle from "../../store/selector/useGameCicle";
import { useStore } from "../../store/Store";
import styled from "styled-components";

interface StyledCellBoxProps {
  value: number | undefined;
  status: CellStatus;
}

const StyledCellBox = styled.div<StyledCellBoxProps>`
  //padding: 1rem;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: ${(props) => {
    if (props.value === -1 && props.status === CellStatus.open) {
      return "rgba(255, 45, 45, 0.75)";
    }
    const bgColors = {
      0: "rgba(255, 255, 255, 0.1)",
      1: "rgba(0, 0, 0, 0.65)",
      2: "rgba(87, 210, 150, 0.85)",
      3: "rgba(255, 45, 45, 0.75)",
    };
    return bgColors[props.status];
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.75);
  cursor: ${(props) =>
    props.status === CellStatus.close ? "pointer" : "default"};

  &:hover {
    background-color: ${(props) =>
      props.status !== CellStatus.close ? "" : "rgba(255, 255, 255, 0.25)"};
    box-shadow: ${(props) =>
      props.status === CellStatus.close
        ? "0px 0px 2.5px rgba(255, 255, 255, 0.75)"
        : "0px 0px 15px rgba(0, 0, 0, 0.75)"};
  }

  @media (max-width: 500px) {
    border-radius: 5px;
  }
`;

export default function Cell(props: CellType) {
  const { updateTable } = useStore();
  const gameCicle = useGameCicle();

  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (props.status === CellStatus.open) return;
    updateTable((prev) => {
      const newTable = [...prev];
      newTable[props.x][props.y].status =
        props.status === CellStatus.marked
          ? CellStatus.close
          : CellStatus.marked;
      return newTable;
    });
  };

  const handleLeftClick = () => {
    if (
      props.status === CellStatus.marked ||
      props.status === CellStatus.open
    ) {
      return;
    }
    gameCicle(props.x, props.y);
  };

  return (
    <StyledCellBox
      value={props.value}
      status={props.status}
      onContextMenu={(e) => handleRightClick(e)}
      onClick={handleLeftClick}
    >
      {props.status === CellStatus.marked && <Flag />}
      {props.status === CellStatus.open && props.value === -1 && <Bomb />}
      {props.value !== undefined &&
        props.value > 0 &&
        props.status === CellStatus.open && (
          <Text fontSize="1rem">{props.value}</Text>
        )}
    </StyledCellBox>
  );
}
