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
   import {IconButton,Card, Radio, RadioGroup  ,Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'



 const AccountNotification = () => {
  const [value, setValue] = useState('0')
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

      <Card bottom="2px" left="42px" w="744px" h="1065px">
      <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="27px" fontWeight="700" fontSize="18px" color="rgba(20, 21, 34, 1)">Notifications</Text>
      <Stack>
      <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="21px" fontWeight="500" fontSize="14px" color="rgba(20, 21, 34, 1)">Mobile Push Notifications</Text>
      <Select ml="12px" w="400px" h="50px" mt="12px" placeholder='Select option'>
                   <option value='option3'>All new Messages</option>
                  <option value='option1'>Turn On</option>
                   <option value='option2'>Turn Off</option>
                    </Select>
      </Stack>
      <Box ml="12px" h="1px" mt="32px" w="684px" bg="rgba(245, 245, 247, 1)"></Box>    
      <Stack>
      <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="21px" fontWeight="500" fontSize="14px" color="rgba(20, 21, 34, 1)">Email Notifications</Text>
      <Text ml="17px"   fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
      When you’re busy or not online, Substance can send you email notifications for any <br/>new direct messages or mentions of your name.
        </Text>
      </Stack>  
      <Box ml="12px" h="1px" mt="32px" w="684px" bg="rgba(245, 245, 247, 1)"></Box>    
       <Stack>
       <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="21px" fontWeight="500" fontSize="14px" color="rgba(20, 21, 34, 1)">Email Notifications</Text>
      
              <RadioGroup onChange={setValue} value={value}>
      <Stack ml="12px" direction='column'>
        <Radio value='1'  colorScheme='orange' ><Text fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">Send me email notification</Text></Radio>
        <Radio value='2'  colorScheme='orange' ><Text fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">Once an hour at most</Text></Radio>
        <Radio value='3' colorScheme='orange' ><Text fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">Never</Text></Radio>

      </Stack>
    </RadioGroup>
       </Stack>
       <Box ml="12px" h="1px" mt="32px" w="684px" bg="rgba(245, 245, 247, 1)"></Box>    
       <Stack>
       <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="21px" fontWeight="500" fontSize="14px" color="rgba(20, 21, 34, 1)">Email News and Updates</Text>
      <Text ml="17px"   fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
      From time to time, we’d like to send you emails with interesting news about<br/> Substance and your workspace. You can choose which of these updates you’d like<br/> to receive 
        </Text>
        <Stack spacing={2} direction='column' ml="12px">
        <CheckboxGroup >
        <Checkbox size="lg"   iconColor='rgba(38, 189, 217, 1)' defaultUnChecked><Text fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">Tips and tricks</Text></Checkbox>
        <Checkbox size="lg" iconColor='rgba(38, 189, 217, 1)' defaultUnChecked><Text fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">Offers and Promotions</Text></Checkbox>
        <Checkbox size="lg" iconColor='rgba(38, 189, 217, 1)' defaultUnChecked><Text fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">Research Opportunities</Text></Checkbox>
        <Checkbox size="lg" iconColor='rgba(38, 189, 217, 1)' defaultUnChecked><Text fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">Newsletter</Text></Checkbox>



        </CheckboxGroup>
        </Stack>
       </Stack>
       <Box ml="12px" h="1px" mt="32px" w="684px" bg="rgba(245, 245, 247, 1)"></Box>    
       <Text mt="12px" ml="17px"   fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
       If you opt out of the above, note that we’ll still send you important administrative<br/> emails, such as password resets.
        </Text>
        <Text mt="12px" ml="17px"   fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
        We will use this email address:
        <Box as="span" color="black"> pristia@gmal.com</Box> 
        <Box as="span" color="rgba(255, 187, 84, 1)">AccountNotification</Box> 

        </Text>
      </Card>
      </Flex>

  </Grid>
  
  </Box>
</Box>
  </>
  </>
  )
   
}

export default AccountNotification;