import React from "react";
import { Heading, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useStore } from "../store/Store";

export default function Win() {
  const { resetStates } = useStore();

  return (
    <Box
      w="100vw"
      h="100vh"
      position="absolute"
      zIndex={10}
      bg="rgba(0,0,0,0.6)"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      gap={5}
      css={{
        animation: "fadeIn 2.5s ease-in",
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <Heading textAlign="center">You won! 🥳</Heading>
      <Link to="/">
        <Button
          cursor="pointer"
          bg="rgba(0,255,0,0.8)"
          color="white"
          _hover={{}}
          onClick={resetStates}
        >
          Play again
        </Button>
      </Link>
    </Box>
  );
}
