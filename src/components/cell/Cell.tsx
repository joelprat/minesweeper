import React, { useState } from "react";
import { CellStatus, CellType } from "./CellType";
import { Box, Text } from "@chakra-ui/react";
import Flag from "../../assets/Flag";
import Bomb from "../../assets/Bomb";
import useGameCicle from "../../store/selector/useGameCicle";

export default function Cell(props: CellType) {
  const gameCicle = useGameCicle();
  const [state, setState] = useState<CellStatus>(props.status);
  const [isOpen, setIsOpen] = useState<Boolean>(
    props.status !== CellStatus.notOpen
  );
  const bgColors = {
    0: "rgba(0,0,0, 0.65)",
    1: "rgba(255,255,255,0.1)",
    2: "rgba(255, 45, 45,0.75)",
    3: "rgba(87, 210, 150, 0.85)",
  };

  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (state !== CellStatus.marked && state !== CellStatus.notOpen) {
      return;
    }
    setState(
      state === CellStatus.marked ? CellStatus.notOpen : CellStatus.marked
    );
  };

  const handleLeftClick = () => {
    if (state === CellStatus.marked || state === CellStatus.empty) {
      return;
    }

    setIsOpen(true);
    if (props.value !== undefined && props.value >= 0) {
      setState(CellStatus.empty);
    } else {
      setState(CellStatus.bomb);
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
      bg={bgColors[state]}
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="0.5s"
      _hover={{
        bg:
          isOpen || state === CellStatus.marked
            ? ""
            : "rgba(255,255,255, 0.25)",
        cursor: !isOpen ? "pointer" : "",
        boxShadow:
          state === CellStatus.notOpen
            ? "0px 0px 2.5px rgba(255,255,255, 0.75)"
            : "",
      }}
      boxShadow="0px 0px 15px rgba(0,0,0, 0.75)"
      onContextMenu={(e) => handleRightClick(e)}
      onClick={(e) => handleLeftClick()}
    >
      {state === CellStatus.marked && <Flag />}
      {state === CellStatus.bomb && <Bomb />}
      {props.value !== undefined && props.value > 0 && isOpen && (
        <Text fontSize="1rem">{props.value}</Text>
      )}
    </Box>
  );
}
