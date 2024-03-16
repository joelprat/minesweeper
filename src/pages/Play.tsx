import { Box } from "@chakra-ui/react";
import GameTable from "../components/table/GameTable";
import { useStore } from "../store/Store";
import GameOver from "../components/GameOver";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Play() {
  const { table, isGameOver } = useStore();
  const nav = useNavigate();

  useEffect(() => {
    if (table.length === 0) nav("/");
  }, [nav, table.length]);

  return (
    <Box
      w="45vw"
      h="45vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={5}
      bg="rgba(255, 255, 255, 0.2)"
      borderRadius={"15px"}
      boxShadow="0px 0px 25px rgba(255, 255, 255, 0.5)"
    >
      <GameTable table={table} />
      {isGameOver && <GameOver />}
    </Box>
  );
}
