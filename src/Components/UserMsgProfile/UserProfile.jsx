import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";


const UserProfile = ({
  userName = "Emerson Levin",
  lastActive = "2 m Ago",
  userStatus = "And the easiest of these things is...",
  ...props
}) => {
  return (
    <Flex {...props} flex={1} alignItems="center" p="20px">
    <Flex gap="20px" w="100%" alignItems="center">
      <Box h="50px" bg="rgba(217, 217, 217, 1)" w="50px" borderRadius="24px" />
      <Flex gap="4px" flex={1} flexDirection="column">
        <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap" gap="20px">
          <Text color="neutral.black.0" fontWeight={500}>
            {userName}
          </Text>
          <Text size="texts">{lastActive}</Text>
        </Flex>
        <Flex gap="18px" justifyContent="center" alignItems="center">
          <Text size="texts" color="neutral.black.0">
            {userStatus}
          </Text>
          <Box h="8px" bg="secondary.red" w="8px" borderRadius="4px" />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
  )
}

export default UserProfile
