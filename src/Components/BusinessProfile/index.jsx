import { Button, Image, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function BusinessProfile({
  businessImage = "./img_div.svg",
  businessTitle = "Business",
  businessDescription = "Lacinia fermen tum fusce felis placerat amet bibendum rhoncus cursus doloril.",
  exploreCoursesButton = "Explore Courses",
  twentyfour = "24",
  ...props
}) {
  return (
    <Flex {...props} gap="30px" w="100%" alignItems="center" flexDirection={{ base: "column", sm: "row" }}>
      <Image src={businessImage} alt="Business" h="174px" w="174px" borderRadius="24px" />
      <Flex flex={1} flexDirection="column" alignItems="start" alignSelf={{ base: "stretch", sm: "auto" }}>
        <Heading size="h3" as="h5" color="gray.900">
          {businessTitle}
        </Heading>
        <Heading as="h6" color="gray.800" mt="14px" w="100%" lineHeight="24px">
          {businessDescription}
        </Heading>
        <Flex mt="30px" mr="12px" alignSelf="stretch" justifyContent="space-between" alignItems="center" gap="20px">
          <Button
            size="md"
            rightIcon={<Image src="./img_full_arrow_right.svg" alt="Full Arrow Right" w="20px" h="20px" />}
            fontWeight={500}
            borderColor="neutral.soft_grey"
            borderWidth="1px"
            borderStyle="solid"
            minW="152px"
            borderRadius="10px"
          >
            {exploreCoursesButton}
          </Button>
          <Button
            size="md"
            fontWeight={700}
            gap="4px"
            borderColor="gray.900"
            borderWidth="1px"
            borderStyle="solid"
            minW="104px"
            borderRadius="18px"
          >
            {twentyfour}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
