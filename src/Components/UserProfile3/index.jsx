import Ratingbar from "../Ratingbar/Ratingbar";
import { Text, Box, Heading, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function UserProfile3({
  userName = "Dadang Sumargo",
  userDescription = "The material is very easy to understand and lorem ipsum dolor sit amet consectetur adipiscing elit The material is very easy to understand and lorem.",
  ...props
}) {
  return (
    <Flex {...props} gap="12px" flex={1} flexDirection="column">
      <Flex gap="16px" alignSelf="stretch" justifyContent="center" alignItems="center">
        <Image
          src="images/img_rectangle_224.png"
          alt="Dadang Sumargo"
          h="38px"
          w="38px"
          fit="cover"
          borderRadius="4px"
        />
        <Flex gap="2px" flex={1} flexDirection="column" alignItems="start" justifyContent="center">
          <Heading size="paragraph_p14_semi_bold" as="h6">
            {userName}
          </Heading>
          <Box
            value={5}
            isEditable={true}
            color="#f2f2f2"
            activeColor="#ffc119"
            size={12}
            starCount={7}
            as={Ratingbar}
            display="flex"
            gap="10px"
          />
        </Flex>
      </Flex>
      <Text size="texts" color="neutral.ne60" w="100%" lineHeight="18px">
        {userDescription}
      </Text>
    </Flex>
  );
}
