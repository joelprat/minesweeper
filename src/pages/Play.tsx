import { Box } from "@chakra-ui/react";
import GameTable from "../components/table/GameTable";

export default function Play() {
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
      <GameTable />
    </Box>
  );
}
