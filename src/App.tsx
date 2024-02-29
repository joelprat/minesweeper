import "./App.css";
import Directions from "./utils/Directions";
import { ChakraProvider } from "@chakra-ui/react";
import { ContextProvider } from "./store/Store";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <ChakraProvider>
          <Directions />
        </ChakraProvider>
      </div>
    </ContextProvider>
  );
}

export default App;
