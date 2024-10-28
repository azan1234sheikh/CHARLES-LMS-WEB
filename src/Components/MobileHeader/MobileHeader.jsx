
import { Center, ChakraProvider, Container,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input,InputGroup,InputRightElement,IconButton, Button, Flex, Box} from '@chakra-ui/react';
    import React from 'react'
    import { Image } from '@chakra-ui/react';
 import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
const MobileHeader = () => {
    const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault(); 
    navigate('/Signin'); // Redirects to the /signup route
  };
  const navigatebtn = useNavigate();
  const handleAccount=()=>{
    navigatebtn('/Account');
  }
  const handlenotfication=()=>{
    navigatebtn('/Notification');
  }
  const handleExplore=()=>{
    navigatebtn('/Dashboard');
  }
  return (

    <Box >
     <Flex  display={{base:"block",lg:"none"}} direction={"row"}>
     <Image  onClick={handleExplore} top={{base:"32px" ,lg:"0px"}} display={{base:"block",lg:"none"}} right={{base:"-10px",lg:"0px"}} position={"relative"} src="/Logo.svg" alt="Sidebarlogo" h="42px" w={{base:"127px,",lg:"122px"}} fit="contain" />
              
              <Link href="#" onClick={handleAccount}>
                <Image  src="/Rectangle 5997.svg"  position="relative" bottom={{base:"9px" ,lg:"33px"}} left={{base:"290px",lg:"113px"}} alt="Contrast" h="50px" w="50px" />
              </Link>
              <Link onClick={handlenotfication} href="#">
                <Image

                  src="/notif.svg"
                  alt="Image"
                  h="24px"
                  transform={{base: "translateX(229px)",lg:"translateX(0px)"}}
                  position={{base:"absolute", lg:"relative"}}
                  w="24px"
                  fit="cover"
                  top={{base:"44px" ,lg:"0px"}}
                  borderRadius="24px"
                />
              </Link>
              
     </Flex>
                
               
              
   
    </Box>

   
  )
}

export default MobileHeader