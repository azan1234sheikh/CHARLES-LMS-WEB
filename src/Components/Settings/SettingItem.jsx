import React from 'react'
import {
Icon,
    VStack,
    HStack,
    IconButton,
    Spacer,
  } from "@chakra-ui/react";
  import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress,
    Card, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container} from '@chakra-ui/react';
  import { FiBell, FiChevronRight } from "react-icons/fi";
import MobileSidebar from '../MobileSidebar/MobileSidebar';
import { useNavigate } from 'react-router-dom';
import Accountsetting from '../MobileSettingComponents/Accountsetting';
import { useState } from 'react';
import Passwordsetting from '../MobileSettingComponents/Passwordsetting';

const SettingItem = ({icon,label,content: SettingData}) => {
   
  return (
<>
<Flex
    align="center"
   
    borderRadius="md"
    p={4}
    bg={"white"}
    mb={4}
  >
   
    <Accordion w={{base:"370px",sm:"768px"}} defaultIndex={[1]} allowToggle>
        <AccordionItem border={"none"}>
        
     
          <AccordionButton>
          <Flex align="center" w="100%">
             
             <Icon as={icon} boxSize={7} color="blue.500" mr={3} />
             
             <Text fontSize="md" fontWeight="medium" flex="1" textAlign="left">
               {label}
             </Text>
           
             <AccordionIcon mr={6} />
           </Flex>
          </AccordionButton>
       
           <AccordionPanel pb={0}>
            
           {/* <Accountsetting content={content}/> */}
            <SettingData/>
           
           </AccordionPanel>
          
          
        </AccordionItem>

        <Box>
        
        </Box>
        </Accordion>
  </Flex>
  <Flex
    justify="space-around"
    align="center"
    bg="white"
    w={{base:"100%",sm:"765px"}}
    p={0}
    position="fixed"
    bottom="0"
    left="0"
    right="0"
    boxShadow="0 -2px 6px rgba(0, 0, 0, 0.1)"
  >
    
    <MobileSidebar/>
  </Flex>


</>
  )
}

export default SettingItem