import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress} from '@chakra-ui/react';
    import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
    import { Image,Select } from '@chakra-ui/react';
    import { useNavigate } from 'react-router-dom';
   import React, {useRef,useState, Suspense } from "react";
   import {FaPlay, FaPause } from "react-icons/fa";
   import "react-datepicker/dist/react-datepicker.css";  
   import {IconButton,useDisclosure,Card,InputRightElement,InputGroup , Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
import Helpdesk from '../../Pages/AccHelpdesk/Helpdesk';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
const AccSidebar = ({
    courseTitle = "Update And Manage Your Account",
    ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleDelete = () => {
    setIsVisible(false); 
  };
  const { isOpen: isModal3Open, onOpen: onModal3Open, onClose: onModal3Close } = useDisclosure();

    const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
  const handlebtn=()=>{
    navigate("/Account");
 }
 const handlesetting=()=>{
  navigate("/AccountSetting");
}
const handleAnnouncment=()=>{
  navigate("/AccountNotification");
}
const handleHelpdesk=()=>{
  navigate("/Helpdesk");
}
  return (
   <>
   <Card borderRadius="18px"
    w={{base:"100%",lg:"330px"}} 
    h={{base:"full",lg:"532px"}} 
    bg="white" 
    ml={{base:"0px",lg:"3px"}}>
      <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="36px" fontWeight="700" fontSize={{base:"18px",md:"24px"}} color="rgba(20, 21, 34, 1)">{courseTitle}</Text>

        <Box 
      {...props}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 0 } }}
      
      pt={{ base: "0px", sm: "30px" }}
      gap="50px"
      display="flex"
      flexDirection="column"
       bgColor=" #ffffff;"
      h="full"
      top="0px"
      overflow="auto"
      px="12px"
      sx={{ position: "sticky" }}
    >
      <Box
       
        menuItemStyles={{
          button: {
            padding: "1",
            gap: "20px",
           
            fontWeight: 400,
            fontSize: "14px",
            borderRadius: "10px",
            [`&:hover, &.ps-active`]: { color: "#141522", backgroundColor: "#f5f5f7 !important" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "20px" } }}
        as={Menu}
        pl="6px"
        display="flex"
        alignSelf="stretch"
        flexDirection="column"
        w="300px"
      >
        <Box mt="12px" >
        <MenuItem onClick={handlebtn}  icon={<Image src="/Editprofile.svg" alt="Grid" h="18px" w="18px" />}>Edit Profile</MenuItem>
        </Box>
        <Box mt="12px">
        <MenuItem  onClick={handlesetting} icon={<Image src="/AccountSetting.svg" alt="Lock" h="18px" w="18px" />}>
          Account Settings
        </MenuItem>
        </Box>
        <Box mt="12px">
        <MenuItem onClick={handleAnnouncment} icon={<Image src="/AccSettings.svg" alt="User" h="18px" w="18px" />}>
          Announcement
        </MenuItem>
        </Box>
        <Box mt="12px">
        <MenuItem onClick={handleHelpdesk} icon={<Image src="/Helpdesk.svg" alt="Television" h="18px" w="18px" />}>Helpdesk</MenuItem>
        </Box>
      </Box>
    </Box>                

    <Button
              onClick={onOpen}
             w={{base:"auto",md:"290px"}}
             h="60px"
             bg="white"
             borderRadius="1px"
             fontFamily="'Plus Jakarta Sans', sans-serif"
             border="1px  solid rgba(235, 234, 237, 1)"
             _hover={{ color: "#000000"  }}
             color="#000000"
             fontWeight="500"
             size="14px"
             ml={{base:"1px",md:"18px"}}
             mb="55px"
             padding="8px ,16px,8px,16px"
             gap="10px"
             >Logout
             </Button>
      </Card>
      <Modal  blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  top="125px" ml="82px" alignItems="center" w="375px" h="280px"  >
          <ModalHeader>
            <Center>
            <Image mt="22px" w="48px" h="48px" src="./Round-icon.svg"/>

            </Center>
            
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
            <Text ml="46px" fontFamily="Inter" fontSize="24px" lineHeight="32px" fontWeight='600' mb='1rem'>
              Logout From Account
            </Text>
            <Text  ml="16px" fontFamily="Inter" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="21px" fontWeight='400' mb='1rem'>
            Are you sure want logout from Pristia’s Account?
            </Text>
            </Stack>
          </ModalBody>

          <ModalFooter>
          <Flex>
                   <Button fontSize="14px" bottom="32px" position="relative"border="1px solid black " color="black" left="10px" h="50px" fontFamily="Plus Jakarta Sans" bg="#ffffff" fontWeight={500} w="150px" borderRadius="10px">
                      Cancel
                       </Button>
                       <Button ml="12px" fontSize="14px" onClick={handleDelete} colorScheme="transparent"  bottom="32px" position="relative" left="10px" h="50px" fontFamily="Plus Jakarta Sans" bg="rgba(38, 189, 217, 1)" fontWeight={500} w="150px" borderRadius="10px">
                      Logout
                       </Button>
                       </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
   </>
  )
}

export default AccSidebar