import React, { useState } from 'react';
import axios from "axios";

import {
  ChakraProvider,
  Box,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Flex,
  Text,
  Stack,
} from '@chakra-ui/react';
import { FiEye } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Signin2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData || {};
    const payload = {
      email,
      password,
    };

    const options = {
      url: "http://localhost:9000/api/user/login",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: payload,
    };

    axios(options)
      .then(() => {
        toast.success("login successful!");
        navigate("/Explorecourse");
      })
      .catch((error) => {
        toast.error(
          error.response?.data?.message ||
            "An error occurred. Please try again."
        );
      });

    console.log(formData, "formData");
  };
  const handleForgotClick = () => {
    navigate('/Forgot'); // Redirects to the /Forgot route
  };


  return (
    <>
      <ChakraProvider >
        <Box w={{base:"500px", lg:"1550px"}} h={{base:"300px",lg:"414px"}} bg="linear-gradient(180deg, #2885D1 0%, #26BDD9 100%)">
          <Image position="relative" top="90px" left="693px" w="130px" h="46px" src='./Minlogo.svg' alt='Logo' />

          <Modal  isOpen={true}>
            <ModalContent  mt={{base:"100px",lg:"200px"}} w={{base:"300px", lg:"353px"}} h={{base:"496px",lg:"494px"}}>
              <ModalHeader ml="35px" mt="15px" alignContent="center" color="background: rgba(20, 21, 34, 1);" fontWeight="500" fontSize="24px" letterSpacing="1px" lineHeight="36px" fontFamily="'Plus Jakarta Sans', sans-serif">
                Welcome To LMS
              </ModalHeader>
              <ModalHeader mt="-23px" ml="65px" alignContent="center" color="rgba(156, 156, 164, 1)" fontWeight="400" fontSize="14px" letterSpacing="1px" lineHeight="28px" fontFamily="'Plus Jakarta Sans', sans-serif">Login to Continue</ModalHeader>
              <ModalBody>
                <Stack>
                  <FormControl mt="5">
                    <FormLabel htmlFor='email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel>
                    <Input
                      onChange={handleChange}
                      w={{base:"240px",lg:"293px"}}
                      _hover={{ border: "1px solid rgba(255, 187, 84, 1)" }}
                      borderRadius="10px"
                      h="50px"
                      name='email' // Corrected to 'email'
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      placeholder='Enter Your Email'
                    />
                  </FormControl>
                </Stack>
                <Stack>
                  <FormControl mt="6">
                    <FormLabel htmlFor='password' fontFamily="'Plus Jakarta Sans', sans-serif">Password</FormLabel>
                    <InputGroup>
                      <Input
                         w={{base:"240px",lg:"293px"}}
                        onChange={handleChange}
                        _hover={{ border: "1px solid rgba(255, 187, 84, 1)" }}
                        borderRadius="10px"
                        h="50px"
                        name='password' // Corrected to 'password'
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        placeholder='Enter Your Password'
                      />
                      <InputRightElement>
                        <IconButton mt="12px" mr="22px"
                          icon={<FiEye />}
                          variant="ghost"
                          aria-label="Toggle Password Visibility"
                        />
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                </Stack>
                <Flex>
                  <Text onClick={handleForgotClick} mt="48px" color="rgba(156, 156, 164, 1)" fontWeight="500" fontSize="14px" lineHeight="21px" fontFamily="'Plus Jakarta Sans', sans-serif">
                    Forgot Password
                  </Text>
                  <Button
                    bg="rgba(38, 189, 217, 1)"
                    mt="9"
                    fontWeight="500"
                    fontSize="14px"
                    borderRadius="10px"
                    p="13px 24px"
                    lineHeight="21px"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    w="150px"
                    h="40px"
                    ml="29px"
                    _hover={{ bg: "#26bbd5" }}
                    onClick={handleSubmit}
                  >
                    Sign In
                  </Button>
                </Flex>
              </ModalBody>
              <ModalFooter mr="33px">
                <Text mb="3" color="background: rgba(20, 21, 34, 1)" fontWeight="400" fontSize="14px" lineHeight="28px" fontFamily="'Plus Jakarta Sans', sans-serif">
                  New User? <Button _hover={{ border: "1px solid #d7d7d7" }} border="1px solid Transparent" bg="transparent"><span style={{ color: 'rgba(4, 164, 244, 1)', fontWeight: 500, fontSize: '14px', lineHeight: '21px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Create an account</span></Button>
                </Text>
              </ModalFooter>
            </ModalContent>
            <ToastContainer />
          </Modal>
          <Box bg={{base:"white"}}></Box>
        </Box>
      </ChakraProvider>
    </>
  )
}

export default Signin2;
