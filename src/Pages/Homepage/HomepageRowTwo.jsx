import UserProfile from "../../Components/UserProfile";
import { Button, Heading, Image, Flex, Box, Container } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function HomepageRowTwo() {
  const btnnavigate = useNavigate();
  const handlebtn = () => {
    btnnavigate("/Signin");
  };
  return (
    <Box mt="112px" alignSelf="stretch">
      <Flex bg="cyan.50" justifyContent="center" py={{ md: "72px", base: "20px" }}>
        <Container
          mt="64px"
          display="flex"
          justifyContent="center"
          alignItems="start"
          px={{ md: "24px", base: "20px" }}
          flexDirection={{ md: "row", base: "column" }}
        >
          <Box
            h={{ md: "504px", base: "auto" }}
            alignSelf={{ md: "center", base: "stretch" }}
            flex={{ md: 1, base: "unset" }}
            position="relative"
            w={{ md: "auto", base: "100%" }}
          >
            <Flex flex={1} alignItems="start" flexDirection={{ base: "column", sm: "row" }}>
              <Flex
                mt="16px"
                gap="2px"
                zIndex={5}
                position="relative"
                bg="neutral.white"
                w={{ base: "100%", sm: "24%" }}
                flexDirection="column"
                alignItems="start"
                justifyContent="center"
                px="10px"
                py="12px"
                borderRadius="20px"
              >
                <Heading size="headings" ml={{ md: "4px", base: "0px" }} fontSize="10.57px">
                  My Progress
                </Heading>
                <Flex
                  ml={{ md: "4px", base: "0px" }}
                  gap="6px"
                  alignSelf="stretch"
                  flexDirection={{ md: "column", base: "row" }}
                >
                  <UserProfile />
                  <UserProfile
                    userImage="./img_figma_logomark_svg.svg"
                    userRole="UI/UX Designer"
                    completionPercentage="90%"
                  />
                </Flex>
              </Flex>
              <Box
                h={{ base: "200px", sm: "334px",lg:"448px" }}
                ml={{ base: "0px", sm: "-114px" }}
                alignSelf="center"
                position="relative"
                bg="blue.600"
                w={{base: "60%", sm: "334px",lg:"448px"}}
                borderRadius="224px"
              />
            </Flex>
            <Image
              src="./img_adobestock_499845150.png"
              alt="Adobestock"
              h={{base:"200px", lg:"394px"}}
              zIndex={6}
              w="76%"
              position="absolute"
              fit="contain"
              left={{base:"11%",sm:"-10%",lg:"6%"}}
              top={{base:"66px",sm:"55px",lg:"16px"}}
              m="auto"
              borderRadius="50px"
            />
            <Box zIndex={7} w="46%" position="absolute" bottom="-74px" right="17%" m="auto">
              <Image
               display={{base:"none",lg:"flow" }}
                src="./Homepagebox.svg"
                alt="Image"
                h={{ md: "348px", base: "auto" }}
                fit="cover"
                w="100%"
              />
              <Flex alignItems="start" px="12px">
                <Image  src="./img_chat_1_webp.png" alt="Chat1webp" h="1px" w="1px" fit="cover" />
                <Image   src="./img_chat__wbp.png" alt="Chat2webp" h="1px" ml="12px" w="1px" fit="cover" />
                <Image

                  src=""
                  alt="Chat3webp"
                  h="1px"
                  mb="14px"
                  ml="12px"
                  w="1px"
                  fit="cover"
                />
              </Flex>
            </Box>
          </Box>
          <Flex gap="26px" w={{ md: "44%", base: "100%" }} flexDirection="column" alignItems="start">
            <Flex gap="20px" alignSelf="stretch" flexDirection="column">
              <Flex gap="14px" flexDirection="column" alignItems="start">
                <Heading size="textxl" as="h3" color="indigo.a700">
                  You Deserve Better Career
                </Heading>
                <Heading size="h2_web" as="h4">
                  <>
                    Privileges from joining us
                    <br />
                    Career Growing
                  </>
                </Heading>
              </Flex>
              <Flex gap="18px" flexDirection="column">
                <Flex gap="10px">
                  <Image src="./img_ic_check_svg.svg" alt="Icchecksvg" h="24px" w="24px" />
                  <Heading as="h5">Access Courses forever</Heading>
                </Flex>
                <Flex gap="10px">
                  <Image src="./img_ic_check_svg.svg" alt="Icchecksvg" h="24px" w="24px" />
                  <Heading as="h6">Free class update material</Heading>
                </Flex>
                <Flex gap="10px">
                  <Image src="./img_ic_check_svg.svg" alt="Icchecksvg" h="24px" w="24px" />
                  <Heading as="h6">Real-world projects Freelancer</Heading>
                </Flex>
                <Flex gap="10px">
                  <Image src="./img_ic_check_svg.svg" alt="Icchecksvg" h="24px" w="24px" />
                  <Heading as="h6">Forum learning according to interests</Heading>
                </Flex>
                <Flex gap="10px">
                  <Image src="./img_ic_check_svg.svg" alt="Icchecksvg" h="24px" w="24px" />
                  <Heading as="h6">Other online class privileges</Heading>
                </Flex>
              </Flex>
            </Flex>
            <Button size="2xl" onClick={handlebtn} fontWeight={500} minW="186px" borderRadius="10px">
              Join Now
            </Button>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
}
