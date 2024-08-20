import { Text, Image,Grid,GridItem,Link, Flex, Heading, Button, Box } from "@chakra-ui/react";
import React from "react";

export default function CourseOverview1({
  settingsButton = "Intermediate",
  courseTitle = (
    <>
      Introduction Basic <br />
      Programming HTML & CSS
    </>
  ),
  pricerp150000 = "Rp150.000",
  pricerp120000 = "Rp120.000",
  reviewScore = "4.5",
  studentName = "Emerson Sipr",
  moduleCount = "5 Modul",
  courseDuration = "1h 30m",
  cardimage = "./cardimg.svg",
  ...props
}) {
  return (
    <GridItem w="348px" >
    <Link href="#" _hover={{ textDecoration: 'none' }}>
      <Box position="relative" top="12px">
        <Flex
       
          gap="20px"
          bg="white"
          w="340px"
          h="360px"
          flexDirection="column"
          p={{ base: "20px", sm: "30px" }}
          borderRadius="16px"
          _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
          transition="all 0.2s ease"
        >
          {/* Content of the card */}
          <Flex bgImage={cardimage} alignSelf="stretch" p="10px" borderRadius="10px">
            <Button
              size="sm"
              rightIcon={<Image src="./range (2).svg" alt="Settings" w="12px" h="12px" />}
              mt="100px"
              fontFamily="Plus Jakarta Sans"
              gap="6px"
              minW="90px"
              borderRadius="8px"
            >
              {/* {beginnerButton} */}
              Intermediate
            </Button>
          </Flex>
          <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
            <Heading size="heading3xl" as="h6" color="black" fontFamily="Plus Jakarta Sans" lineHeight="150%">
              {/* {courseTitle} */}
              {courseTitle}
            </Heading>
            <Flex gap="4px" flex={1} justifyContent="center">
                  <Flex>
                    <Text
                       size="textmd"
                       color="deep_orange.600"
                       fontFamily="Plus Jakarta Sans"
                      alignSelf="end"
                       textDecoration="line-through"
                     >
                       {pricerp150000}
                     </Text>
                   </Flex>
                   <Flex flex={1} px="4px">
                     <Text size="textmd" color="neutral.dark_grey" fontFamily="Plus Jakarta Sans" alignSelf="end">
                     {pricerp120000}
                    </Text>
                  </Flex>
                 </Flex>
            <Flex alignItems="center">
              <Flex gap="10px" flex={1} alignItems="center">
                <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                <Text alignSelf="end" color="black"> Emerson Sopr</Text>
              </Flex>
              <Flex gap="4px" w="32%" justifyContent="center">
                <Flex flex={1} flexDirection="column" alignItems="end">
                <Image src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                </Flex>
                <Text color="black" alignSelf="end">
                  {/* {reviewText} */}
                  4.5
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Link>
  </GridItem>
  );
}
