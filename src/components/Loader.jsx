import { Box, Spinner, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
      <Box transform={"scale(3)"}>
      <Spinner
  thickness='5px'
  speed='0.75s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
      </Box>
    </VStack>
  );
};

export default Loader;
