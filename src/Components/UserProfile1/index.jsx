import { Heading, Image, Flex } from "@chakra-ui/react";
import React from "react";

export default function UserProfile1({
  userImage = "./img_63c02e556c48fe4.png",
  userName = "Andrew Smith",
  userLocation = "New York, NY",
  userDescription = "Blandit pretium sit nulla feugiat mattis in arcu mauris urna porttitor dolor sit amet consectur dolor sitele.",
  ...props
}) {
  return (
    <Flex
      {...props}
      gap="22px"
      borderColor="gray.200"
      borderWidth="1px"
      borderStyle="solid"
      bg="neutral.white"
      boxShadow="xs"
      w={{ md: "20%", base: "100%" }}
      flexDirection="column"
      alignItems="center"
      px={{ md: "26px", base: "20px" }}
      py={{ base: "20px", sm: "40px" }}
      borderRadius="24px"
    >
      <Flex ml="6px" alignSelf="stretch" justifyContent="center" alignItems="center">
        <Flex gap="12px" flex={1} alignItems="center" px="8px">
          <Image src={userImage} alt="Andrew Smith" h="64px" w="64px" fit="cover" borderRadius="32px" />
          <Flex gap="4px" flex={1} flexDirection="column" alignItems="start" justifyContent="center" px="8px">
            <Heading size="heading3xl" as="h6" color="gray.900" fontFamily="Inter">
              {userName}
            </Heading>
            <Heading size="heading3xl" as="h6" color="gray.800" fontFamily="Inter" fontWeight={600}>
              {userLocation}
            </Heading>
          </Flex>
        </Flex>
        <Image src="./img_trash.svg" alt="Andrew Smith" h="32px" w="32px" />
      </Flex>
      <Heading size="textlg" as="h6" color="gray.800" mb="8px" w="96%" lineHeight="30px">
        {userDescription}
      </Heading>
    </Flex>
  );
}
