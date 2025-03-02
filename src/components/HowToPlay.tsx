import { Box, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react";
import styled from "styled-components";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  text-align: justify;
  gap: 1rem;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 80%;
    gap: 1rem;
  }
`;

export const HowToPlay = () => {
  return (
    <StyledBox>
      <div>
        <Heading size="lg">What is Minesweeper?</Heading>
        <Text>
          Minesweeper is a classic puzzle game where the objective is to clear a
          grid without detonating hidden mines. The game consists of a grid of
          covered squares, some of which contain mines.
        </Text>
      </div>
      <div>
        <Heading size="lg">How to play?</Heading>
        <OrderedList as="ol" spacing="0.75rem">
          <ListItem>
            <b>Starting the game</b>
            <br />
            Click on any square to begin. If you click on a mine, you lose
            instantly. Don't worry!! Just play again 😁.
          </ListItem>
          <ListItem>
            <b>Revealing numbers</b> <br /> If the square is safe, it will
            display a number indicating how many mines are adjacent to it
            (including diagonals). If a cell doesn't have a number, it means
            that it has no bombs adjacent to it.
          </ListItem>
          <ListItem>
            <b>Using logic</b> <br /> Use the numbers to deduce where the mines
            are.
          </ListItem>
          <ListItem>
            <b>Clearing the board</b> <br /> The game is won when all safe
            squares are revealed. (Mines don't need to be flagged in order to
            finish the game).
          </ListItem>
          {/*           <ListItem>
            <b>Marking mines</b>
            <br /> Right-click (or use the flag option) to mark suspected mines.
          </ListItem> */}
        </OrderedList>
      </div>
      <div>
        <Heading as="h3" size="lg">
          Tips
        </Heading>
        <Text>
          Using right-click (on computer), you can flag suspected mines.. 🚩
          This can help you to detect them, but be careful, a wrong marked mine
          can lead you to mistakes!
        </Text>
      </div>
    </StyledBox>
  );
};
