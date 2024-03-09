import React from "react";
import Cell from "../cell/Cell";
import { Box } from "@chakra-ui/react";
import { CellType } from "../cell/CellType";

interface GameTableProps {
  table: CellType[][];
}

export default function GameTable(props: GameTableProps) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="start"
      justifyContent="start"
      width="95%"
      height="95%"
    >
      {props.table.map((column, cIndex) => (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          key={cIndex}
          marginLeft={3}
          marginRight={3}
          w="25%"
          h="100%"
        >
          {column.map((cell, rIndex) => (
            <Cell {...cell} />
          ))}
        </Box>
      ))}
    </Box>
  );
}
