import { Heading, Text, Flex, Box } from "@chakra-ui/react";
import React from "react";

export default function UserStatistics1({ passPeopleText = "50 Pass People", percentageText = "55%", ...props }) {
  return (
    <Flex {...props} gap="14px" flex={1} alignItems="start">
      <Box h="16px" bg="rgba(40, 168, 69, 1)" w="16px" borderRadius="8px" />
      <Flex gap="6px" alignSelf="center" flex={1} flexDirection="column" alignItems="start">
        <Text size="texts" color="black.900" fontWeight={500}>
          {passPeopleText}
        </Text>
        <Heading size="headings_h4_bold" as="h5">
          {percentageText}
        </Heading>
      </Flex>
    </Flex>
  );
}
