import React, { useState } from "react";
import {
  Center,
  ChakraProvider,
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
} from "@chakra-ui/react";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import "../../../index.css";
import { FiEye } from "react-icons/fi";
import { Icon } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData || {};
    const payload = {
      // name: "test user",
      username: "test" + email,
      email,
      password,
      type: "student",
    };

    const options = {
      url: "http://localhost:9000/api/user/signup",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: payload,
    };

    axios(options)
      .then(() => {
        toast.success("Signup successful!");
        navigate("/Signin");
      })
      .catch((error) => {
        toast.error(
          error.response?.data?.message ||
            "An error occurred. Please try again."
        );
      });

    console.log(formData, "formData");
  };

  return (
    <>
      <Container>
        <Center minH="900px">
          <Image
            src="./public/image (1).png"
            minW="675px"
            mb="160px"
            ml="160px"
            h="700px"
          ></Image>
        </Center>
        <Center minH="100vh">
          <Box
            border="1px solid Transparent"
            p="0"
            w="385px"
            height="677px"
            position="relative" // ensure proper positioning for `left` and `bottom`
            left="835px"
            bottom="850px"
            bg="white "
          >
            <Text
              mb="3"
              display="flex"
              color="background: rgba(20, 21, 34, 1);"
              fontWeight="500"
              fontSize="40px"
              letterSpacing="1px"
              lineHeight="63px"
              fontFamily="'Plus Jakarta Sans', sans-serif"
            >
              Create An Account
            </Text>
            <Text
              mb="3"
              color="background: rgba(20, 21, 34, 1);"
              fontWeight="400"
              fontSize="14px"
              lineHeight="28px"
              fontFamily="'Plus Jakarta Sans', sans-serif"
            >
              Already have an Account ?{" "}
              <span
                style={{
                  color: "rgba(4, 164, 244, 1)",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Login
              </span>
            </Text>
            <Stack>
              <FormControl mt="8">
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
              <FormControl mt="8">
                <FormLabel
                  htmlFor="Email"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  Confirm Email Address
                </FormLabel>
                <Input
                  w="385px"
                  _hover={{ border: "1px solid rgba(255, 187, 84, 1)" }}
                  borderRadius="10px"
                  h="50px"
                  name="confirm_email"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  placeholder="Re Enter Your Email"
                  onChange={handleChange}
                />
              </FormControl>
            </Stack>
            <Stack>
              <FormControl mt="6">
                <FormLabel
                  htmlFor="Email"
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
            <Flex></Flex>

            <Button
              w="380px"
              h="50px"
              bg="white"
              borderRadius="10px"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              border="1px  solid rgba(235, 234, 237, 1)"
              _hover={{ color: "#000000" }}
              color="rgba(235, 234, 237, 1)"
              fontWeight="500"
              size="14px"
              mt="25px"
              padding="8px ,16px,8px,16px"
              gap="10px"
              onClick={handleSubmit}
            >
              Create
            </Button>

            <Text
              fontFamily="'Plus Jakarta Sans', sans-serif"
              color=" rgba(235, 234, 237, 1)"
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

export default Signup;
