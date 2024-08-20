import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress} from '@chakra-ui/react';
    import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
  import AccSidebar from '../../Components/AccSidebar/AccSidebar';
    import DatePicker from "react-datepicker";
import Sidebar8 from '../../Components/Sidebar/sidebar';    
    import { Image,Select } from '@chakra-ui/react';
   import { useNavigate } from 'react-router-dom';
   import React, {useRef,useState, Suspense } from "react";
   import {FaPlay, FaPause } from "react-icons/fa";
   import "react-datepicker/dist/react-datepicker.css";  
   import {IconButton,Card,InputRightElement,InputGroup , Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
const Account = (
    {
        beginnerButton = "Beginner",
        courseTitle = "Update And Manage Your Account",
        CourseCat = "UI UX Design . Apps Design",
        studentName = "Emerson Sipr",
        reviewText = "4.5",
        Duration = "10:00",
        ratio= "1/5 Done",
        Modules = "5 Modules",
        Module1 = "Introduction",
         Module2 = "Intro to UI UX Design",
         Module3 = "Usability Test",
         Module4 = "Create Usability Test",
         Module5 = "How to Implement",
         Module6 = "Post Testing",
        mentorfollow = "+ Follow  Mentor",
        CourseDesccription= "The community's need for applications that can facilitate daily activities is increasing as technology advances. Currently, many companies are looking for developers so that they can sell products (goods or services) that can reach wider buyers online. To become a developer, we are not required to understand all the science of design, but at least we can know the basics so that we can realize the design into code into a complete application more effectively. This class is the right medium to learn design and coding at the same time. With Mentor, you will create useful applications by adding animations to applications that are made to make them more interesting and interactive                                                                                           Our expert Mentors will explain how to create a furniture application from the design to code stage using the flagship Google Flutter SDK framework. By using the popular design tool Figma, you will learn the basics of creating interactive mockups as an illustration into an application or commonly known as a prototype. Then you will learn to apply animation between screens to make the prototype come alive. After that, the process will continue to slicing with a variety of ready-to-use Flutter Widgets so that the developer's work can be more efficient, saving time and effor This class is suitable for those of you who want to deepen complete mobile application development on the front-end side. Later the application that is successfully built can become a portfolio for applying for work or your personal business needs. If you encounter difficulties while studying, please ask our Mentor directly through the Telegram group, OK? Register now and we are waiting in class!",
        ...props}
) => {
    const videoRef = useRef(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const[isPlaying , setisplaying] = useState(false);
    
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
           <Flex flexDirection="row" mt="0px" px={{ md: 0, base: "20px" }}>
             <Heading position="relative" bottom="295px" fontWeight ="500" fontSize="32px" lineHeight="36px" fontFamily="Plus Jakarta Sans" >
             Account

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
      <Card bottom="2px" left="42px" w="744px" h="902px">
      <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="27px" fontWeight="700" fontSize="18px" color="rgba(20, 21, 34, 1)">Edit Profile</Text>

        <Stack>
        <Box mt="33px" ml="22px" h="150px" bg="rgba(217, 217, 217, 1)" w="150px" borderRadius="123px" />  
        <Flex position="relative" left="71px" bottom="100px" >   
        <Text mb="112px" ml="120px"  fontFamily="Plus Jakarta Sans" lineHeight="21px" fontWeight="500" fontSize="14px" color="rgba(20, 21, 34, 1)">Upload Photo</Text>
        <Text mb="12px" mt="30px" transform="translateX(-90px)" fontFamily="Plus Jakarta Sans" lineHeight="21px" fontWeight="500" fontSize="14px" color="rgba(132, 129, 138, 1)">300x300 and max 2 MB</Text>
        <Image mt="32px" transform="translateX(-320px)" src="./public/Upload.svg" alt="Television" h="74px" w="74px" />
        </Flex> 
        <Stack ml="22px" transform="translateY(-120px)" >  
                <Text  fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                    Full Name
                </Text>
                    <FormControl mb="3px" >
                     {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                     <Input  border="1px solid #979797" aria-label="Toggle Password Visibility" w="400px"  variant="ghost" _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Enter Full Name' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Enter Full Name'/>
                     <Box  position="relative" left="433px" bottom="55px" w="54px" h="24px" >
                     
                     </Box>
                   </FormControl>
                   <Text  fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                    Location
                    </Text>
                   <Select mt="2px" border="1px solid gray" h="50px" w="400px" placeholder='Lahore'>
                    <option value='option1'>Islamabad</option>
                   <option value='option2'>karachi</option>
                   <option value='option3'>Peshawar</option>
                    </Select>
                     <Stack mt="31px">

                     
                     <Text  fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                    Birthday
                    </Text>   
                   
                    <FormControl mt="2">
                    <InputGroup>
                    <DatePicker
                       selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      customInput ={<Input w="400px" h="50px" placeholder="Select date" />}/>
                    <InputRightElement>
                      <Image mt="2px" transform="translateX(-340px)" src="./public/celendar.svg" alt="Television" h="24px" w="24px"/>
                    </InputRightElement>
                   </InputGroup>
             </FormControl>
                   
                   </Stack>
              <Stack mt="31px">
                     <Text  fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                    Phone Number
                    </Text>   
                   
                    <FormControl mt="2">
                    <InputGroup>
                    <Input w="400px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }} borderRadius="10px"  h="50px" name='Password' fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Enter Phone Number'/>
                     </InputGroup>
             </FormControl>
              </Stack>
               <Stack mt="27px">
               <Text  fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                    Bio
                </Text>
                    <FormControl mb="3px" >
                     {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                     <Input  border="1px solid #979797" aria-label="Toggle Password Visibility" w="400px"  variant="ghost" _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Enter Full Name' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Write A brief Bio About Yourself'/>
                     <Box  position="relative" left="433px" bottom="55px" w="54px" h="24px" >
                     
                     </Box>
                   </FormControl>
               </Stack>
        </Stack>   
        </Stack>
      </Card>
      </Flex>
    
    
  
      

  </Grid>
  
  </Box>
</Box>
 </>
  )
}

export default Account