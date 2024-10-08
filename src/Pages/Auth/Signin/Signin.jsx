
import React, { useState } from "react";
import {
  Center,
  Container,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Flex,
  Box,
  Image,
  Icon
} from "@chakra-ui/react";
import "../../../index.css";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();
  const handleForgotclick = () => {
    navigate("/Forgot"); // Redirects to the /signup route
  };
  const handleSignupClick = () => {
    navigate("/Signup"); // Redirects to the /signup route
  };
 

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
      <Container>
        <Center minH="900px">
          <Image
            src="./image (1).png"
            minW="675px"
            mb="160px"   
            h="700px"
          />
        </Center>
  
        <Center minH="100vh">
          <Box
            border="1px solid Transparent"
            p="0"
            w="385px"
            height="677px"
            position="relative"
            left="700px"
            bottom="850px"
            bg="white"
          >
            <Text
              mb="3"
              color="background: rgba(20, 21, 34, 1);"
              fontWeight="500"
              fontSize="42px"
              letterSpacing="2px"
              lineHeight="63px"
              fontFamily="'Plus Jakarta Sans', sans-serif"
            >
              Sign In
            </Text>
            <Text
              mb="3"
              color="background: rgba(20, 21, 34, 1);"
              fontWeight="400"
              fontSize="14px"
              lineHeight="28px"
              fontFamily="'Plus Jakarta Sans', sans-serif"
            >
              New User?{" "}
              <Button
                onClick={handleSignupClick}
                _hover={{ border: "1px solid #d7d7d7" }}
                border="1px solid Transparent"
                bg="transparent"
              >
                <span
                  style={{
                    color: "rgba(4, 164, 244, 1)",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Create an account
                </span>
              </Button>
            </Text>
            <Stack>
              <FormControl mt="5">
                <FormLabel
                  htmlFor="Email"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  Email Address
                </FormLabel>
  
                <Input
                  w="385px"
                  _hover={{ border: "1px solid rgba(255, 187, 84, 1)" }}
                  borderRadius="10px"
                  h="50px"
                  name="email"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  placeholder="Enter Your Email"
                  onChange={handleChange}
                />
              </FormControl>
            </Stack>
            <Stack>
              <FormControl mt="6">
                <FormLabel
                  htmlFor="Password"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    w="385px"
                    _hover={{ border: "1px solid rgba(255, 187, 84, 1)" }}
                    borderRadius="10px"
                    h="50px"
                    name="password"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    placeholder="Enter Your Password"
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    <IconButton
                      icon={<FiEye />}
                      variant="ghost"
                      aria-label="Toggle Password Visibility"
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <Flex>
              <Text
              onClick={handleForgotclick}
                mt="48px"
                color=" rgba(156, 156, 164, 1);"
                fontWeight="500"
                fontSize="14px"
                lineHeight="21px"
                fontFamily="'Plus Jakarta Sans', sans-serif"
              >
                Forgot Password
              </Text>
              <Button
                bg=" rgba(38, 189, 217, 1);"
                mt="9"
                fontWeight="500"
                fontSize="14px"
                borderRadius="10px"
                p="13px 24px"
                lineHeight="21px"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                w="170px"
                h="50px"
                left="99px"
                _hover={{ bg: "#26bbd5" }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </Flex>
            <Flex>
              <Box
                mt="10"
                bg="rgba(245, 245, 247, 1)"
                w="150px"
                h="1px"
              />
              <Text mt="24px" ml="30px">
                Or
              </Text>
              <Box
                mt="10"
                bg="rgba(245, 245, 247, 1)"
                w="150px"
                h="1px"
                ml="45px"
              />
            </Flex>
            <Button
              w="380px"
              h="50px"
              bg="white"
              leftIcon={
                <Image
                  w="16px"
                  h="16px"
                  src="./ic_google logo.png"
                  alt="Google Logo"
                  boxSize="24px"
                />
              }
              borderRadius="10px"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              border="1px solid rgba(235, 234, 237, 1)"
              fontWeight="500"
              color="black"
              size="14px"
              mt="25px"
              padding="8px 16px"
              gap="10px"
            >
              Sign In with Google
            </Button>
            <Button
              mt="25px"
              w="380px"
              h="50px"
              bg="white"
              leftIcon={
                <Image
                  w="16px"
                  h="16px"
                  src="./ic_fb logo.png"
                  alt="Facebook Logo"
                  boxSize="24px"
                />
              }
              borderRadius="10px"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              border="1px solid rgba(235, 234, 237, 1)"
              fontWeight="500"
              size="14px"
              padding="8px 16px"
              gap="10px"
              color="black"
            >
              Sign In with Facebook
            </Button>
            <Text
              fontFamily="'Plus Jakarta Sans', sans-serif"
              color=" #cbcbcb"
              fontWeight="400"
              fontSize="12px"
              mt="22px"
              lineHeight="18px"
            >
              Protected by reCAPTCHA and subject to the Google{" "}
              <span
                style={{
                  color: "rgba(4, 164, 244, 1)",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "18px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Privacy Policy
              </span>
              <br /> and{" "}
              <span
                style={{
                  color: "rgba(4, 164, 244, 1)",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "18px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Terms of Service
              </span>
              .
            </Text>
          </Box>
        </Center>
      </Container>
    </>
  );
};

export default Signin;
