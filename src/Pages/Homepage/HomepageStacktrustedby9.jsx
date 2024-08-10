import UserProfile1 from "../../Components/UserProfile1";
import { Box, Flex, Button, Heading, Container } from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
  {
    userImage: "./public/img_63c02e556c48fe4.png",
    userName: "Andrew Smith",
    userLocation: "New York, NY",
    userDescription:
      "Blandit pretium sit nulla feugiat mattis in arcu mauris urna porttitor dolor sit amet consectur dolor sitele.",
  },
  {
    userImage: "./public/img_63c02e568e38ebc.png",
    userName: "Lily Woods",
    userLocation: "Miami, FL",
    userDescription:
      "The earth is now the bed of the life of the people, for the ferment of the soil is full of laughter.",
  },
  {
    userImage: "./public/img_63c02e5500c9a20.png",
    userName: "Will Miller",
    userLocation: "Portland, Oregon",
    userDescription:
      "Or else it is very easy to draw a whole country, but with hate as hate, who will love an easy quiver for the bow.",
  },
  {
    userImage: "./public/img_63c02e557842c50.png",
    userName: "Sally Moner",
    userLocation: "San Francisco, CA",
    userDescription:
      "Or else it is very easy to draw a whole country, but with hate as hate, who will love an easy quiver for the bow.",
  },
  {
    userImage: "./public/img_63c02e556c48fe4.png",
    userName: "Andrew Smith",
    userLocation: "New York, NY",
    userDescription:
      "Blandit pretium sit nulla feugiat mattis in arcu mauris urna porttitor dolor sit amet consectur dolor sitele.",
  },
];

export default function HomepageStacktrustedby9() {
  return (
    <Box h={{ md: "860px", base: "auto" }} mt="62px" alignSelf="stretch" position="relative">
      <Heading size="textxl" mt="46px">
        Trusted By 900K+ Students
      </Heading>
      <Flex
        gap={{ md: "92px", base: "46px", sm: "69px" }}
        overflow="auto"
        bg="blue_gray.800"
        flex={1}
        flexDirection="column"
        justifyContent="center"
        position="absolute"
        left="0px"
        bottom="0px"
        right="0px"
        top="0px"
        h="max-content"
        py={{ md: "86px", base: "20px" }}
        m="auto"
      >
        <Container
          alignSelf="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          px={{ md: "56px", base: "20px" }}
        >
          <Flex gap="46px" w={{ md: "42%", base: "100%" }} flexDirection="column">
            <Flex flexDirection="column" alignItems="center" mx={{ md: "14px", base: "0px" }}>
              <Heading size="textxl" as="h3" color="cyan.400">
                Trusted By 900K+ Students
              </Heading>
              <Heading
                size="h2_web"
                as="h4"
                color="neutral.white"
                textAlign="center"
                alignSelf="stretch"
                lineHeight="48px"
              >
                <Heading size="h2_web" as="span">
                  Join Our Supportive Community&nbsp;
                </Heading>
                <Heading size="h2_web" as="span">
                  😊
                </Heading>
              </Heading>
            </Flex>
            <Heading
              size="textlg"
              as="h5"
              color="blue_gray.200_01"
              textAlign="center"
              fontWeight={400}
              lineHeight="32px"
            >
              <>
                We provides a UI/UX learning community
                <br />
                design & Web Development for beginners to advanced
              </>
            </Heading>
            <Flex gap="10px" mx={{ md: "28px", base: "0px" }}>
              <Button size="2xl" fontWeight={500} w="100%" borderRadius="10px">
                Student Portfolio
              </Button>
              <Button
                size="2xl"
                fontWeight={500}
                borderColor="neutral.soft_grey"
                borderWidth="1px"
                borderStyle="solid"
                w="100%"
                borderRadius="10px"
              >
                Join as a Tutor
              </Button>
            </Flex>
          </Flex>
        </Container>
        <Flex gap="28px" flexDirection={{ md: "row", base: "column" }}>
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile1 {...d} key={"listandrew" + index} />
            ))}
          </Suspense>
        </Flex>
      </Flex>
    </Box>
  );
}
