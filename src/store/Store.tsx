import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { StoreType } from "./StoreType";

const storeContext = createContext<StoreType | undefined>(undefined);

interface ContextProviderProps {
  children: React.ReactNode;
}

export function ContextProvider({ children }: ContextProviderProps) {
  const [size, setSize] = useState<number>(4);

  const updateSize = useCallback(
    (newSize: number) => {
      if (newSize === size) return;
      setSize(newSize);
    },
    [size]
  );

  const contextValues: StoreType = useMemo(() => {
    return {
      size,
      updateSize,
    };
  }, [size, updateSize]);

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
