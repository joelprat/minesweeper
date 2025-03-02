import GameTable from "../components/table/GameTable";
import { useStore } from "../store/Store";
import GameOver from "../components/GameOver";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Win from "../components/Win";
import styled from "styled-components";

interface StyledPlayBoxProps {
  screenWidth: number;
}

const StyledPlayBox = styled.div<StyledPlayBoxProps>`
  max-width: 60rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.5);
  padding: 20px;

  @media (max-width: 750px) {
    height: ${(props) => props.screenWidth + "px"};
  }
`;

export default function Play() {
  const { table, isGameOver, isWin } = useStore();
  const nav = useNavigate();
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    if (table.length === 0) nav("/");

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [nav, table.length]);

  return (
    <StyledPlayBox screenWidth={screenWidth}>
      <GameTable table={table} />
      {isGameOver && <GameOver />}
      {isWin && <Win />}
    </StyledPlayBox>
  );
}
