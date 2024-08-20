import { Text, Link, UnorderedList, ListItem, Heading, Flex, Image, Container } from "@chakra-ui/react";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <Flex
      {...props}
      as="footer"
      mt="54px"
      bg="rgba(246, 248, 253, 1)"
      alignSelf="stretch"
      justifyContent="center"
      alignItems="center"
      py={{ md: "46px", base: "20px" }}
    >
      <Container
        mb="12px"
        display="flex"
        justifyContent="space-between"
        alignItems="start"
        gap="20px"
        px={{ md: "8px", base: "20px" }}
        flexDirection={{ md: "row", base: "column" }}
      >
        <Flex w={{ md: "20%", base: "100%" }} flexDirection="column">
          <Image src="./img_footer_logo.png" alt="Footerlogo" h="44px" w="124px" fit="contain" />
          <Flex flexDirection="column" alignItems="start">
            <Text mt="26px" fontWeight={500}>
              HALL ROAD st 124 bloc 6{" "}
            </Text>
            <Text mt="36px" fontWeight={500}>
              Lahore, Pakistan
            </Text>
            <Text mt="10px" fontWeight={500}>
              (021) 50858650
            </Text>
            <Text mt="10px" fontWeight={500}>
              team@lms.com
            </Text>
            <Text mt="10px" fontWeight={500}>
              © 2019-2024 LMS
            </Text>
          </Flex>
        </Flex>
        <Flex
          mt="8px"
          mr={{ md: "20px", base: "0px" }}
          alignSelf={{ md: "end", base: "auto" }}
          w={{ md: "70%", base: "100%" }}
          justifyContent="space-between"
          alignItems="start"
          gap="20px"
          flexDirection={{ md: "row", base: "column" }}
        >
          <Flex gap="14px" w={{ md: "32%", base: "100%" }} flexDirection="column" alignItems="start">
            <Heading size="headinglg" as="h6">
              Resources
            </Heading>
            <UnorderedList styleType="none" gap="14px" display="flex" flexDirection="column" alignItems="center">
              <ListItem>
                <Link href="#">
                  <Text fontWeight={500}>Karir HandBook</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text fontWeight={500}>Student Rewards</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" alignSelf="start">
                  <Text fontWeight={500}>Free Ebooks</Text>
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
          <Flex gap="14px" w={{ md: "28%", base: "100%" }} flexDirection="column" alignItems="start">
            <Heading size="headinglg" as="h6">
              Community
            </Heading>
            <UnorderedList styleType="none" gap="14px" display="flex" flexDirection="column" alignItems="start">
              <ListItem>
                <Link href="Showcase" target="_blank" rel="noreferrer">
                  <Text fontWeight={500}>Showcase</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="Testimonials" target="_blank" rel="noreferrer">
                  <Text fontWeight={500}>Testimonials</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="Mentor" target="_blank" rel="noreferrer">
                  <Text fontWeight={500}>Mentor</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="Webinar" target="_blank" rel="noreferrer">
                  <Text fontWeight={500}>Webinar</Text>
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
          <Flex gap="14px" w={{ md: "26%", base: "100%" }} flexDirection="column" alignItems="start">
            <Heading size="headinglg" as="h6">
              Company
            </Heading>
            <UnorderedList styleType="none" gap="14px" display="flex" flexDirection="column" alignItems="start">
              <ListItem>
                <Link href="About" target="_blank" rel="noreferrer">
                  <Text fontWeight={500}>About</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="Contact" target="_blank" rel="noreferrer">
                  <Text fontWeight={500}>Contact</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="Careers" target="_blank" rel="noreferrer">
                  <Text fontWeight={500}>Careers</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="Youtube" target="_blank" rel="noreferrer">
                  <Text fontWeight={500}>Youtube</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="Instagram" target="_blank" rel="noreferrer">
                  <Text fontWeight={500}>Instagram</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="TikTok" target="_blank" rel="noreferrer">
                  <Text fontWeight={500}>TikTok</Text>
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
          <Flex gap="14px" alignSelf="center" flexDirection="column" alignItems="start">
            <Heading size="headinglg" as="h6">
              Useful Links
            </Heading>
            <UnorderedList styleType="none" gap="14px" display="flex" flexDirection="column" alignItems="start">
              <ListItem>
                <Link href="#">
                  <Text fontWeight={500}>Privacy & Policy</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text fontWeight={500}>Terms & Conditions</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text fontWeight={500}>Jam Operasional</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text fontWeight={500}>Cari Kelas</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text fontWeight={500}>Roadmap Belajar</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text fontWeight={500}>All Courses</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text fontWeight={500}>Cek Sertifikat</Text>
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
