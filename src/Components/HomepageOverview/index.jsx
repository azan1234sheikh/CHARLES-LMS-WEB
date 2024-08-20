import React from 'react'
import { Text,Grid,GridItem,Link, Image, Flex, Heading, Button, Box } from "@chakra-ui/react";
export default function HomepageOverview({
    intermediateButton = "Intermediate",
    courseTitle = (
      <>
        Introduction Basic <br />
        Programming HTML & CSS
      </>
    ),
    coursePrice = "Rp150.000",
    discountedPrice = "Rp120.000",
    ratingText = "4,5",
    studentName = "Emerson Sipr",
    moduleCount = "5 Modul",
    courseDuration = "1h 30m",
    cardimage = "./cardimg.svg",
    ...props
  }) {
    return (
     
      <GridItem w="348px" >
      <Link href="#" _hover={{ textDecoration: 'none' }}>
        <Box position="relative" >
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
            <Flex bgImage={cardimage} w="294px" h="150px" alignSelf="stretch" p="10px" borderRadius="10px">
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
                Creating Beautiful Landing Pages
                In 1 Hr
              </Heading>
              <Text color="rgba(156, 156, 164, 1)">$120.000</Text>
              <Flex alignItems="center">
                <Flex gap="10px" flex={1} alignItems="center">
                  <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                  <Text alignSelf="end" color="black">{/* {mentorName} */} Emerson Sopr</Text>
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
  