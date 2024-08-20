import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress,
    Card, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container} from '@chakra-ui/react';
    import { Image,Select } from '@chakra-ui/react';
   import { useNavigate } from 'react-router-dom';
   import React, { Suspense } from "react";
   import { Switch, Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
   import Sidebar8 from '../../Components/Sidebar/sidebar';
const Notification = () => {
  return (
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
             <Flex flexDirection="row" mt="6px" px={{ md: 0, base: "20px" }}>
               <Heading position="relative" bottom="290px" fontWeight ="500" fontSize="32px" lineHeight="48px" fontFamily="Plus Jakarta Sans" >
               Notifications

               <Link href="#">
                 <Image
                   src="./public/notif.svg"
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
                   src="./public/Rectangle 5997 (1).svg"
                   alt="Image"
                   h="50px"
                   position="relative"
                   left="1002px"
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
       <Box   ml="250px" position="relative" bottom="615px" h="900px" width="1265px" bg="rgba(247, 248, 250, 1)">
              
        <Card  left="64px" top="35px"  w="1122px" h="639px" >
        <Text ml="12px" mt="12px" fontWeight="700" color="black" fontSize="18px" lineHeight="27px" fontFamily="Plus Jakarta Sans">
          Notifications 
          </Text>
           <Stack>
            <Flex>
                
            <Box mt="32px" ml="12px" h="50px" bg="rgba(217, 243, 248, 1)" w="50px" borderRadius="24px" >
                <Image src='./public/Msg.svg' w="23px" h="23px" ml="14px" mt="12px" />
            </Box>
            <Text mt="25px" ml="12px" fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">New Courses </Text><Text fontWeight="500" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans" mt="29px" transform="translateX(781px)" > 2m ago</Text>
            <Text mt="62px" transform="translateX(-135px)" flexDirection="column" fontWeight="500" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">Brian tylor added new course. Check this out!</Text>

            </Flex>
           
           </Stack>
           <Box mt="32px" ml="20px" w="1064px" bg="rgba(245, 245, 247, 1)" h="1px"></Box>
           <Stack>
            <Flex mt="11px">
                
            <Box mt="32px" ml="12px" h="50px" bg="rgba(217, 217, 217, 1)" w="50px" borderRadius="24px" >
               
            </Box>
            <Text mt="25px" ml="12px" fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">Emery Korsgaard</Text><Text fontWeight="500" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans" mt="29px" transform="translateX(761px)" > 2m ago</Text>
            <Text mt="62px" transform="translateX(-163px)" flexDirection="column" fontWeight="500" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">You have new message from Emery</Text>

            </Flex>
           
           </Stack>
           <Box mt="32px" ml="20px" w="1064px" bg="rgba(245, 245, 247, 1)" h="1px"></Box>
           <Stack>
            <Flex mt="11px">
                
            <Box mt="32px" ml="12px" h="50px" bg="rgba(217, 243, 248, 1)" w="50px" borderRadius="24px" >
            <Image src='./public/setting.svg' w="23px" h="23px" ml="14px" mt="12px" />
            </Box>
            <Text mt="25px" ml="12px" fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">System</Text><Text fontWeight="500" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans" mt="29px" transform="translateX(821px)" > 2m ago</Text>
            <Text mt="62px" transform="translateX(-98px)" flexDirection="column" fontWeight="500" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">Update your Information</Text>

            </Flex>
           
           </Stack>
           <Box mt="32px" ml="20px" w="1064px" bg="rgba(245, 245, 247, 1)" h="1px"></Box>
           <Stack>
            <Flex mt="11px">
                
            <Box mt="32px" ml="12px" h="50px" bg="rgba(217, 243, 248, 1)" w="50px" borderRadius="24px" >
            <Image src='./public/mycourse.svg' w="23px" h="23px" ml="14px" mt="12px" />
            </Box>
            <Text mt="25px" ml="12px" fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">My Course</Text>
            <Text mt="62px" transform="translateX(-73px)" flexDirection="column" fontWeight="500" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">Come on other LMS modules have been waiting to be completed</Text>

            </Flex>
           
           </Stack>
           <Box mt="32px" ml="20px" w="1064px" bg="rgba(245, 245, 247, 1)" h="1px"></Box>
           <Stack>
            <Flex mt="11px">
                
            <Box mt="32px" ml="12px" h="50px" bg="rgba(217, 217, 217, 1)" w="50px" borderRadius="24px" >
               
            </Box>
            <Text mt="25px" ml="12px" fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">Emerson Levin</Text>
            <Text mt="62px" transform="translateX(-92px)" flexDirection="column" fontWeight="500" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">You have new message from Emerson</Text>

            </Flex>
           
           </Stack>
           
        </Card>
       
    </Box>
  </Box>
   </>

  )
}

export default Notification