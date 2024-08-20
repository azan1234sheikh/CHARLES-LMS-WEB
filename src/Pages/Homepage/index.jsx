import { useNavigate } from "react-router-dom";
import MegaMenu1 from "../../Components/MegaMenu1";
import HomepageColumnOne from "./HomepageColumnOne";
import HomepageColumnThree from "./HomepageColumnThree";
import HomepageColumnTwo from "./HomepageColumnTwo";
import HomepageRow63c087ec1253 from "./HomepageRow63c087ec1253";
import HomepageRowTwo from "./HomepageRowTwo";
import HomepageRowfrequently from "./HomepageRowfrequently";
import HomepageStacktrustedby9 from "./HomepageStacktrustedby9";
import { Button, Box,Heading, Flex, Image, Container, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import Footer from "../../Components/Footer";

export default function HomepagePage() {
  const btnnavigate = useNavigate();
  const handlebtn =()=>{
       btnnavigate("/Signin");
  }
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);

  return (
    <>
    
    <Box >
      <Flex w="100vw" gap={{ md: "118px", base: "59px", sm: "88px" }} bg="gray.50"   flexDirection="column" py="6px">
        <Flex
          mt="8px"
          ml="64px"
          mr="10px"
          gap={{ md: "72px", base: "36px", sm: "54px" }}
          flexDirection="column"
          mx={{ md: 0, base: "0px" }}
        >
          <Flex
            mr={{ md: "32px", base: "0px" }}
            gap="30px"
            alignItems="center"
            position="relative"
            flexDirection={{ md: "row", base: "column" }}
            as="header"
          >
            <Image src="./public/img_header_logo.png" alt="Headerlogo" h="48px" w="132px" fit="contain" />
            <Flex
              flex={1}
              justifyContent="space-between"
              alignItems="center"
              gap="20px"
              alignSelf={{ md: "auto", base: "stretch" }}
              flexDirection={{ md: "row", base: "column" }}
              px={{ md: 0, base: "20px" }}
            >
              <UnorderedList styleType="none" gap="30px" display="flex" flexDirection={{ base: "column", sm: "row" }}>
                <ListItem>
                  <Link href="#">
                    <Heading size="textlg" as="h6" fontFamily="Plus Jakarta Sans">
                      About Us
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem
                  onMouseLeave={() => {
                    setMenuOpen(false);
                  }}
                  onMouseEnter={() => {
                    setMenuOpen(true);
                  }}
                >
                  <Flex gap="6px" cursor="pointer">
                    <Heading size="textlg" as="h6" fontFamily="Plus Jakarta Sans">
                      Courses
                    </Heading>
                    <Image src="./public/img_fi_rr_caret_down.svg" alt="Firrcaret" h="24px" w="24px" />
                  </Flex>
                  {menuOpen ? <MegaMenu1 /> : null}
                </ListItem>
                <ListItem
                  onMouseLeave={() => {
                    setMenuOpen1(false);
                  }}
                  onMouseEnter={() => {
                    setMenuOpen1(true);
                  }}
                >
                  <Flex gap="8px" cursor="pointer">
                    <Heading size="textlg" as="h6" fontFamily="Plus Jakarta Sans">
                      Learning Flow
                    </Heading>
                    <Image src="./public/img_fi_rr_caret_down.svg" alt="Firrcaret" h="24px" w="24px" />
                  </Flex>
                  {menuOpen1 ? <MegaMenu1 /> : null}
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Heading size="textlg" as="h6" fontFamily="Plus Jakarta Sans">
                      Contact Us
                    </Heading>
                  </Link>
                </ListItem>
              </UnorderedList>
              <Flex gap="20px" alignItems="center">
                <Link href="#">
                  <Image src="./public/img_button.svg" alt="Button" h="48px" w="48px" borderRadius="24px" />
                </Link>
                <Button onClick={handlebtn} size="2xl" color="black.900" bg="rgba(38, 189, 217, 1)" fontWeight={500} minW="170px" borderRadius="10px">
                  Login / Register
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <HomepageRow63c087ec1253 />
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <HomepageColumnOne />
          <HomepageColumnTwo />
          <HomepageRowTwo />
          <HomepageColumnThree />
          <HomepageStacktrustedby9 />
          <HomepageRowfrequently />
          <Container
            mt="108px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            px={{ md: "56px", base: "20px" }}
          >
            <Flex gap="48px" w={{ md: "58%", base: "100%" }} flexDirection="column" alignItems="center">
              <Flex gap="34px" alignSelf="stretch" flexDirection="column" alignItems="center">
                <Image src="./public/img_mask_group.svg" alt="Image" h="120px" w="120px" />
                <Flex gap="14px" alignSelf="stretch" flexDirection="column" alignItems="center">
                  <Heading size="h1_web" mt="6px">
                    Ready to Build Your Future?
                  </Heading>
                  <Heading as="h3" textAlign="center" w={{ md: "60%", base: "100%" }} lineHeight="24px">
                    <>
                      Learn directly from experienced tutors
                      <br />
                      in the field indefinitely
                    </>
                  </Heading>
                </Flex>
              </Flex>
              <Button size="2xl" fontWeight={500} minW="186px" borderRadius="10px">
                Register as a Tutor
              </Button>
            </Flex>
            <Footer/>
          </Container>
          
        </Flex>
      </Flex>
      </Box>
    </>
  );
}
