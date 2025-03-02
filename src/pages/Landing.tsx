import { Text, Heading, Select, Center, Box } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import useSetSizeSelector from "../store/selector/useSetSizeSelector";
import { Link } from "react-router-dom";
import useGenerateNewTable from "../store/selector/useGenerateNewTable";
import { useStore } from "../store/Store";
import { useEffect } from "react";
import styled from "styled-components";
import { HowToPlay } from "../components/HowToPlay";

const StyledContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledLandingBox = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid black;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default function Landing() {
  const { size, updateGameOver } = useStore();
  const updateSize = useSetSizeSelector();
  const generateTable = useGenerateNewTable();

  useEffect(() => {
    generateTable();
    updateGameOver(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer>
      <StyledLandingBox>
        <Heading>MINESWEEPER</Heading>
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
        <Link to="/play" onClick={() => generateTable()}>
          <StyledButton>
            Start <ArrowForwardIcon style={{ marginLeft: "8px" }} />
          </StyledButton>
        </Link>
      </StyledLandingBox>
      <HowToPlay />
    </StyledContainer>
  );
}
