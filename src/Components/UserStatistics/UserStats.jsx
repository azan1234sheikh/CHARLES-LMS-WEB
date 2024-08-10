import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import React from "react";

export default function UserStats({ peoplePresentText = "30 People Present", percentageText = "55%", ...props }) {
  return (
    <Flex {...props} gap="6px" flex={1} flexDirection="column" alignItems="center">
      <Flex gap="14px" alignSelf="stretch" justifyContent="center" alignItems="center">
        <Box h="16px" bg="success.sc20" w="16px" borderRadius="8px" />
        <Text fontSize="12px" lineHeight="14px" color="black.900" fontWeight="500">
          {peoplePresentText}
        </Text>
      </Flex>
      <Heading fontSize="12px" lineHeight="14px" color="black.900" fontWeight="500">
        {percentageText}
      </Heading>
    </Flex>
  );
}
