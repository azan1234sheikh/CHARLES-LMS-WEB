import HomepageOverview from "../../Components/HomepageOverview";
import { Button, Box, SimpleGrid, Heading, Flex, Container } from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
  {
    intermediateButton: "Intermediate",
    courseTitle: (
      <>
        Introduction Basic <br />
        Programming HTML & CSS
      </>
    ),
    coursePrice: "Rp150.000",
    discountedPrice: "Rp120.000",
    ratingText: "4,5",
    studentName: "Emerson Sipr",
    moduleCount: "5 Modul",
    courseDuration: "1h 30m",
  },
  {
    intermediateButton: "Beginner",
    courseTitle: "Creating Beautifull Landing Page in 1 Hour",
    coursePrice: "Rp150.000",
    discountedPrice: "Rp120.000",
    ratingText: "4,5",
    studentName: "Emerson Sipr",
    moduleCount: "5 Modul",
    courseDuration: "1h 30m",
  },
  {
    intermediateButton: "Master",
    courseTitle: "Animation is the Key of Successfull UI/UX Design",
    coursePrice: "Rp150.000",
    discountedPrice: "Rp120.000",
    ratingText: "4,5",
    studentName: "Emerson Sipr",
    moduleCount: "5 Modul",
    courseDuration: "1h 30m",
  },
  {
    intermediateButton: "Intermediate",
    courseTitle: (
      <>
        Introduction Basic <br />
        Programming HTML & CSS
      </>
    ),
    coursePrice: "Rp150.000",
    discountedPrice: "Rp120.000",
    ratingText: "4,5",
    studentName: "Emerson Sipr",
    moduleCount: "5 Modul",
    courseDuration: "1h 30m",
  },
  {
    intermediateButton: "Master",
    courseTitle: "Animation is the Key of Successfull UI/UX Design",
    coursePrice: "Rp150.000",
    discountedPrice: "Rp120.000",
    ratingText: "4,5",
    studentName: "Emerson Sipr",
    moduleCount: "5 Modul",
    courseDuration: "1h 30m",
  },
  {
    intermediateButton: "Beginner",
    courseTitle: "Creating Beautifull Landing Page in 1 Hour",
    coursePrice: "Rp150.000",
    discountedPrice: "Rp120.000",
    ratingText: "4,5",
    studentName: "Emerson Sipr",
    moduleCount: "5 Modul",
    courseDuration: "1h 30m",
  },
];

export default function HomepageColumnOne() {
  return (
    <Flex alignSelf="stretch" flexDirection="column" alignItems="center">
      <Container gap="46px" display="flex" flexDirection="column" alignItems="center" px={{ md: "0px", base: "20px" }}>
        <Flex gap="12px" alignSelf="stretch" flexDirection="column" alignItems="start">
          <Heading size="textxl" color="indigo.a700">
            Follow The Dream
          </Heading>
          <Heading size="h2_web" as="h3">
            <>
              Come learn with us
              <br />
              To Build a Career
            </>
          </Heading>
        </Flex>
        <Box alignSelf="stretch">
          <SimpleGrid gap="56px" rowGap="10px" columns={{ md: 3, base: 1, sm: 2 }}>
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <HomepageOverview {...d} key={"gridintermediat" + index} />
              ))}
            </Suspense>
          </SimpleGrid>
        </Box>
        <Button size="2xl" color="black.900" fontWeight={500} minW="186px" borderRadius="10px">
          Explore Course
        </Button>
      </Container>
    </Flex>
  );
}
