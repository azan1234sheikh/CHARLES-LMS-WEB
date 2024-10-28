import BusinessProfile from "../../Components/BusinessProfile";
import { Box, SimpleGrid, Heading, Flex, Container } from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
  {
    businessImage: "./img_div.svg",
    businessTitle: "Business",
    businessDescription: "Lacinia fermen tum fusce felis placerat amet bibendum rhoncus cursus doloril.",
    exploreCoursesButton: "Explore Courses",
    twentyfour: "24",
  },
  {
    businessImage: "./img_div_red_300.svg",
    businessTitle: "Design",
    businessDescription: "Accumsan vitae nisi massa lectusolme aliquam tincidunt tellus nullam.",
    exploreCoursesButton: "Explore Courses",
    twentyfour: "32",
  },
  {
    businessImage: "./img_div_deep_purple_a200_01.svg",
    businessTitle: "Development",
    businessDescription: "Aliquam faucibus dignissim amet non nulla vestib ulum sed pulvinar anibh.",
    exploreCoursesButton: "Explore Courses",
    twentyfour: "48",
  },
  {
    businessImage: "./img_div_deep_orange_400.svg",
    businessTitle: "Marketing",
    businessDescription: "Id adipiscing nulla aliquam vel. In mattis enim in porttitor mauris eu.",
    exploreCoursesButton: "Explore Courses",
    twentyfour: "38",
  },
  {
    businessImage: "./img_div.svg",
    businessTitle: "Business",
    businessDescription: "Lacinia fermen tum fusce felis placerat amet bibendum rhoncus cursus doloril.",
    exploreCoursesButton: "Explore Courses",
    twentyfour: "24",
  },
  {
    businessImage: "./img_div_yellow_700.svg",
    businessTitle: "Illustration",
    businessDescription: "Id massa ultricies dignissim donec sed tortor gravida nunc orci. Sed lacinia.",
    exploreCoursesButton: "Explore Courses",
    twentyfour: "16",
  },
];

export default function HomepageColumnTwo() {
  return (
    <Flex mt="72px" alignSelf="stretch" flexDirection="column" alignItems="center">
      <Container
        gap={{ md: "80px", base: "40px", sm: "60px" }}
        display="flex"
        flexDirection="column"
        px={{ md: "0px", base: "20px" }}
      >
        <Flex gap="6px" flexDirection="column" alignItems="start">
          <Heading size={{base:"textmd",lg:"textxl"}} color="indigo.a700">
            Start Learning Now
          </Heading>
          <Flex alignSelf="stretch">
            <Heading size={{lg:"h2_web"}} as="h3" w={{base:"70%",lg:"30%"}} lineHeight="48px">
              Search Course Materials by Category
            </Heading>
          </Flex>
        </Flex>
        <SimpleGrid gap="58px" rowGap="56px" columns={{ md: 2, base: 1 }} justifyContent="center">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <BusinessProfile {...d} key={"gridbusiness" + index} />
            ))}
          </Suspense>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
