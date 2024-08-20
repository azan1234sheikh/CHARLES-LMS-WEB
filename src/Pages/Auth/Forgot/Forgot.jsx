import React from 'react'
import { Center, ChakraProvider, Container,Text,Stack, FormControl, FormLabel, Input,InputGroup,InputRightElement,IconButton, Button, Flex, Box} from '@chakra-ui/react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import "../../../index.css";
import { useNavigate } from 'react-router-dom';
const Forgot = () => {
const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate('/Signin'); // Redirects to the /signup route
  };
  const handlenextInClick = () => {
    navigate('/Verify'); // Redirects to the /signup route
  };

  return (
    <>
    <Container>
     <Center minH="900px">

   <Image src="./image (1).png"
   minW="605px" mb="160px" h="700px" >
   </Image>
   </Center>
        <Center minH="100vh">
        <Box border="1px solid Transparent" p="0" w="385px" height="443px" position="relative" // ensure proper positioning for `left` and `bottom`
         left="835px"  bottom="900px" bg="white " >
     <Center>
      <Box w="24px" h="24px" mr="350px" mb="30px">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10C0 4.47715 4.47715 0 10 0H50V40C50 45.5228 45.5228 50 40 50H0V10Z" fill="#2781CA"/>
          <path d="M21.3799 25.0001L23.7899 27.4201L28.6199 22.5801" stroke="#141522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23.7499 15.4503C24.4399 14.8603 25.5699 14.8603 26.2699 15.4503L27.8499 16.8103C28.1499 17.0703 28.7099 17.2803 29.1099 17.2803H30.8099C31.8699 17.2803 32.7399 18.1503 32.7399 19.2103V20.9103C32.7399 21.3003 32.9499 21.8703 33.2099 22.1703L34.5699 23.7503C35.1599 24.4403 35.1599 25.5703 34.5699 26.2703L33.2099 27.8503C32.9499 28.1503 32.7399 28.7103 32.7399 29.1103V30.8103C32.7399 31.8703 31.8699 32.7403 30.8099 32.7403H29.1099C28.7199 32.7403 28.1499 32.9503 27.8499 33.2103L26.2699 34.5703C25.5799 35.1603 24.4499 35.1603 23.7499 34.5703L22.1699 33.2103C21.8699 32.9503 21.3099 32.7403 20.9099 32.7403H19.1799C18.1199 32.7403 17.2499 31.8703 17.2499 30.8103V29.1003C17.2499 28.7103 17.0399 28.1503 16.7899 27.8503L15.4399 26.2603C14.8599 25.5703 14.8599 24.4503 15.4399 23.7603L16.7899 22.1703C17.0399 21.8703 17.2499 21.3103 17.2499 20.9203V19.2003C17.2499 18.1403 18.1199 17.2703 19.1799 17.2703H20.9099C21.2999 17.2703 21.8699 17.0603 22.1699 16.8003L23.7499 15.4503Z" stroke="#141522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Box>
    </Center>
        <Text  mb="3" display="flex" color="background: rgba(20, 21, 34, 1);" fontWeight="500" fontSize="40px" letterSpacing="1px" lineHeight="63px" fontFamily="'Plus Jakarta Sans', sans-serif">
           Verify Your Identity
          </Text>
          <Text mb="3" color="background: rgba(20, 21, 34, 1);" fontWeight="400" fontSize="14px" lineHeight="28px" fontFamily="'Plus Jakarta Sans', sans-serif">
          Select a way to receive the verification code
          </Text>
          <Box mt="21px" w="385px" h="170px">
           
        <Button 
         w="385px" 
         h="89px"  
         bg="transparent"  
         border="1px solid transparent "
         _hover={{ border:"1px solid  rgba(223, 223, 223, 1) " }}
         >
  <Flex display="contents">
    <Box mr="330px">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z" 
        fill="#DFDFDF" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
    </Box>
    <Text
      fontFamily="'Plus Jakarta Sans', sans-serif"
      color="rgba(20, 21, 34, 1);"
      mr="170px"
      fontWeight="500"
      fontSize="16px"
      lineHeight="24px"
      position="absolute"
      flex="1"
    >
      Email code to
    </Text>
    <Box>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M7.4248 16.6004L12.8581 11.1671C13.4998 10.5254 13.4998 9.47539 12.8581 8.83372L7.4248 3.40039" 
        stroke="#DFDFDF" 
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
    </Box>
    <Text
      fontFamily="'Plus Jakarta Sans', sans-serif"
      color="rgba(20, 21, 34, 1);"
      fontWeight="400"
      fontSize="12px"
      lineHeight="18px"
      position="absolute"
    right="200px"
      mt="62px"
    >
      maxbert22@email.com
    </Text>
  </Flex>
</Button>
<Button 
         w="385px" 
         h="69px"  
         bg="transparent"  
         border="1px solid transparent "
         _hover={{ border:"1px solid  rgba(223, 223, 223, 1) " }}
         mt="23px"
         >
  <Flex display="contents">
    <Box mr="330px">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z" 
        fill="#DFDFDF" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
    </Box>
    <Text
      fontFamily="'Plus Jakarta Sans', sans-serif"
      color="rgba(20, 21, 34, 1);"
      mr="90px"
      fontWeight="500"
      fontSize="16px"
      lineHeight="24px"
      position="absolute"
      flex="1"
    >
      Text code to number in -30
    </Text>
    <Box>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M7.4248 16.6004L12.8581 11.1671C13.4998 10.5254 13.4998 9.47539 12.8581 8.83372L7.4248 3.40039" 
        stroke="#DFDFDF" 
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
    </Box>
    <Text
      fontFamily="'Plus Jakarta Sans', sans-serif"
      color="rgba(20, 21, 34, 1);"
      fontWeight="400"
      fontSize="12px"
      lineHeight="18px"
      position="absolute"
      display="block"
      left="44px"
      mt="92px"
      
    >Our text are free, but some service<br/>providers may apply usage charges in<br/> certain cases.
      </Text>
  </Flex>
   </Button>
        <Box
            mt="60px"   // Margin-bottom for spacing
           bg="rgba(245, 245, 247, 1)" // Background color for the line
           w="385px"    // Width of the line
           h="1px"      // Height of the line (thickness)
        />
        <Button
        onClick={handleSignInClick}
        border="1px solid transparent "
        _hover={{ border:"1px solid  rgba(223, 223, 223, 1) " }}
        mt="20px"
        bg= "transparent"
        mr="30px"
        >

        <Text
        fontFamily="'Plus Jakarta Sans', sans-serif"
        color="rgba(4, 164, 244, 1)"
        fontWeight="500"
        fontSize="14px"
        lineHeight="21px"
        >
          Sign In to a different account
        </Text>
        </Button>
        <Button
        onClick={handlenextInClick}
        border="1px solid transparent "
        _hover={{ border:"1px solid  rgba(223, 223, 223, 1) " }}
        mt="20px"
        bg= "transparent"
        mr="30px"
        >

        <Text
        fontFamily="'Plus Jakarta Sans', sans-serif"
        color="rgba(4, 164, 244, 1)"
        fontWeight="500"
        fontSize="14px"
        lineHeight="21px"
        >
          Next
        </Text>
        </Button>
        
</Box>
        </Box>
        </Center>
    
    </Container>
    </>
  )
}

export default Forgot