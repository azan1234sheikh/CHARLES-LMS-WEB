import RatingBar from "../../Components/Ratingbar/Ratingbar.jsx";
import { Image, Box, Flex, Container, Heading, Button } from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
  { image: "./public/img_clip_path_group.svg" },
  { image: "./public/img_clip_path_group_black_900.svg" },
  { image: "./public/img_clip_path_group_black_900_30x102.svg" },
  { image: "./public/img_clip_path_group_black_900_32x146.svg" },
  { image: "./public/img_vector.svg" },
];

export default function HomepageRow63c087ec1253() {
  return (
    <Flex justifyContent="center">
      <Flex
        gap="34px"
        w={{ md: "94%", base: "100%" }}
        flexDirection="column"
        alignItems="center"
        px={{ md: 0, base: "20px" }}
      >
        <Box h="544px" alignSelf="stretch" position="relative">
          <Flex
            flex={1}
            flexDirection="column"
            alignItems="end"
            position="absolute"
            left="0px"
            bottom="0px"
            right="0px"
            top="0px"
            h="max-content"
            mx={{ md: "14px", base: "0px" }}
            my="auto"
          >
            <Flex
              alignSelf="stretch"
              justifyContent="flex-end"
              alignItems="center"
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Box
                h="62px"
                mb="96px"
                zIndex={1}
                alignSelf={{ base: "auto", sm: "end" }}
                bg="light_blue.200"
                w="62px"
                position="relative"
                borderRadius="30px"
              />
              <Box
                h={{ md: "526px", base: "auto" }}
                ml={{ base: "0px", sm: "-4px" }}
                position="relative"
                bgImage="url(/images/img_group_80.svg)"
                bgSize="cover"
                bgRepeat="no-repeat"
                w={{ base: "100%", sm: "42%" }}
                px="16px"
                py={{ md: "78px", base: "20px" }}
              >
                <Flex mt="216px" gap="20px" flexDirection="column" alignItems="end">
                  <Box h="50px" mr={{ md: "100px", base: "0px" }} bg="blue.a400" w="50px" borderRadius="24px" />
                  <Flex
                    gap="6px"
                    borderColor="gray.200"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="neutral.white"
                    boxShadow="xs"
                    w={{ md: "62%", base: "100%" }}
                    justifyContent="center"
                    alignItems="center"
                    p="8px"
                    borderRadius="12px"
                  >
                    <Image src="./public/img_thumbs_up_neutral_white.png" alt="Thumbsup" h="42px" w="34%" fit="contain" />
                    <Flex mt="8px" alignSelf="end" flex={1} flexDirection="column" alignItems="start">
                      <Heading size="heading4xl" as="h1" color="gray.900" mt="4px" fontFamily="Inter">
                        <Heading size="heading4xl" as="span" color="gray.900">
                          350&nbsp;
                        </Heading>
                        <Heading size="heading4xl" as="span" color="red.300">
                          +
                        </Heading>
                      </Heading>
                      <Heading size="heading2xl" color="blue_gray.900" fontFamily="Inter" fontWeight={600}>
                        Expert teachers
                      </Heading>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
            <Flex
              mt="-64px"
              mr={{ md: "16px", base: "0px" }}
              gap="16px"
              position="relative"
              borderColor="gray.200"
              borderWidth="1px"
              borderStyle="solid"
              bg="neutral.white"
              boxShadow="xs"
              w={{ md: "26%", base: "100%" }}
              justifyContent="center"
              alignItems="center"
              p="8px"
              borderRadius="12px"
            >
              <Image
                src="./public/img_63c087ec12530e6.png"
                alt="63c087ec12530es"
                h="60px"
                w="32%"
                fit="contain"
                borderRadius="6px"
              />
              <Flex alignSelf="end" flex={1} flexDirection="column" alignItems="start">
                <Heading size="heading4xl" as="h3" color="gray.900" mt="4px" fontFamily="Inter">
                  <Heading size="heading4xl" as="span" color="gray.900">
                    580&nbsp;
                  </Heading>
                  <Heading size="heading4xl" as="span" color="deep_purple.a200_01">
                    +
                  </Heading>
                </Heading>
                <Heading size="headingxl" as="h4" color="blue_gray.900" fontFamily="Inter">
                  Professional courses
                </Heading>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="36px"
            zIndex={2}
            flex={1}
            position="absolute"
            flexDirection="column"
            bottom="15%"
            right="0px"
            left="0px"
            m="auto"
          >
            <Flex gap="20px" flexDirection="column">
              <Flex flexDirection="column" alignItems="start">
                <Heading size="textxl" as="h5" color="indigo.a700">
                  #SpiritOfLearning
                </Heading>
                <Flex mt="-2px" position="relative" alignSelf="stretch">
                  <Heading size="h1_web" as="h6" w="38%" lineHeight="69px">
                    <>
                      Design & Code Your
                      <br />
                      Future Career
                    </>
                  </Heading>
                </Flex>
              </Flex>
              <Flex>
                <Heading
                  size="textxl"
                  as="h6"
                  fontFamily="Manrope"
                  fontWeight={400}
                  alignSelf="end"
                  w="38%"
                  lineHeight="32px"
                >
                  <>
                    Deepen your design and code skills with the experts
                    <br />
                    in their field and get the official certificate
                  </>
                </Heading>
              </Flex>
            </Flex>
            <Flex gap="13px">
              <Button size="2xl" fontWeight={500} minW="146px" borderRadius="10px">
                Explore Course
              </Button>
              <Button
                size="2xl"
                fontWeight={500}
                borderColor="neutral.soft_grey"
                borderWidth="1px"
                borderStyle="solid"
                minW="146px"
                borderRadius="10px"
              >
                Daftar Sekarang
              </Button>
            </Flex>
          </Flex>
          <Box
            h="44px"
            bg="light_blue.200"
            w="44px"
            position="absolute"
            left="3%"
            top="23px"
            m="auto"
            borderRadius="22px"
          />
          <Flex
            zIndex={3}
            flex={1}
            position={{ md: "absolute", base: "relative" }}
            justifyContent="flex-end"
            alignItems="center"
            top="0px"
            right="0px"
            left="0px"
            m="auto"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex
              mb="86px"
              gap="14px"
              zIndex={4}
              alignSelf={{ md: "end", base: "auto" }}
              position="relative"
              borderColor="gray.200"
              borderWidth="1px"
              borderStyle="solid"
              bg="neutral.white"
              boxShadow="xs"
              w={{ md: "20%", base: "100%" }}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p={{ base: "20px", sm: "28px" }}
              borderRadius="10px"
            >
              <Box value={1} isEditable={true} size={20} starCount={1} as={RatingBar} display="flex" gap="10px" />
              <Heading
                size="heading5xl"
                as="h5"
                color="gray.900"
                fontFamily="Inter"
                textAlign="center"
                alignSelf="stretch"
                lineHeight="30px"
              >
                <Heading size="heading5xl" as="span" color="gray.900">
                  Rated 5 out of 5 by&nbsp;
                </Heading>
                <Heading size="heading5xl" as="span" color="blue.a400">
                  45,000+ students
                </Heading>
              </Heading>
            </Flex>
            <Flex
              ml={{ md: "-132px", base: "0px" }}
              position="relative"
              w={{ md: "42%", base: "100%" }}
              justifyContent="flex-end"
              alignItems="start"
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Box h="50px" mt="88px" bg="blue.600" w="50px" borderRadius="24px" />
              <Image
                src="./public/img_1_7.png"
                alt="Image"
                h="412px"
                ml={{ base: "0px", sm: "-10px" }}
                alignSelf="center"
                position="relative"
                w={{ base: "100%", sm: "90%" }}
                fit="contain"
              />
            </Flex>
          </Flex>
        </Box>
        <Container px="0px">
          <Flex mr={{ md: "358px", base: "0px" }} gap="50px" flexDirection={{ md: "row", base: "column" }}>
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <Image
                  key={"listvectorone" + index}
                  src={d.image}
                  alt="Image"
                  h="32px"
                  w={{ md: "22%", base: "100%" }}
                  fit="contain"
                  my={{ md: "6px", base: "0px" }}
                />
              ))}
            </Suspense>
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
}
