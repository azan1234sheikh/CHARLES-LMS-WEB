import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress} from '@chakra-ui/react';
    import { Image } from '@chakra-ui/react';
   import { useNavigate } from 'react-router-dom';
   import React, {useRef,useState, Suspense } from "react";
   import {FaPlay, FaPause } from "react-icons/fa";
   import { AspectRatio } from '@chakra-ui/react'
   import {IconButton,Card   , Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
   import DatePicker from "react-datepicker";
   import "react-datepicker/dist/react-datepicker.css"; 
   import Coursedetail from '../Data/Coursedetail';
const AccountComponent = ({
    figmaprototype=`Let’s return to design thinking. Over time designers have built\n up their own body of approaches to solving classes of problems.`,
    Heading="1.Make a simple animation from figma prototype"
}) => {
    const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDatePickerOpen(false); // Close date picker after selecting a date
  };
  return (
    <> 
     <Stack   ml="2px" mt="22px">
         <Text   fontWeight="500" color="black" fontSize={{base:"14px",md:"18px"}} lineHeight="27px" fontFamily="Plus Jakarta Sans">
           {Heading}
        </Text>
        <Text whiteSpace={{base:"pre-line" ,lg:"collapse"}}    fontWeight="400" color="#000000" fontSize={{base:"9px",md:"14px"}} lineHeight="28px" fontFamily="Plus Jakarta Sans">
        {figmaprototype}
        </Text>
        <Flex>
           <Button 
         bg=" #ffffff;
"         mt="1px" 
         fontWeight="500"
         fontSize="14px"
         color="black"
         borderRadius="10px"
         p="13px 24px" // Correct padding syntax
         lineHeight="21px"
         fontFamily="'Plus Jakarta Sans', sans-serif"
         h="50px"
         border="1px solid gray"
         left="9px" // Optional: add margin-left to separate the button from the text
         _hover={{ bg: "#cbcbcb"  }} 
         onClick={() => setIsDatePickerOpen((prev) => !prev)}
         w={{base:"100px",lg:"139px"}}
       >
        Celendar
       </Button>
       {isDatePickerOpen && (
        <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        inline // This shows the date picker inline, you can remove this for a popup
      />
       )}   <Button 
         bg=" rgba(38, 189, 217, 1);
"         mt="1px" 
         fontWeight="500"
         fontSize="14px"
         borderRadius="10px"
         p="13px 24px" // Correct padding syntax
         lineHeight="21px"
         fontFamily="'Plus Jakarta Sans', sans-serif"
         w={{base:"100px",lg:"139px"}}
         h="50px"
         left="29px" // Optional: add margin-left to separate the button from the text
         _hover={{ bg: "#26bbd5"  }} 
       >
        Detail 
       </Button>
       <Text mt={{base:"53px",lg:"12px"}} ml={{base:"-150px",lg:"202px"}}  fontWeight="400" color="black" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
       40 Students Collected
        </Text>
           </Flex>
            </Stack>
    </>

  )
}

export default AccountComponent