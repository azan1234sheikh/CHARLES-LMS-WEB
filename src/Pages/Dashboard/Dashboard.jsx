import { Center, ChakraProvider, Container,Text,Stack, FormControl, FormLabel,UnorderedList,
  ListItem, Link,Heading, Input,InputGroup,InputRightElement,IconButton, Button, Flex, Box} from '@chakra-ui/react';
import Sidebar from '../../Components/Sidebar/sidebar.jsx';
import { Image } from '@chakra-ui/react';
import { CiSearch } from "react-icons/ci";
import WeekdayColumns from '../../Components/WeekdayColumns/index.jsx';
import { useNavigate } from 'react-router-dom';
import Overview from '../../Components/CouseOverview/Overview.jsx';
import UserStatistics1 from '../../Components/UserStatistics1/index.jsx';
import UserStats from '../../Components/UserStatistics/UserStats.jsx';
import UserProfile2 from '../../Components/UserProfile2/index.jsx';
import UserProfile3 from '../../Components/UserProfile3/index.jsx';
import React, { Suspense } from "react";
import ButtonGroup from '../../Components/ButtonGroup/index.jsx';

const data = [
  { totalCourseHeading: "Total Course", courseCount: "2", courseDescription: "Total Course" },
  { totalCourseHeading: "Total Course", courseCount: "2", courseDescription: "Total Course" },
  { totalCourseHeading: "Total Course", courseCount: "2", courseDescription: "Total Course" },
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

// import { Sidebar } from 'react-pro-sidebar';
const Dashboard = () => {
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
  return (
    <>
    <Box  bg=" rgba(247, 248, 250, 1);">
     <Flex gap="16px" alignItems="start">
     <Sidebar />
         
     <Flex mt="30px" gap="22px" alignSelf="center" flex={1} flexDirection="column">
            <Flex
              mr={{ md: "30px", base: "0px" }}
              justifyContent="space-between"
              alignItems="start"
              gap="20px"
              flexDirection={{ md: "row", base: "column" }}
              as="header"
            >
              <Flex mt="6px" px={{ md: 0, base: "20px" }}>
                <UnorderedList styleType="none" gap="16px" display="flex" alignItems="center" flexWrap="wrap">
                  <ListItem>
                  <Link href="#" cursor="pointer">
                      <Text
                        size="label_l14_regular"
                        color=" rgba(35, 35, 35, 1)"
                        bg= "rgba(38, 189, 217, 1)"
                        borderTopLeftRadius = "6" 
                        borderTopRightRadius= "6"
                        borderBottomLeftRadius= "6"
                        borderBottomRightRadius= "6"
                        p="10px"
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
                        p="10px"
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
                        p="10px"
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
                        p="10px"
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
                alignSelf="center"
                w={{ md: "14%", base: "100%" }}
                justifyContent="center"
                alignItems="center"
                px={{ md: 0, base: "20px" }}
              >
                
                
                <Flex
                  h={{ md: "24px", base: "auto" }}
                  ml="-96px"
                  color="black"
                    
                  bgRepeat="no-repeat"
                 
                  flexDirection="column"
                  alignItems="end"
                  px="2px"
                ><Box  w="54px" h="24px" >
                <CiSearch size="100%"  />
              </Box>
                <Link href="#" onClick={handleAccount}>
                  <Image  src="./public/Rectangle 5997.svg"  position="relative" bottom="33px" left="103px" alt="Contrast" h="50px" w="50px" />
                </Link>

                  <Box h="8px" mb="14px" bg="secondary.red" w="8px" borderRadius="4px" />
                </Flex>
                <Link onClick={handlenotfication} href="#">
                  <Image
                    src="./public/notif.svg"
                    alt="Image"
                    h="24px"
                    mr="292px"
                    w="24px"
                    fit="cover"
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
                  gap="12px"
                  flex={1}
                  flexDirection="column"
                  alignItems="start"
                  alignSelf={{ base: "stretch", sm: "auto" }}
                  px={{ base: "20px", sm: 0 }}
                >
                  <Heading fontSize="32px" color=" rgba(20, 21, 34, 1);" lineHeight="48px" fontWeight="500" fontFamily="Plus Jakarta Sans">
                    Hi, Alinah
                  </Heading>
                  <Heading fontSize="18px" color=" rgba(156, 156, 164, 1);" lineHeight="27px" fontWeight="400" fontFamily="Plus Jakarta Sans">
                    Let’s learn something new today!
                  </Heading>
                </Flex>
                <Button fontSize="14px" position="relative" right="163px" h="50px" fontFamily="Plus Jakarta Sans" bg="rgba(38, 189, 217, 1)" fontWeight={500} minW="170px" borderRadius="10px">
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
                  <Box w="713px">
                    <Box bg="#ffffff" borderRadius="8px">
                      <Flex
                        gap="18px"
                        bg="#fffff"
                        borderRadius="8px"
                        flexDirection={{ md: "row", base: "column" }}
                      >
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {data.map((d, index) => (
                            <Overview
                              {...d}
                              key={"listtotalcourse" + index}
                              w={{ md: "30%", base: "100%" }}
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
                      w="347px"
                      h="260px"
                      flexDirection="column"
                      alignItems="start"
                      justifyContent="center"
                      px="8px"
                      py="20px"
                      borderRadius="8px"
                    >
                      <Heading
                        size="16px"
                        lineHeight="24px"
                        fontWeight="700"
                        as="h3"
                        mt="53px"
                        color=" rgba(15, 15, 15, 1);"
                        ml={{ md: "10px", base: "0px" }}
                        fontFamily="Plus Jakarta Sans"
                      >
                        Attendance Rate
                      </Heading>
                      <Flex ml={{ md: "10px", base: "0px" }} alignSelf="stretch" alignItems="start">
                        <Flex gap="8px" alignSelf="center" flex={1}>
                          <Box borderTopLeftRadius="16px" position="relative"  bottom="32px" h="16px" borderTopRightRadius="16px" borderBottomRadius="16px" bg="rgba(201, 201, 201, 1)" w="16px">
                            <Flex
                              mt="42px"
                              bg="rgba(201, 201, 201, 1)"
                              
                              py="4px"
                            >
                              <Heading position="relative" fontSize="20px" lineHeight="26px" left="252px" bottom="103px" color="Black"  fontWeight={700}>
                                55%
                              </Heading>
                            </Flex>
                          </Box>
                          <Box borderTopLeftRadius="6px" borderTopRightRadius="16px" bg="" w="18%">
                            <Flex
                              mt="66px"
                              bg="rgba(40, 168, 69, 1)"
                              flexDirection="column"
                              alignItems="end"
                              justifyContent="flex-end"
                              py="4px"
                            >
                              <Heading bottom="42px" position="relative" fontSize="20px" lineHeight="26px"  left="212px" color="Black"  fontWeight={700}>
                                45%
                              </Heading>
                            </Flex>
                          </Box>
                        </Flex>
                        <Flex gap="6px" w="42%" flexDirection={{ md: "column", base: "row" }}>
                          
                        <UserStats />
                          <UserStats
                            peoplePresentText="20 Not present"
                            percentageText="35%"
                            mr={{ md: "18px", base: "0px" }}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex
                      gap="24px"
                      borderColor="gray"
                      borderWidth="1px"
                      borderStyle="solid"
                      bg="white"
                      w="347px"
                      h="260px"
                      flexDirection="column"
                      alignItems="start"
                      p="14px"
                      borderRadius="8px"
                    >
                      <Heading
                        size="heading2xl"
                        as="h6"
                        color="neutral.ne80.1"
                        mt="6px"
                        ml={{ md: "10px", base: "0px" }}
                        fontFamily="Plus Jakarta Sans"
                      >
                        Graduated Level
                      </Heading>
                      <Flex alignSelf="stretch" alignItems="start">
                        <Box borderTopLeftRadius="16px" borderTopRightRadius="16px" bg="gray.300_7f" w="12%">
                          <Flex
                            mt="42px"
                            bg="primary.pr100"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="flex-end"
                            py="4px"
                          >
                            <Heading as="h6" color="neutral.white" mt="94px" fontWeight={700}>
                              50%
                            </Heading>
                          </Flex>
                        </Box>
                        <Box ml="8px" borderTopLeftRadius="16px" borderTopRightRadius="16px" bg="white" w="12%">
                          <Flex
                            mt="88px"
                            bg="rgba(221, 53, 69, 1)"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="flex-end"
                            py="4px"
                          >
                            <Heading as="h6" color="neutral.white" mt="48px" fontWeight={700}>
                              35%
                            </Heading>
                          </Flex>
                        </Box>
                        <Flex
                          ml="8px"
                          borderTopLeftRadius="16px"
                          borderTopRightRadius="16px"
                          bg="white"
                          w="12%"
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="flex-end"
                        >
                          <Center mt="130px" bg="warning.wr40" w="32px" flexDirection="column">
                            <Heading as="h6" color="neutral.white" mt="6px" fontWeight={700}>
                              15%
                            </Heading>
                          </Center>
                        </Flex>
                        <Flex
                          ml="48px"
                          gap="16px"
                          alignSelf="center"
                          flex={1}
                          flexDirection={{ md: "column", base: "column", sm: "row" }}
                        >
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data1.map((d, index) => (
                              <UserStatistics1 {...d} key={"listview" + index} mr={{ md: "36px", base: "0px" }} />
                            ))}
                          </Suspense>
                        </Flex>
                      </Flex>
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
                    <Flex gap="17px" flex={1} justifyContent="flex-end">
                      <IconButton
                        size="xs"
                        icon={<Image src="images/img_fi_sr_arrow_small_left.svg" />}
                        aria-label="1:5948-fisrarrow_one"
                        borderColor="gray.400"
                        borderWidth="1.09px"
                        borderStyle="solid"
                        w="26px"
                        borderRadius="4px"
                      />
                      <IconButton
                        size="xs"
                        icon={<Image src="images/img_fi_sr_arrow_small_left.svg" />}
                        aria-label="1:5945-fisrarrow_three"
                        transform="rotate(-180deg)"
                        borderColor="gray.400"
                        borderWidth="1.09px"
                        borderStyle="solid"
                        w="26px"
                        borderRadius="4px"
                      />
                    </Flex>
                  </Flex>
                  <Flex gap="25px"  flexDirection={{ md: "row", base: "column" }}>
                    <UserProfile2
                      beginnerButton="Beginner"
                      courseTitle="Creating Beautifull Landing Page in 1 Hour"
                      mentorName="Lincoln George"
                      reviewText="4,5"
                    />
                    <UserProfile2
                      beginnerButton="Master"
                      courseTitle="Animation is the Key of Successfull UI/UX Design"
                      mentorName="Emerson Siphron"
                      reviewText="4,5"
                    />
                  </Flex>
                </Flex>
                <Box mr="200px" w={{ md: "38%", base: "100%" }} px={{ md: 0, base: "0px" }}>
                  <Flex
                    gap="38px"
                    borderColor="white"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="white"
                    flexDirection="column"
                    px={{ base: "20px", sm: "22px" }}
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
                            <Image src="images/img_full_arrow_right.svg" alt="Full Arrow Right" w="20px" h="20px" />
                          }
                          fontFamily="Plus Jakarta Sans"
                          fontWeight={500}
                          borderColor="neutral.soft_grey"
                          borderWidth="1px"
                          borderStyle="solid"
                          minW="114px"
                          borderRadius="10px"
                        >
                          View All
                        </Button>
                      </Flex>
                      <Flex gap="12px" flexDirection="column">
                        <WeekdayColumns />
                        <Flex gap="12px" flexDirection="column">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data2.map((d, index) => (
                              <ButtonGroup {...d} key={"listone" + index} />
                            ))}
                          </Suspense>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex mb="8px" mr={{ md: "12px", base: "0px" }} gap="24px" flexDirection="column">
                      <Flex justifyContent="space-between" alignItems="center" gap="20px">
                        <Heading size="heading2xl" as="h6" fontFamily="Plus Jakarta Sans" alignSelf="end">
                          Rating Course
                        </Heading>
                        <Button
                          size="md"
                          rightIcon={
                            <Image src="./public/Full Arrow Right.svg" alt="Full Arrow Right" w="20px" h="20px" />
                          }
                          fontFamily="Plus Jakarta Sans"
                          fontWeight={500}
                          borderColor="neutral.soft_grey"
                          borderWidth="1px"
                          borderStyle="solid"
                          minW="114px"
                          borderRadius="10px"
                        >
                          View All
                        </Button>
                      </Flex>
                      <Flex gap="34px" flexDirection="column">
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
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Flex>
 



     </Flex>
    </Box>

    
    
    
    </>
  )
}

export default Dashboard