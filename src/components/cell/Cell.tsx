import React from "react";
import { CellStatus, CellType } from "./CellType";
import { Box, Text } from "@chakra-ui/react";
import Flag from "../../assets/Flag";
import Bomb from "../../assets/Bomb";
import useGameCicle from "../../store/selector/useGameCicle";
import { useStore } from "../../store/Store";

export default function Cell(props: CellType) {
  const { updateTable } = useStore();
  const gameCicle = useGameCicle();
  const bgColors = {
    0: "rgba(255,255,255,0.1)",
    1: "rgba(0,0,0, 0.65)",
    2: "rgba(87, 210, 150, 0.85)",
    3: "rgba(255, 45, 45,0.75)",
  };

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
    <Box
      p={4}
      w="100%"
      h="100%"
      margin={3}
      borderRadius={15}
      bg={
        props.value === -1 && props.status === CellStatus.open
          ? bgColors[3]
          : bgColors[props.status]
      }
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="0.5s"
      _hover={{
        bg: props.status !== CellStatus.close ? "" : "rgba(255,255,255, 0.25)",
        cursor: props.status === CellStatus.close ? "pointer" : "",
        boxShadow:
          props.status === CellStatus.close
            ? "0px 0px 2.5px rgba(255,255,255, 0.75)"
            : "",
      }}
      boxShadow="0px 0px 15px rgba(0,0,0, 0.75)"
      onContextMenu={(e) => handleRightClick(e)}
      onClick={(e) => handleLeftClick()}
    >
      {props.status === CellStatus.marked && <Flag />}
      {props.status === CellStatus.open && props.value === -1 && <Bomb />}
      {props.value !== undefined &&
        props.value > 0 &&
        props.status === CellStatus.open && (
          <Text fontSize="1rem">{props.value}</Text>
        )}
    </Box>
  );
}
