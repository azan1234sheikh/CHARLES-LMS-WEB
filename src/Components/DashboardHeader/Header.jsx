import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress} from '@chakra-ui/react';
    import { Image } from '@chakra-ui/react';
   import { useNavigate } from 'react-router-dom';
   import React, {useRef,useState, Suspense } from "react";
   import {FaPlay, FaPause } from "react-icons/fa";
   import { AspectRatio } from '@chakra-ui/react'
   
   import "react-datepicker/dist/react-datepicker.css";  
  
const Header = () => {
  return (
<>
          <Flex flexDirection="row" ml="28px"  px={{ md: 0, base: "20px" }}>
                   <Heading position="relative" top="25px" fontWeight ="500" fontSize="32px" lineHeight="48px" fontFamily="Plus Jakarta Sans" >
                   Messages
                    <Box ml="152px" >
                   <Link href="#">
                     <Image
                       src="./public/notif.svg"
                       alt="Image"
                       h="24px"
                       position="relative"
                       left="900px"
                       bottom="26px"
                       w="24px"
                       fit="cover"
                       borderRadius="24px"
                     />
                   </Link>
                   <Link href="#">
                     <Image
                       src="./public/Rectangle 5997 (1).svg"
                       alt="Image"
                       h="50px"
                       position="relative"
                       left="992px"
                       bottom="60px"
                       w="50px"
                       fit="cover"
                       borderRadius="24px"
                     />
                    
                   </Link>
                   </Box>

                   </Heading>
              </Flex>
              
</>
  )
}

export default Header