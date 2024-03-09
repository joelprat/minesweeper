import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { StoreType } from "./StoreType";
import { CellType } from "../components/cell/CellType";

const storeContext = createContext<StoreType | undefined>(undefined);

interface ContextProviderProps {
  children: React.ReactNode;
}

const initialTable: CellType[][] = [];

export function ContextProvider({ children }: ContextProviderProps) {
  const [size, setSize] = useState<number>(4);
  const [table, setTable] = useState<CellType[][]>(initialTable);

  const updateTable = useCallback((newTable: CellType[][]) => {
    setTable(newTable);
  }, []);

  const updateSize = useCallback((newSize: number) => {
    setSize(newSize);
  }, []);

  const contextValues: StoreType = useMemo(() => {
    return {
      size,
      updateSize,
      table,
      updateTable,
    };
  }, [size, updateSize, table, updateTable]);

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
