import { Center, ChakraProvider, Container,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Icon} from '@chakra-ui/react';
      import { Image } from '@chakra-ui/react';
      import { useNavigate } from 'react-router-dom';
      import React, { Suspense } from "react";
      import { CiSearch } from "react-icons/ci";
      import { useDisclosure } from '@chakra-ui/react';
      import {
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalFooter,
        ModalBody,
        ModalCloseButton,
      } from '@chakra-ui/react'
const Mentorcard = () => {
  return (
    <>
     <GridItem w="354px" >
              <Link href="#" >
                <Box position="relative" bottom="138px" left="403px">
                  <Flex
                    gap="20px"
                    bg="white"
                    w="354px"
                    h="153px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text fontWeight="714px" fontSize="14px" lineHeight="21px" alignSelf="end"color="black" textDecoration="none"> Emerson Levin</Text>
                        </Flex>
                        <Flex gap="4px"  mt="8px" w="32%" justifyContent="center">
                          <Text fontWeight="500" fontSize="14px" lineHeight="21px" color="rgba(4, 164, 244, 1)">Followed</Text>
                        </Flex>
                      </Flex>
                      <Text ml="43px" color="rgba(156, 156, 164, 1)">Ui Ux Design</Text>
                    </Flex>
                    <Stack>
                        <Flex position="relative" bottom="34px"   >
                        <Image  src="./public/document.svg" alt="Lincoln George" h="20px" w="20px" />
                        <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            50 Courses
                          </Text>
                        </Flex>
                        <Flex left="152px" position="relative" bottom="62px" >
                    <Image  src="./public/star.svg" alt="Lincoln George" h="20px" w="20px" />
                          <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            4.5(1200reviews)
                          </Text> 
                          </Flex>
                    </Stack>
                  </Flex>
                </Box>
              </Link>
            </GridItem>
            
    </>
  )
}

export default Mentorcard