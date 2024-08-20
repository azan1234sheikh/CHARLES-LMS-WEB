import { Heading, Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function UserProfile({
  userImage = "./public/img_flutter_logo_202_svg.svg",
  userRole = "App Developer",
  completionPercentage = "50%",
  ...props
}) {
  return (
    <Flex {...props} gap="10px" flex={1} justifyContent="center" alignItems="center">
      <Image src={userImage} alt="App Developer" h="22px" alignSelf="end" />
      <Flex flex={1} flexDirection="column" alignItems="start">
        <Heading size="headingxs" as="h6" fontSize="9.47px">
          {userRole}
        </Heading>
        <Flex gap="6px" alignSelf="stretch" justifyContent="center" alignItems="center">
          <Flex alignSelf="end" bg="blue.50" flex={1} borderRadius="3px">
            <Box h="6px" bg="indigo.a700" w="50%" borderRadius="3px" />
          </Flex>
          <Heading size="textxs" as="h6" color="gray.500" fontSize="8.27px">
            {completionPercentage}
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}
