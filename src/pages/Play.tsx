import GameTable from "../components/table/GameTable";
import { useStore } from "../store/Store";
import GameOver from "../components/GameOver";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Win from "../components/Win";
import styled from "styled-components";

const StyledPlayBox = styled.div`
  max-width: 60rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.5);
  padding: 20px;

  @media (max-width: 750px) {
    height: 100vw;
  }
`;

export default function Play() {
  const { table, isGameOver, isWin } = useStore();
  const nav = useNavigate();

  useEffect(() => {
    if (table.length === 0) nav("/");
  }, [nav, table.length]);

  return (
    <StyledPlayBox>
      <GameTable table={table} />
      {isGameOver && <GameOver />}
      {isWin && <Win />}
    </StyledPlayBox>
  );
}
