import { Center, ChakraProvider, Container,Text,Stack, FormControl, FormLabel,UnorderedList,
  ListItem, Link,Heading, Input,InputGroup,InputRightElement,IconButton, Button, Flex, Box} from '@chakra-ui/react';
import Sidebar from '../../Components/Sidebar/sidebar.jsx';
import { Image } from '@chakra-ui/react';

import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import WeekdayColumns from '../../Components/WeekdayColumns/index.jsx';
import { useNavigate } from 'react-router-dom';
import Overview from '../../Components/CouseOverview/Overview.jsx';

import UserProfile2 from '../../Components/UserProfile2/index.jsx';
import UserProfile3 from '../../Components/UserProfile3/index.jsx';
import React, { Suspense, useState } from "react";
import UserProfile4 from '../../Components/UserProfile4/index.jsx';
import ButtonGroup from '../../Components/ButtonGroup/index.jsx';
import GraphStats from '../../Components/GraphStats/GraphStats.jsx';
import GraphStats2 from '../../Components/GraphStats/GraphStats2.jsx';
import MobileHeader from '../../Components/MobileHeader/MobileHeader.jsx';

import MobileSidebar from '../../Components/MobileSidebar/MobileSidebar.jsx';
const data = [
  { CourseHeading: "Total Course", Count: "2", Description: "Total Course",bg:"rgba(252, 217, 196, 1)" },
  { CourseHeading: "Active Course", Count: "5", Description: "Training",bg:"rgba(191, 229, 199, 1)"  },
  { CourseHeading: "TotalCourse Participants", Count: "50", Description: "People",bgImage:"./people.svg",bg:"rgba(225, 215, 250, 1)",},
];
const data1 = [
  { passPeopleText: "50 Pass People", percentageText: "55%" },
  { passPeopleText: "30 Owho did not pass", percentageText: "35%" },
  { passPeopleText: "15 In progress", percentageText: "35%" },
 
];

const data2 = [
  {
    buttonOne: "1",
    buttonTwo: "2",
    buttonThree: "3",
    buttonFour: "4",
    buttonFive: "5",
    buttonSix: "6",
    buttonSeven: "7",
  },
  {
    buttonOne: "8",
    buttonTwo: "9",
    buttonThree: "10",
    buttonFour: "11",
    buttonFive: "12",
    buttonSix: "13",
    buttonSeven: "14",
  },
  {
    buttonOne: "15",
    buttonTwo: "16",
    buttonThree: "17",
    buttonFour: "18",
    buttonFive: "19",
    buttonSix: "20",
    buttonSeven: "21",
  },
  {
    buttonOne: "22",
    buttonTwo: "23",
    buttonThree: "24",
    buttonFour: "25",
    buttonFive: "26",
    buttonSix: "27",
    buttonSeven: "28",
  },
  {
    buttonOne: "29",
    buttonTwo: "30",
    buttonThree: "31",
    buttonFour: "4",
    buttonFive: "5",
    buttonSix: "6",
    buttonSeven: "7",
  },
];

const Dashboard = () => {
  const [SearchBarValue,SetSearchBarValue] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  
  const handleClearSearch = () => {
    // Delay clearing the search bar by 1 second
    setTimeout(() => {
      SetSearchBarValue("");
    }, 100);
  };
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
  const handleManage=()=>{
    navigatebtn('/MyCourse');
  }
  

  return (
    <>
    
    <Box  overflowX={"hidden"}  bg=" rgba(247, 248, 250, 1);">
     <Flex gap="16px" alignItems="start">
     <Sidebar  />
         
     <Flex mt={{base:"0px",lg:"30px"}}  gap="22px" alignSelf="center" flex={1} flexDirection="column">
     <Box  position={"relative"} h={"0px"}  display={{base:"block",lg:"none"}}>
              <MobileHeader/>
                <FormControl bg={"white"} w="54px" left="10px" top={"13px"} >
                      <Input w="355px" value={SearchBarValue}
                       onChange={(e) => SetSearchBarValue(e.target.value)}
                       _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="46px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Search For Course Name/Mentor'/>
                      <Box  position="relative" left="293px" bottom="40px" w="54px" h="0px" >
                       <CiSearch  size={"32px"}  />
                       </Box>
                       
                       {SearchBarValue?.length > 0 && (
                        
                        <Box   position="relative"  left="293px" zIndex={1} top="-38px" w="54px" h="0px">
                          <IoMdClose onClick={handleClearSearch} size={"32px"}  />
                        </Box>
                        
                       )} 
                                             

                </FormControl>
         </Box>
            <Flex
              mr={{ md: "30px", base: "20px" }}
              justifyContent="space-between"
              alignItems="start"
              gap="20px"
              flexDirection={{ md: "row", base: "column" }}
              as="header"
            >
              <Flex mt={{base:"26px",lg:"16px"}} px={{ md: 0, base: "20px" }}>
                <UnorderedList 
                bottom={{base:"22px"}}
                fontSize={{base:"12px",lg:"16px"}}
                transform={{base:"translateY(122px)", lg:"translateY(0px)"}} 
                display={{base:"flex", lg:"flex"}}
                styleType="none"
                gap="16px" 
                alignItems="center" flexWrap="nowrap"
                overflowX="hidden"
               
                >
                  
                  <ListItem>
                  <Link href="#" cursor="pointer">
                      <Text
                        
                        color=" rgba(35, 35, 35, 1)"
                        bg= "rgba(38, 189, 217, 1)"
                        borderTopLeftRadius = "6" 
                        borderTopRightRadius= "6"
                        borderBottomLeftRadius= "6"
                        borderBottomRightRadius= "6"
                        p={{base:"3px",md:"8px",lg:"10px"}}
                        _hover={{
                          color:" rgba(217, 243, 248, 1);",
                          fontWeight: 600,
                         
                        }}
                      >
                        Overview
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" cursor="pointer">
                      <Text
                        size="label_l14_regular"
                        color=" rgba(35, 35, 35, 1);"
                        p={{base:"4px",md:"8px",lg:"10px"}}
                        onClick={handleManage}
                        _hover={{
                          color:" rgba(217, 243, 248, 1);",
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          fontWeight: 600,
                          bg: "rgba(38, 189, 217, 1)",
                        }}
                      >
                        Manage Course
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem>
                  <Link href="#" cursor="pointer">
                      <Text
                        size="label_l14_regular"
                        color=" rgba(35, 35, 35, 1);"
                        p={{base:"4px",md:"8px",lg:"10px"}}
                        _hover={{
                          color:" rgba(217, 243, 248, 1);",
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          fontWeight: 600,
                          bg: "rgba(38, 189, 217, 1)",
                        }}
                      >
                        Manage Attendance
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" cursor="pointer">
                    <Text
                        size="label_l14_regular"
                        color=" rgba(35, 35, 35, 1);"
                        p={{base:"4px",md:"8px",lg:"10px"}}
                        _hover={{
                          color:" rgba(217, 243, 248, 1);",
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          fontWeight: 600,
                          bg: "rgba(38, 189, 217, 1)",
                        }}
                      >
                        Schedule
                      </Text>
                        
                      
                    </Link>
                  </ListItem>
                </UnorderedList>
              </Flex>
              <Flex
                display={{base:"none",lg:"block"}}
                alignSelf="center"
                w={{ md: "14%", base: "100%" }}
                justifyContent="center"
                alignItems="center"
                px={{ md: 0, base: "20px" }}
              >
                
                <Flex
                  h={{ md: "24px", base: "auto" }}
                  ml={{base:"-16px",lg:"-66px"}}
                  
                  color="black"
                    
                  bgRepeat="no-repeat"
                 
                  flexDirection="column"
                  alignItems="end"
                  px="2px"
                > 
                <Box  transform={{base: "translateX(0px)",lg:"translateX(-300px) translateY(20px)"}}  display={{base:"none",lg:"block"}} w="54px" h="24px" >
                <CiSearch display={{base:"none"}} size="100%"  />

               </Box>
               {}
                <Link href="#" onClick={handleAccount}>
                  <Image  src="/Rectangle 5997.svg"  position="relative" bottom={{base:"86px" ,lg:"17px"}} right={{base:"0px",lg:"153px"}} alt="Contrast" h="50px" w="50px" />
                </Link>

                </Flex>
                <Link onClick={handlenotfication} href="#">
                  <Image

                    src="./notif.svg"
                    alt="Image"
                    h="24px"
                    transform={{base: "translateX(-89px)",lg:"translateX(-100px)"}}
                    position={{base:"absolute", lg:"relative"}}
                    w="24px"
                    fit="cover"
                    top={{base:"20px" ,lg:"0px"}}
                    borderRadius="24px"
                  />
                </Link>
                
              </Flex>
              
            </Flex>
           
            <Flex gap="26px" flexDirection="column">

              <Flex
                mr={{ md: "34px", base: "0px" }}
                justifyContent="center"
                alignItems="center"
                flexDirection={{ base: "column", sm: "row" }}
              >
                <Flex
                  gap={{base:"22px",lg:"10px"}}
                  flex={1}
                
                  flexDirection="column"
                  alignItems="start"
                  alignSelf={{ base: "stretch", sm: "auto" }}
                  px={{ base: "20px", sm: 0 }}
                  transform={{base: "translateY(101px)",lg:"translateX(0px)"}}
                >
                  <Heading fontSize={{base:"20px",lg:"32px"}} color=" rgba(20, 21, 34, 1);" lineHeight="48px" fontWeight="500" fontFamily="Plus Jakarta Sans">
                    Hi, Alinah
                  </Heading>
                  <Heading mb={{base:"42px",lg:"0px"}} fontSize={{base:"12px",lg:"18px"}} color=" rgba(156, 156, 164, 1);" lineHeight="27px" fontWeight="400" fontFamily="Plus Jakarta Sans">
                    Let’s learn something new today!
                  </Heading>
                </Flex>
                <Button fontSize="14px" position="relative" top={{base:"12px" ,lg:"0px"}} right={{base:"10px",lg:"163px"}} h={{base:"39px",lg:"50px"}} fontFamily="Plus Jakarta Sans" bg="rgba(38, 189, 217, 1)" fontWeight={500} minW= {{base:"114px",lg:"170px" }} borderRadius="10px">
                  Buy Course
                </Button>
              </Flex>
              <Flex gap="20px" alignItems="start" flexDirection={{ md: "row", base: "column" }}>
                <Flex
                  gap="22px"
                  alignSelf={{ md: "center", base: "stretch" }}
                  flex={1}
                  flexDirection="column"
                  px={{ md: 0, base: "20px" }}
                >
                  <Box  w={{base:"66%",lg:"100%"}}>
                  
                    <Box bg="#ffffff" borderRadius="8px">
                      <Flex
                        gap="18px"
                        bg="#fffff"
                        borderRadius="8px"
                        flexDirection={{ md: "row", base: "row" }}
                      >
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {data.map((d, index) => (
                            <Overview
                              {...d}
                              key={"listtotalcourse" + index}
                              w={{ md: "30%", base: "30%" }}

                              my={{ md: "18px", base: "0px" }}
                              px={{ md: 0, base: "20px" }}

                            />
                          ))}
                        </Suspense>
                      </Flex>
                    </Box>
                  </Box>
                  <Flex gap="16px" flexDirection={{ md: "row", base: "column" }}>
                    <Flex
                      gap="24px"
                      borderColor="gray.200_01"
                      borderWidth="1px"
                      borderStyle="solid"
                      bg="#ffffff"
                      w={{base:"63%",md:"347px"}}
                      h="260px"
                      flexDirection="column"
                      alignItems="start"
                      justifyContent="center"
                      px="8px"
                      py="20px"
                      borderRadius="8px"
                    >
                      
                      <GraphStats/>
                    </Flex>
                    <Flex
                      gap="24px"
                      borderColor="gray.200_01"
                      borderWidth="1px"
                      borderStyle="solid"
                      bg="#ffffff"
                      w={{base:"63%",md:"347px"}}
                      h="260px"
                      flexDirection="column"
                      alignItems="start"
                      justifyContent="center"
                      px="8px"
                      py="20px"
                      borderRadius="8px"
                    >
                    <GraphStats2  />
                    </Flex>
                  </Flex>
                  <Flex justifyContent="center" alignItems="start">
                    <Heading
                      size="text2xl"
                      as="h6"
                      color="neutral.black.0"
                      fontFamily="Plus Jakarta Sans"
                      alignSelf="center"
                    >
                      Daftar Kursus Saya
                    </Heading>
                    <Flex   gap="17px" flex={1}  transform={{base: "translateX(109px)",lg:"translateX(390px)"}}
 >
                      <IconButton
                        size="xs"
                        icon={<Image src="./Full Arrow Right.svg" />}
                        aria-label="1:5948-fisrarrow_one"
                        transform="rotate(-180deg)"
                        borderColor="gray.400"
                        borderWidth="1.09px"
                        borderStyle="solid"
                       
                        w="26px"
                        borderRadius="4px"
                        bg={"rgba(196, 196, 196, 1)"}
                      />
                      <IconButton
                        size="xs"
                        icon={<Image src="./Full Arrow Right.svg" />}
                        aria-label="1:5945-fisrarrow_three"
                        
                        borderColor="gray.400"
                        borderWidth="1.09px"
                        borderStyle="solid"
                        bg={"rgba(196, 196, 196, 1)"}
                        w="26px"
                        borderRadius="4px"
                      />
                    </Flex>
                  </Flex>
                  <Flex gap="15px" w={{base:"100%"}}  flexDirection={{ md: "row", base: "row" }}>
                    <UserProfile2
                     isVisible={isVisible}
                      beginnerButton="Beginner"
                      courseTitle="Creating Beautifull Landing Page in 1 Hour"
                      mentorName="Lincoln George"
                      reviewText="4,5"
                      display='none'
                    />
                    <UserProfile2 
                    isVisible={isVisible}
                      display='none'
                      beginnerButton="Master"
                      courseTitle="Animation is the Key of Successfull UI/UX Design"
                      mentorName="Emerson Siph"
                      reviewText="4,5"
                    />
                  </Flex>
                </Flex>
                <Box mr={{base:"0px",lg:"200px"}} w={{ md: "38%", base: "70%" }} px={{ md: 0, base: "30px" }}>
                  <Flex
                    gap="38px"
                    borderColor="white"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="white"
                    flexDirection="column"
                    px={{ base: "10px", sm: "22px" }}
                    py={{ md: "42px", base: "20px" }}
                    borderRadius="8px"
                  >
                    <Flex mr={{ md: "8px", base: "0px" }} gap="8px" flexDirection="column">
                      <Flex
                        mr={{ md: "4px", base: "0px" }}
                        justifyContent="space-between"
                        alignItems="center"
                        gap="20px"
                      >
                        <Heading
                          size="heading6xl"
                          as="h4"
                          color="neutral.ne70"
                          fontFamily="Plus Jakarta Sans"
                          fontSize="24.89px"
                        >
                          November 2024
                        </Heading>
                        <Button
                          size="md"
                          rightIcon={
                            <Image src="./img_full_arrow_right.svg" alt="Full Arrow Right" w="20px" h="20px" />
                          }
                          fontFamily="Plus Jakarta Sans"
                          fontWeight={500}
                          borderColor="neutral.soft_grey"
                          borderWidth="1px"
                          borderStyle="solid"
                          bg={"white"}
                          minW="114px"
                          color={"black"}
                          borderRadius="10px"
                          right={{base:"2px",md:"0px"}}
                        >
                          View All
                        </Button>
                      </Flex>
                      <Flex gap="12px" flexDirection="column" >
                        <WeekdayColumns />
                        <Flex gap="12px" flexDirection="column"  >
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data2.map((d, index) => (
                              <ButtonGroup {...d} key={"listone" + index} />
                            ))}
                          </Suspense>
                        </Flex>
                      </Flex>
                      
                    </Flex>
                    <Flex mb="8px" mr={{ md: "12px", base: "30px" }} gap="24px" flexDirection="column">
                      <Flex justifyContent="space-between" alignItems="center" gap="20px">
                        <Heading size="heading2xl" as="h6" fontFamily="Plus Jakarta Sans" alignSelf="end">
                          Rating Course
                        </Heading>
                        <Button
                          size="md"
                          rightIcon={
                            <Image src="./Full Arrow Right.svg" alt="Full Arrow Right" w="20px" h="20px" />
                          }
                          fontFamily="Plus Jakarta Sans"
                          fontWeight={500}
                          borderColor="neutral.soft_grey"
                          borderWidth="1px"
                          bg={"white"} 
                          borderStyle="solid"
                          minW="114px"
                          borderRadius="10px"
                          right={{base:"2px",md:"0px"}}
                          color={"black"}
                        >
                          View All
                        </Button>
                      </Flex>
                      
                      
                    </Flex>
                    <Flex  gap="34px" flexDirection="column">
                        <UserProfile3
                         
                          userName="Dadang Sumargo"
                          userDescription="Materi sangat mudah di pahami dan lorem ipsum dolor sit amet consectetur adipiscing elit  Materi sangat mudah di pahami dan lorem ."
                        />
                        
                        <UserProfile3
                          userName="Dadang Sumargo"
                          userDescription="Materi sangat mudah di pahami dan lorem ipsum dolor sit amet consectetur adipiscing elit  Materi sangat mudah di pahami dan lorem ."
                        />
                      </Flex>
                  </Flex>
                  
                </Box >
                <Box mr={{base:"0px",lg:"200px"}}
                 w={{ md: "38%", base: "60%" }} 
                px={{ md: 0, base: "0px" }}
                display={{base:"block",lg:"none"}}
                  >
                <Flex
                gap="38px"
                borderColor="white"
                borderWidth="1px"
                borderStyle="solid"
                bg="white"
                flexDirection="column"
                px={{ base: "30px", sm: "22px" }}
                py={{ md: "42px", base: "20px" }}
                transform={{base:"translateX(20px)"}}
                borderRadius="8px"
                
                >
                   
                <Flex mb="8px" mr={{ md: "12px", base: "0px" }} gap="24px" flexDirection="column">
                      <Flex justifyContent="space-between" alignItems="center" gap="20px">
                        <Heading size="heading2xl" as="h6" fontFamily="Plus Jakarta Sans" alignSelf="end">
                          Rating Course
                        </Heading>
                        <Button
                          size="md"
                          rightIcon={
                            <Image src="./Full Arrow Right.svg" alt="Full Arrow Right" w="20px" h="20px" />
                          }
                          fontFamily="Plus Jakarta Sans"
                          fontWeight={500}
                          borderColor="neutral.soft_grey"
                          borderWidth="1px"
                          bg={"white"} 
                          borderStyle="solid"
                          minW="114px"
                          borderRadius="10px"
                          right={{base:"2px",md:"0px"}}
                          color={"black"}
                        >
                          View All
                        </Button>
                      </Flex>
                      
                      
                    </Flex>
                <UserProfile4 />
                <UserProfile4/>
                </Flex>  
                
                </Box>

                <Flex
                 justify="space-around"
                   align="center"
                   bg="white"
                   w={{base:"60%"}}
                   p={0}
                   position="fixed"
                   bottom="0"
                   left="10px"
                   right="0"
                  boxShadow="0 -2px 6px rgba(0, 0, 0, 0.1)">
    
    <MobileSidebar/>
  </Flex>
              </Flex>
            </Flex>
          </Flex>
 



     </Flex>
    </Box>

  
    
    </>
  )
}

export default Dashboard