import {
  AccordionPanel,
  Image,
  Heading,
  Flex,
  AccordionButton,
  Accordion,
  AccordionItem,
  Container,
  Center,
  Box,
} from "@chakra-ui/react";
import React from "react";

const accordionData = [
  {
    istherea: "Is there a money back and work guarantee available?",
  },
  {
    istherea: "Does coersoses provide scholarships?",
  },
  {
    istherea: "What other privileges can I get?",
  },
];
const accordionData1 = [
  {
    canabeginner: "Can a beginner join in?",
  },
  {
    canabeginner: "Are there learning community classes available?",
  },
  {
    canabeginner: "How do I start a career switch?",
  },
];

export default function HomepageRowfrequently() {
  return (
    <Box alignSelf="stretch">
      <Center bg="gray.50_01" flexDirection="column" py={{ md: "96px", base: "20px" }}>
        <Container
          gap="50px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          px={{ md: "56px", base: "20px" }}
        >
          <Heading size="h2_web" textAlign="center" lineHeight="48px">
            <>
              Frequently Asked
              <br />
              Questions 😊
            </>
          </Heading>
          <Flex gap="30px" alignSelf="stretch" flexDirection={{ md: "row", base: "column" }}>
            <Accordion gap="20px" display="flex" w="100%" flexDirection="column">
              {accordionData1.map((d) => (
                <AccordionItem>
                  {(props) => (
                    <>
                      <AccordionButton bg="neutral.white" flex={1} borderRadius="16px">
                        <Flex
                          bg="neutral.white"
                          justifyContent="space-between"
                          alignItems="center"
                          gap="20px"
                          px="20px"
                          py="12px"
                          borderRadius="16px"
                        >
                          <Heading as="h3">{d.canabeginner}</Heading>
                          <Image src="./public/img_close.svg" alt="Close" h="24px" w="24px" />
                        </Flex>
                      </AccordionButton>
                      <AccordionPanel p="0px">Dummy Content</AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion gap="20px" display="flex" w="100%" flexDirection="column">
              {accordionData.map((d) => (
                <AccordionItem>
                  {(props) => (
                    <>
                      <AccordionButton bg="neutral.white" flex={1} borderRadius="16px">
                        <Flex
                          gap="16px"
                          bg="neutral.white"
                          justifyContent="center"
                          alignItems="center"
                          p="16px"
                          borderRadius="16px"
                          flexDirection={{ base: "column", sm: "row" }}
                        >
                          <Heading as="h4" w={{ base: "100%", sm: "92%" }} lineHeight="24px">
                            {d.istherea}
                          </Heading>
                          <Image src="./public/img_close.svg" alt="Close" h="24px" w={{ base: "100%", sm: "24px" }} />
                        </Flex>
                      </AccordionButton>
                      <AccordionPanel p="0px">Dummy Content</AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Flex>
        </Container>
      </Center>
    </Box>
  );
}
