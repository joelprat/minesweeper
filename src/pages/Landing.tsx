import { Text, Heading, Select, Center, Box, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import useSetSizeSelector from "../store/selector/useSetSizeSelector";
import { Link } from "react-router-dom";
import useGenerateNewTable from "../store/selector/useGenerateNewTable";
import { useStore } from "../store/Store";

export default function Landing() {
  const { size } = useStore();
  const updateSize = useSetSizeSelector();
  const generateTable = useGenerateNewTable();

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
      <Heading as="h1" fontSize="4xl" fontWeight="bold">
        MINESWEEPER
      </Heading>
      <Text>Choose the size of the game:</Text>
      <Center>
        <Select
          isRequired
          onChange={(e) => updateSize(parseInt(e.target.value))}
          iconSize="0"
          size="lg"
          bg="transparent"
          border="1px solid black"
          outline="none"
          defaultValue={size}
        >
          <option value={4}>4x4</option>
          <option value={5}>5x5</option>
          <option value={6}>6x6</option>
          <option value={7}>7x7</option>
          <option value={8}>8x8</option>
        </Select>
      </Center>
      <Link to="/play" onClick={(e) => generateTable()}>
        <Button
          rightIcon={<ArrowForwardIcon />}
          bg="transparent"
          border="1px solid black"
          _hover={{ bg: "black", color: "white" }}
          transition="0.5s"
        >
          Start
        </Button>
      </Link>
    </Box>
  );
}
