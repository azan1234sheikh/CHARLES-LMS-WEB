import CourseOverview1 from "../../Components/CourseOverview1/index.jsx";
import { Button, Box, SimpleGrid, Heading, Flex, Container } from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
  {
    settingsButton: "Intermediate",
    courseTitle: (
      <>
        Introduction Basic <br />
        Programming HTML & CSS
      </>
    ),
    priceRp150000: "Rp150.000",
    priceRp120000: "Rp120.000",
    reviewScore: "4,5",
    studentName: "Emerson Sipr",
    moduleCount: "5 Modul",
    courseDuration: "1h 30m",
  },
  {
    settingsButton: "Beginner",
    courseTitle: (
      <>
        Introduction Basic <br />
        Programming HTML & CSS
      </>
    ),
    priceRp150000: "Rp150.000",
    priceRp120000: "Rp120.000",
    reviewScore: "4,5",
    studentName: "Emerson Sipr",
    moduleCount: "5 Modul",
    courseDuration: "1h 30m",
  },
  {
    settingsButton: "Master",
    courseTitle: (
      <>
        Introduction Basic <br />
        Programming HTML & CSS
      </>
    ),
    priceRp150000: "Rp150.000",
    priceRp120000: "Rp120.000",
    reviewScore: "4,5",
    studentName: "Emerson Sipr",
    moduleCount: "5 Modul",
    courseDuration: "1h 30m",
  },
  {
    settingsButton: "Intermediate",
    courseTitle: (
      <>
        Introduction Basic <br />
        Programming HTML & CSS
      </>
    ),
    priceRp150000: "Rp150.000",
    priceRp120000: "Rp120.000",
    reviewScore: "4,5",
    studentName: "Emerson Sipr",
    moduleCount: "5 Modul",
    courseDuration: "1h 30m",
    pricerp150000: "$150.000",
    pricerp120000: "$120.000",
  },
  {
    settingsButton: "Beginner",
    courseTitle: (
      <>
        Introduction Basic <br />
        Programming HTML & CSS
      </>
    ),
    priceRp150000: "Rp150.000",
    priceRp120000: "Rp120.000",
    reviewScore: "4,5",
    studentName: "Emerson Sipr",
    moduleCount: "5 Modul",
    courseDuration: "1h 30m",
  },
  {
    settingsButton: "Master",
    courseTitle: (
      <>
        Introduction Basic <br />
        Programming HTML & CSS
      </>
    ),
    priceRp150000: "Rp150.000",
    priceRp120000: "Rp120.000",
    reviewScore: "4,5",
    studentName: "Emerson Sipr",
    moduleCount: "5 Modul",
    courseDuration: "1h 30m",
  },
];

export default function HomepageColumnThree() {
  return (
    <Flex mt="50px" alignSelf="stretch" flexDirection="column" alignItems="center">
      <Container gap="46px" display="flex" flexDirection="column" alignItems="center" px={{ md: "0px", base: "20px" }}>
        <Flex mr={{ md: "46px", base: "0px" }} gap="12px" alignSelf="stretch" flexDirection="column" alignItems="start">
          <Heading size="textxl" color="indigo.a700">
            Become Freelancer
          </Heading>
          <Heading size="h2_web" as="h3">
            <>
              Featured Courses Class
              <br />
              Study Design & Development
            </>
          </Heading>
        </Flex>
        <SimpleGrid alignSelf="stretch" gap="56px" columns={{ md: 3, base: 1, sm: 2 }} justifyContent="center">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <CourseOverview1 {...d} key={"gridintermediat" + index} />
            ))}
          </Suspense>
        </SimpleGrid>
        <Button size="2xl" fontWeight={500} minW="186px" borderRadius="10px">
          Explore Course
        </Button>
      </Container>
    </Flex>
  );
}
