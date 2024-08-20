import React from 'react'
import { Center, ChakraProvider, Container,Text,Stack, FormControl, FormLabel, Input,InputGroup,InputRightElement,IconButton, Button, Flex, Box} from '@chakra-ui/react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { FiEye } from "react-icons/fi";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { Card } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import "../../../index.css";
import Signup from '../Signup/Signup';
import { useNavigate } from 'react-router-dom';
const Signin2 = () => {
  return (
   <>
   <ChakraProvider>
      <Box w="1550px" h="450px" bg="linear-gradient(180deg, #2885D1 0%, #26BDD9 100%);">
      <Image position="relative" top="90px" left="693px" w="130px" h="46px" src='https://s3-alpha-sig.figma.com/img/cbcf/da20/26308dca38ec3691d4bba88980c68554?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gTeSuKZPzZLf~~tDiy0TaFPhhPLNl1QENDRUWPxgaByE4yD5ZNpprhnpD~Ixjxso1iV1ljmvLav0N0SUZlJMSo7RLXOsjeqIWGu~eBnh5OBSCY6F8ggtjl7GMzxiMnALHZbSiO0XlD9jnudnlpid8Jrrgbs6VU73Nk4vV354A6t5qcZCxfyuTYsDR1T81Q7jtphNvqXo3q-IWRGyGqEpyZOBGxnuAZE1EedxzIUeMaNYXfpn79hqokh0zu-8GJFzP7driuKRo19s0pkAUNp5bYak5a37Z77vO7boMYtEW0C1T2chJmcCtnWRGsCIteM57zIUYpEaTv9ycjoBxzUIzw__' alt='Logo' />

        <Modal isOpen={true}>
          
          <ModalContent  position="fixed" mt="200px" w="353px" h="494px">
            <ModalHeader ml="35px" mt="25px" alignContent="centre" color="background: rgba(20, 21, 34, 1);" fontWeight="500" fontSize="24px" letterSpacing="1px" lineHeight="36px" fontFamily="'Plus Jakarta Sans', sans-serif">
              Welcome To LMS
            </ModalHeader>
            <ModalHeader mt="-23px" ml="65px" alignContent="centre" color="rgba(156, 156, 164, 1)" fontWeight="400" fontSize="14px" letterSpacing="1px" lineHeight="28px" fontFamily="'Plus Jakarta Sans', sans-serif">Login to Continue</ModalHeader>
            <ModalBody>
            <Stack>
             <FormControl mt="5">
                <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel>
                <Input w="293px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }} borderRadius="10px"  h="50px" name='Email' fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Enter Your Email'/>
             </FormControl>
          </Stack>
          <Stack>
        <FormControl mt="6">
        <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif" >Password</FormLabel>
        <InputGroup>
        <Input w="293px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }} borderRadius="10px"  h="50px" name='Password' fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Enter Your Password'/>
          <InputRightElement>
            <IconButton mt="12px" mr="22px"
              icon={<FiEye  />}
              variant="ghost"
              aria-label="Toggle Password Visibility"
            />
          </InputRightElement>
        </InputGroup>
             </FormControl>
          </Stack>
          <Flex>
          <Text mt="48px" color=" rgba(156, 156, 164, 1);" fontWeight="500" fontSize="14px" lineHeight="21px" fontFamily="'Plus Jakarta Sans', sans-serif">
          Forgot Password
          </Text>
          <Button 
          bg=" rgba(38, 189, 217, 1);
"         mt="9" 
          fontWeight="500"
          fontSize="14px"
          borderRadius="10px"
          p="13px 24px" // Correct padding syntax
          lineHeight="21px"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          w="150px"
          h="40px"
          left="29px" // Optional: add margin-left to separate the button from the text
          _hover={{ bg: "#26bbd5"  }} 
        >
          Sign In
        </Button>
          </Flex>
            </ModalBody>
            <ModalFooter mr="33px">
            <Text mb="3" color="background: rgba(20, 21, 34, 1);" fontWeight="400" fontSize="14px" lineHeight="28px" fontFamily="'Plus Jakarta Sans', sans-serif">
            New User? <Button   _hover={{ border: "1px solid #d7d7d7"  }} border="1px solid Transparent" bg="transparent"><span style={{color: 'rgba(4, 164, 244, 1)', fontWeight: 500, fontSize: '14px', lineHeight: '21px', fontFamily: "'Plus Jakarta Sans', sans-serif"}}>
             Create an account</span></Button>
          </Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
   </>
  )
}

export default Signin2