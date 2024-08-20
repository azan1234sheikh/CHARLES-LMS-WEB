import React, { useState } from 'react';
import { Center, ChakraProvider, Container,Text,Stack, FormControl, FormLabel, Input,InputGroup,InputRightElement,IconButton, Button, Flex, Box, HStack} from '@chakra-ui/react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import "../../../index.css";
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import {  useNavigate } from 'react-router-dom';
import { PinInput,PinInputField } from '@chakra-ui/react';

const Verify = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '']);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (value) => {
        if (activeIndex < 4) {
            const newOtp = [...otp];
            newOtp[activeIndex] = value;
            setOtp(newOtp);
            setActiveIndex(activeIndex + 1);
        }
    };

    const handleBackspace = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
            const newOtp = [...otp];
            newOtp[activeIndex - 1] = '';
            setOtp(newOtp);
        }
    };
    const handlebackClick = () => {
        navigate('/Forgot'); // Redirects to the /signup route
      };
    return (
        <>
            <Container>
                <Center minH="900px">
                    <Image
                        src="./image (1).png"
                        minW="605px"
                        mb="160px"
                        ml="20px"
                        h="700px"
                    />
                </Center>
                <Center minH="100vh">
                    <Box
                        border="1px solid Transparent"
                        p="0"
                        w="385px"
                        height="443px"
                        position="relative"
                        left="680px"
                        bottom="900px"
                        bg="white"
                    >
                        <Center>
                            <Box w="24px" h="24px" mr="350px" mb="30px">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 10C0 4.47715 4.47715 0 10 0H50V40C50 45.5228 45.5228 50 40 50H0V10Z" fill="#2888D6" />
                                    <path d="M24.02 32.5H20.5C19.88 32.5 19.33 32.48 18.84 32.41C16.21 32.12 15.5 30.88 15.5 27.5V22.5C15.5 19.12 16.21 17.88 18.84 17.59C19.33 17.52 19.88 17.5 20.5 17.5H23.96" stroke="#141522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M28.02 17.5H29.5C30.12 17.5 30.67 17.52 31.16 17.59C33.79 17.88 34.5 19.12 34.5 22.5V27.5C34.5 30.88 33.79 32.12 31.16 32.41C30.67 32.48 30.12 32.5 29.5 32.5H28.02" stroke="#141522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M28 15V35" stroke="#141522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24.0946 25H24.1036" stroke="#141522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20.0946 25H20.1036" stroke="#141522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Box>
                        </Center>
                        <Text mb="3" display="flex" color="background: rgba(20, 21, 34, 1);" fontWeight="500" fontSize="40px" letterSpacing="1px" lineHeight="63px" fontFamily="'Plus Jakarta Sans', sans-serif">
                            Update Your <br />Password
                        </Text>
                        <Text mb="33px" color="background: rgba(20, 21, 34, 1);" fontWeight="400" fontSize="14px" lineHeight="28px" fontFamily="'Plus Jakarta Sans', sans-serif">
                            Enter the code we sent to the phone number ending in -30
                        </Text>
                        <Box >
                        <HStack justifyContent="center" >
                            <PinInput size="lg" type='alphanumeric'>
                                <PinInputField boxSize="85px" fontSize="2xl"/>
                                <PinInputField boxSize="85px" fontSize="2xl"/>
                                <PinInputField boxSize="85px"fontSize="2xl" />
                                <PinInputField boxSize="85px" fontSize="2xl"/>
                            </PinInput>
                        </HStack>
                        </Box>
                        <Flex >
                        <Text onClick={handlebackClick} mt="32px"
                        color="rgba(156, 156, 164, 1);" fontWeight="500" fontSize="14px" letterSpacing="1px" lineHeight="21px" fontFamily="'Plus Jakarta Sans', sans-serif"
                        >Back</Text>    
                         <Text ml="183px" mt="35px"
                        color="rgba(4, 164, 244, 1);" fontWeight="500" fontSize="14px" letterSpacing="1px" lineHeight="21px" fontFamily="'Plus Jakarta Sans', sans-serif"
                        >Don't Recieve Code </Text>   
                        </Flex>
                        <Box
                          mt="60px"   // Margin-bottom for spacing
                         bg="rgba(245, 245, 247, 1)" // Background color for the line
                         w="385px"    // Width of the line
                         h="1px"      // Height of the line (thickness)
                         />
                        <Text  mt="35px"
                        color="rgba(4, 164, 244, 1);" fontWeight="500" fontSize="14px" letterSpacing="1px" lineHeight="21px" fontFamily="'Plus Jakarta Sans', sans-serif"
                        >Get your code with another way </Text>
                    </Box>
                </Center>
            </Container>
        </>
    );
};

export default Verify;