import React, { createContext, useContext, useState } from "react";
import { StoreType } from "./StoreType";
import { CellType } from "../components/cell/CellType";

const storeContext = createContext<StoreType | undefined>(undefined);

interface ContextProviderProps {
  children: React.ReactNode;
}

const initialTable: CellType[][] = [];

export function ContextProvider({ children }: ContextProviderProps) {
  const [size, setSize] = useState<number>(8);
  const [table, setTable] = useState<CellType[][]>(initialTable);
  const [isGameOver, setGameOver] = useState<boolean>(false);
  const [isWin, setWin] = useState<boolean>(false);
  const [numberOfOpenedCells, setNumberOfOpenedCells] = useState<number>(0);

  const resetStates = () => {
    setSize(8);
    setTable(initialTable);
    setGameOver(false);
    setWin(false);
    setNumberOfOpenedCells(0);
  };

  const contextValues = {
    size,
    updateSize: setSize,
    table,
    updateTable: setTable,
    isGameOver,
    updateGameOver: setGameOver,
    numberOfOpenedCells,
    updateNumberOfOpenedCells: setNumberOfOpenedCells,
    isWin,
    updateWin: setWin,
    resetStates,
  };

  return (
    <storeContext.Provider value={contextValues}>
      {children}
    </storeContext.Provider>
  );
}

export function useStore() {
  const context = useContext(storeContext);
  if (!context) {
    throw new Error("useContext must be inside the provider");
  }

  return context;
}
