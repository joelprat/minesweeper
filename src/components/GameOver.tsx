import React from "react";
import { Heading, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function GameOver() {
  return (
    <Box
      w="100vw"
      h="100vh"
      position="absolute"
      zIndex={10}
      bg="rgba(0,0,0,0.8)"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      gap={5}
      css={{
        animation: "fadeIn 1.5s ease-in",
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <Heading textAlign="center">Game over... 😔</Heading>
      <Link to="/">
        <Button
          cursor="pointer"
          bg="rgba(255,0,0,0.8)"
          color="white"
          _hover={{}}
        >
          Play again
        </Button>
      </Link>
    </Box>
  );
}
