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
  Box,
} from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
      username: "test" + email,
      email,
      password,
      type: "student",
    };

    try {
      await axios.post("http://localhost:9000/api/user/signup", payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      toast.success("Signup successful!");
      navigate("/Signin");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
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
          />
        </Center>
        <Center minH="100vh">
          <Box
            border="1px solid Transparent"
            p="0"
            w="385px"
            height="677px"
            position="relative"
            left="835px"
            bottom="850px"
            bg="white"
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
              Already have an Account?{" "}
              <span
                style={{
                  color: "rgba(4, 164, 244, 1)",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                onClick={() => navigate("/Signin")}
              >
                Login
              </span>
            </Text>
            <Stack>
              <FormControl mt="8">
                <FormLabel fontFamily="'Plus Jakarta Sans', sans-serif">
                  Email Address
                </FormLabel>
                <Input
                  w="385px"
                  _hover={{ border: "1px solid rgba(255, 187, 84, 1)" }}
                  borderRadius="10px"
                  h="50px"
                  name="email"
                  placeholder="Enter Your Email"
                  onChange={handleChange}
                />
              </FormControl>
            </Stack>
            <Stack>
              <FormControl mt="8">
                <FormLabel fontFamily="'Plus Jakarta Sans', sans-serif">
                  Confirm Email Address
                </FormLabel>
                <Input
                  w="385px"
                  _hover={{ border: "1px solid rgba(255, 187, 84, 1)" }}
                  borderRadius="10px"
                  h="50px"
                  name="confirm_email"
                  placeholder="Re Enter Your Email"
                  onChange={handleChange}
                />
              </FormControl>
            </Stack>
            <Stack>
              <FormControl mt="6">
                <FormLabel fontFamily="'Plus Jakarta Sans', sans-serif">
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    w="385px"
                    _hover={{ border: "1px solid rgba(255, 187, 84, 1)" }}
                    borderRadius="10px"
                    h="50px"
                    name="password"
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
            <Button
              w="380px"
              h="50px"
              bg="white"
              borderRadius="10px"
              border="1px solid rgba(235, 234, 237, 1)"
              _hover={{ color: "#000000" }}
              color="rgba(235, 234, 237, 1)"
              fontWeight="500"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              mt="25px"
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
        <ToastContainer />
      </Container>
    </>
  );
};

export default Signup;
