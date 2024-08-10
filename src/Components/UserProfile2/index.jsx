import { Text, Image, Flex, Box, Heading, Button ,extendTheme } from "@chakra-ui/react";
import React from "react";


export default function UserProfile2({
  beginnerButton = "Beginner",
  courseTitle = "Creating Beautifull Landing Page in 1 Hour",
  mentorName = "Lincoln George",
  reviewText = "4,5",
  ...props
}) {
  return (
    <Flex
      {...props}
      gap="20px"
      bg="white"
      w="340px"
      h="360px"
      // w={{ base: "340px", md: "50%" }}
      // h={{ base: "362px", md: "auto" }}
      
      flexDirection="column"
      p={{ base: "20px", sm: "30px" }}
      borderRadius="16px"
    >
      <Flex bg="rgba(226, 226, 226, 0.674)" alignSelf="stretch" p="10px" borderRadius="10px">
        <Button
          size="sm"
          rightIcon={<Image src="images/img_settings_neutral_soft_grey.svg" alt="Settings" w="12px" h="12px" />}
          mt="100px"
          fontFamily="Plus Jakarta Sans"
          gap="6px"
          minW="90px"
          borderRadius="8px"
        >
          {beginnerButton}
        </Button>
      </Flex>
      <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
        <Heading size="heading3xl" as="h6" color="neutral.black.0" fontFamily="Plus Jakarta Sans" lineHeight="150%">
          {courseTitle}
        </Heading>
        <Flex alignItems="center">
          <Flex gap="10px" flex={1} alignItems="center">
            <Box h="30px" bg="blue_gray.100" w="30px" borderRadius="14px" />
            <Text alignSelf="end">{mentorName}</Text>
          </Flex>
          <Flex gap="4px" w="32%" justifyContent="center">
            <Flex flex={1} flexDirection="column" alignItems="end">
              <Image src="images/defaultNoData.png" alt="Lincoln George" h="14px" w="14px" />
            </Flex>
            <Text color="neutral.black.0" alignSelf="end">
              {reviewText}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
