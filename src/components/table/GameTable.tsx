import React from "react";
import useSizeSelector from "../../store/selector/useSizeSelector";
import {
  generateBombsCoords,
  generateFinalGameTable,
  updateValuesWithNumberOfBombs,
} from "./GameTableType";
import Cell from "../cell/Cell";
import { Box } from "@chakra-ui/react";

export default function GameTable() {
  const size = useSizeSelector();
  const bombsCoords = generateBombsCoords(size);
  const finalGameTable = generateFinalGameTable(size, bombsCoords);
  updateValuesWithNumberOfBombs(finalGameTable, size);

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="start"
      justifyContent="start"
      width="95%"
      height="95%"
    >
      {finalGameTable.map((column, cIndex) => (
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
