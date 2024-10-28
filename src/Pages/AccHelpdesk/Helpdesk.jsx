import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress} from '@chakra-ui/react';
    import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
    import { FiEye } from "react-icons/fi";
    import AccSidebar from '../../Components/AccSidebar/AccSidebar';
    import DatePicker from "react-datepicker";
    import Sidebar8 from '../../Components/Sidebar/sidebar';  
    import { Checkbox, CheckboxGroup } from '@chakra-ui/react'  
    import { Image,Select } from '@chakra-ui/react';
    import { useNavigate } from 'react-router-dom';
    import React, {useRef,useState, Suspense } from "react";
    import "react-datepicker/dist/react-datepicker.css";  
   import {IconButton,Card,useDisclosure, Radio, RadioGroup , Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
   
const Helpdesk = () => {
   
  return (
    <>
    <>
     <Box h="100vh">
 <Flex gap="56px" alignItems="start">
     <Sidebar8/>
     <Flex mt="30px" gap="22px" alignSelf="center" flex={1} flexDirection="column">
     <Flex
            mr={{ md: "30px", base: "0px" }}
            justifyContent="space-between"
            alignItems="start"
            gap="20px"
            flexDirection={{ md: "row", base: "column" }}
            as="header"
          >
            <Flex flexDirection="row" mt="0px" px={{ md: 0, base: "20px" }}>
              <Heading position="relative" bottom="295px" fontWeight ="500" fontSize="32px" lineHeight="36px" fontFamily="Plus Jakarta Sans" >
              Account
 
              <Link href="#">
                <Image
                  src="/notif.svg"
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
                  src="/Rectangle 5997 (1).svg"
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
              </Heading>
              
         </Flex>
         </Flex>
        </Flex>
      </Flex>
      
    <Box   ml="250px" position="relative" bottom="625px" width="1265px" bg="rgba(247, 248, 250, 1)">
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} p={4} >
       <Flex flexDirection="row">
      <AccSidebar/>
 
       <Card bottom="2px" left="42px" w="744px" h="436px">
       <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="27px" fontWeight="700" fontSize="18px" color="rgba(20, 21, 34, 1)">Notifications</Text>
        <Flex ml="12px" mt="12px">
            <Image src='./Coursea.svg' />
            <Stack mb="12px">
            <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="21px" fontWeight="500" fontSize="14px" color="rgba(20, 21, 34, 1)">What is Coursea </Text>
            <Text ml="17px"   fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
            Here for the first time? See how Coursea can help student to improve it self
             </Text>
            </Stack>
        </Flex>
           <Box ml="12px" h="1px" mt="12px" w="684px" bg="rgba(245, 245, 247, 1)"></Box>    
           <Flex ml="12px" mt="2px">
            <Image src='./lock.svg' />
            <Stack mb="12px">
            <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="21px" fontWeight="500" fontSize="14px" color="rgba(20, 21, 34, 1)">Term  & Condition </Text>
            <Text ml="17px"   fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
            Updating your privacy policy to include Substance, and our own term and privacy policy.
             </Text>
            </Stack>
        </Flex>
        <Box ml="12px" h="1px" mt="8px" w="684px" bg="rgba(245, 245, 247, 1)"></Box>    
        <Flex ml="12px" mt="2px">
            <Image src='./notify.svg' />
            <Stack mb="12px">
            <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="21px" fontWeight="500" fontSize="14px" color="rgba(20, 21, 34, 1)">Getting Started</Text>
            <Text ml="17px"   fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
            Everything you need to know to get started with Substance Coursea
             </Text>
            </Stack>
        </Flex>
         
       </Card>
       </Flex>
      
   </Grid>
   
   </Box>
 </Box>
   </>
   </>
  )
}

export default Helpdesk