import { Text, Box, Flex } from "@chakra-ui/react";
import React from "react";

export default function WebmessageTab() {
  return (
    <Box
      borderColor="neutral.soft_grey"
      borderBottomWidth="0.5px"
      borderStyle="solid"
      bg="neutral.white"
      
      p={{ base: "20px", sm: "24px" }}
    >
      <Flex gap="20px" alignItems="center" flexDirection={{ md: "row", base: "column" }}>
        <Box h="50px" bg="blue_gray.100" w="50px" borderRadius="24px" />
        <Flex gap="4px" flex={1} flexDirection="column" alignSelf={{ md: "auto", base: "stretch" }}>
          <Flex>
            <Text color="neutral.black.0" fontWeight={500}>
              Emerson Levin
            </Text>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <Box h="8px" bg="teal.400_01" w="8px" borderRadius="4px" />
            <Text size="texts" color="neutral.black.0">
              Online
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
