import React from 'react'
import { Text, Image, Flex, Heading, Button, Box } from "@chakra-ui/react";
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
    ...props
  }) {
    return (
      <Flex {...props} w="100%" flexDirection="column">
        <Box
          bg="neutral.white"
          alignSelf="stretch"
          px={{ base: "20px", sm: "26px" }}
          py={{ base: "20px", sm: "30px" }}
          borderRadius="16px"
        >
          <Flex gap="20px" flexDirection="column">
            <Flex
              h="150px"
              bgImage="url(./public/img_photo.png)"
              bgSize="cover"
              bgRepeat="no-repeat"
              alignItems="end"
              p="10px"
              borderRadius="10px"
            >
              <Button
                rightIcon={<Image src="./public/img_settings.svg" alt="Settings" w="12px" h="12px" />}
                mt="100px"
                gap="6px"
                minW="112px"
                borderRadius="8px"
              >
                {intermediateButton}
              </Button>
            </Flex>
            <Flex gap="10px" flexDirection="column" alignItems="center">
              <Heading size="heading3xl" as="h6" color="neutral.black.0" fontFamily="Plus Jakarta Sans" lineHeight="150%">
                {courseTitle}
              </Heading>
              <Flex alignSelf="stretch">
                <Flex gap="4px" flex={1} justifyContent="center">
                  <Flex>
                    <Text
                      size="textmd"
                      color="deep_orange.600"
                      fontFamily="Plus Jakarta Sans"
                      alignSelf="end"
                      textDecoration="line-through"
                    >
                      {coursePrice}
                    </Text>
                  </Flex>
                  <Flex flex={1} px="4px">
                    <Text size="textmd" color="neutral.dark_grey" fontFamily="Plus Jakarta Sans" alignSelf="end">
                      {discountedPrice}
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap="4px" w="30%" justifyContent="center">
                  <Flex flex={1} flexDirection="column" alignItems="end">
                    <Image src="./public/img_star.svg" alt="Rp150000" h="14px" w="14px" />
                  </Flex>
                  <Text size="textmd" color="neutral.black.0" fontFamily="Plus Jakarta Sans" alignSelf="end">
                    {ratingText}
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="20px" alignSelf="stretch" justifyContent="center">
                <Flex gap="4px" flex={1} justifyContent="center" alignItems="center">
                  <Image src="./public/img_lock.svg" alt="Emerson Sipr" h="16px" w="16px" />
                  <Text size="textmd" color="neutral.black.0" fontFamily="Plus Jakarta Sans" alignSelf="end">
                    {studentName}
                  </Text>
                </Flex>
                <Flex gap="4px" alignItems="center">
                  <Image src="./public/img_megaphone.svg" alt="5 Modul" h="16px" w="16px" />
                  <Text size="textmd" color="neutral.black.0" fontFamily="Plus Jakarta Sans">
                    {moduleCount}
                  </Text>
                </Flex>
                <Flex gap="4px" alignItems="center">
                  <Image src="./public/img_clock.svg" alt="1h 30m" h="16px" w="16px" />
                  <Text size="textmd" color="neutral.black.0" fontFamily="Plus Jakarta Sans">
                    {courseDuration}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    );
  }
  