import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
 ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress} from '@chakra-ui/react';
import Sidebar8 from '../../../Components/Sidebar/sidebar.jsx';
 import { Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React, { useState,Suspense } from "react";
import { CiSearch } from "react-icons/ci";
import CourseDetail from '../CourseDetail/CourseDetail.jsx';
import { useDisclosure } from '@chakra-ui/react';
import MobileSidebar from '../../../Components/MobileSidebar/MobileSidebar.jsx';
import MobileHeader from '../../../Components/MobileHeader/MobileHeader.jsx';
import UserProfile2 from '../../../Components/UserProfile5/UserProfile5.jsx';
import data from "../../../Components/Data/MycourseData.js";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  
const MyCourses = (
    {
        beginnerButton = "Beginner",
        courseTitle = "Creating Beautifull Landing Page in 1 Hour",
        mentorName = "Lincoln George",
        reviewText = "4,5",
        course,
        ...props}
) => {
 

  const [isVisible, setIsVisible] = useState(true);
  const [SearchBarValue,SetSearchBarValue] = useState("");
 

  const handleExplore=()=>{
    navigatebtn('/Explorecourse');
  }
  const handleMycourse=()=>{
    navigatebtn('/MyCourse');
  }

  const handleClearSearch = () => {
   
    setTimeout(() => {
      SetSearchBarValue("");
    }, 100);
  };
  const handleDelete = () => {

    setIsVisible((prev) => !prev);
  };
  const navigatebtn = useNavigate();
  const handleAccount=()=>{
    navigatebtn('/Account');
  }
  const handlenotfication=()=>{
    navigatebtn('/Notification');
  }
  const handleCourseClick = (course) => {
    navigatebtn(`/course/${course.id}`);
  };

 
  const { isOpen, onOpen, onClose } = useDisclosure()

    const finalRef = React.useRef(null)
    const { isOpen: isModal1Open, onOpen: onModal1Open, onClose: onModal1Close } = useDisclosure();
    const { isOpen: isModal2Open, onOpen: onModal2Open, onClose: onModal2Close } = useDisclosure();
    const { isOpen: isModal3Open, onOpen: onModal3Open, onClose: onModal3Close } = useDisclosure();
    const items = [
      { id: 1, name: 'Item 1', category: 'A-Z' },
      { id: 2, name: 'Item 2', category: 'Z-A' },
      { id: 3, name: 'Item 3', category: 'Popular' },
      { id: 4, name: 'Item 4', category: 'Category 3' },
    ];

  return (
<>
 <Box bg={{base:"rgba(242, 246, 255, 1)", lg:"#ffff"}} h="100vh">
   <Flex gap="56px" alignItems="start">
       <Sidebar8/>
       <Flex mt="30px" gap="22px" alignSelf="center" flex={1} flexDirection="column">
       <Box display={{base:"block",md:"none"}} mb={{base:"22px"}}>
        
        <MobileHeader/>
        <FormControl bg={"white"} w="54px" left="17px" top={"13px"} >
                      <Input w="355px" value={SearchBarValue}
                       onChange={(e) => SetSearchBarValue(e.target.value)}
                       _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="46px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Search For Course Name/Mentor'/>
                      <Box  position="relative" left="293px" bottom="40px" w="54px" h="0px" >
                       <CiSearch  size={"32px"}  />
                       </Box>
                       {SearchBarValue?.length > 0 && (
                        
                        <Box  position="relative"  left="293px" zIndex={1} top="-38px" w="54px" h="0px">
                        <IoMdClose onClick={handleClearSearch} size={"32px"}  />
                        </Box>
                       )} 
                      
                    </FormControl>
           <Flex mb={"12px"}>
           <Button fontSize="14px" onClick={handleExplore} position="relative" top={{base:"28px" ,lg:"0px"}} right={{base:"-12px",lg:"0px"}} h={{base:"45px",lg:"0px"}} fontFamily="Plus Jakarta Sans" bg="rgba(38, 189, 217, 1)" fontWeight={500} minW= {{base:"170px",lg:"0px" }} borderRadius="5px">
                  Explore Courses
                </Button>
                <Button fontSize="14px" onClick={handleMycourse} color={"rgba(38, 189, 217, 1)"} position="relative" top={{base:"28px" ,lg:"0px"}} right={{base:"-27px",lg:"0px"}} h={{base:"45px",lg:"0px"}} fontFamily="Plus Jakarta Sans" bg="#ffff" fontWeight={500} minW= {{base:"170px",lg:"0px" }} borderRadius="5px">
                 My Courses
                </Button>
           </Flex>
           

        </Box>
       <Flex
              mr={{ md: "30px", base: "0px" }}
              justifyContent="space-between"
              display={{base:"none",md:"block"}}
              alignItems="start"
              gap="20px"
              flexDirection={{ md: "row", base: "column" }}
              as="header"
            >
              <Flex flexDirection="row" mt="6px" px={{ md: 0, base: "20px" }}>
                <Heading position="relative" bottom="290px" fontWeight ="500" fontSize="32px" lineHeight="48px" fontFamily="Plus Jakarta Sans" >
                My Courses

                <Link onClick={handlenotfication}>
                  <Image
                    src="./notif.svg"
                    alt="Image"
                    h="24px"
                    position="relative"
                    left="1010px"
                    bottom="36px"
                    w="24px"
                    fit="cover"
                    borderRadius="24px"
                  />
                </Link>
                <Link  onClick={handleAccount}>
                  <Image
                    src="./Rectangle 5997 (1).svg"
                    alt="Image"
                    h="50px"
                    position="relative"
                    left="1122px"
                    bottom="70px"
                    w="50px"
                    fit="cover"
                    borderRadius="24px"
                  />
                </Link>
                </Heading>

             <Box  position="relative" bottom="233px" right="178px">
                <Flex>
                 <Stack>
                    <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="500px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Search For Course Name/Mentor'/>
                      <Box  position="relative" left="433px" bottom="35px" w="54px" h="24px" >
                       <CiSearch size="100%"  />
                      </Box>
                    </FormControl>
                  </Stack>

                </Flex>
                <Box>
                  <Button onClick={onModal1Open} border=" 1px solid rgba(245, 245, 247, 1)" bottom="89px" left="498px" position="relative" mt="12px"  ml="93px" bg="#fffff" color="#ffffff" w="97px" h="50px" borderRadius="10px">
                  <Image src="./range (3).svg" alt="Lincoln George" h="12px" w="12px" />
                  <Text ml="12px" color="black"> Level</Text>
                  </Button>
                  <Button onClick={onModal2Open} border=" 1px solid rgba(245, 245, 247, 1)" bottom="83px" left="524px" position="relative" bg="#fffff" color="#ffffff" w="127px" h="50px" borderRadius="10px">
                  <Image src="./element-1.svg" alt="Lincoln George" h="18px" w="18px" />
                  <Text ml="12px" color="black">Category</Text>
                  </Button>
                  <Button onClick={onModal3Open} border=" 1px solid rgba(245, 245, 247, 1)"  bottom="83px" left="564px" position="relative" bg="#fffff" color="#ffffff" w="166px" h="50px" borderRadius="10px">
                  <Image src="./range (3).svg" alt="Lincoln George" h="12px" w="12px" />
                  <Text ml="12px" color="black">Sort By: Popular</Text>
                  </Button>
                  <Button border=" 1px solid rgba(245, 245, 247, 1)"  bottom="83px" left="584px" position="relative" bg="#fffff" color="#000000" w="126px" h="50px" borderRadius="10px"  onClick={onOpen}>Delete Course</Button>
                  </Box>
                  <Modal  isOpen={isModal2Open} onClose={onModal2Close}>
                   
                    <ModalContent position="relative" left="153px" top="84px" w="293px" h="171px">
                      <ModalHeader fontWeight="500" color="rgba(20, 21, 34, 1)" fontSize="14px" letterSpacing="1px" lineHeight="21px" fontFamily="'Plus Jakarta Sans', sans-serif">By Category</ModalHeader>
                      <ModalCloseButton w="12px" h="12px" border="none" />
                       <ModalBody>
                       <Button border=" 1px solid rgba(245, 245, 247, 1)"  bottom="3px" left="4px" position="relative" bg="#fffff" color="#ffffff" w="74px" h="36px" borderRadius="10px">
                       <Text ml="2px" color="black">All</Text>
                       </Button>
                       <Button  border=" 1px solid #000000"  bottom="3px" left="24px" position="relative" bg="#000000" color="#ffffff" w="100px" h="36px" borderRadius="10px">
                       <Text ml="2px">Design</Text>
                       </Button>
                              
                        </ModalBody>

          <ModalFooter>
          <Button  border=" 1px solid #000000"  bottom="3px" left="-74px" position="relative" bg="#000000" color="#ffffff" w="100px" h="36px" borderRadius="10px">
           <Text ml="2px">Soft Skills</Text>
             </Button>
             <Button border=" 1px solid rgba(245, 245, 247, 1)"  bottom="3px" left="-44px" position="relative" bg="#fffff" color="#ffffff" w="74px" h="36px" borderRadius="10px">
                       <Text ml="2px" color="black">Code</Text>
                       </Button>
           
          </ModalFooter>
        </ModalContent>
                  </Modal>
                  <Modal  isOpen={isModal1Open} onClose={onModal1Close}>
                   
                   <ModalContent position="relative" left="153px" top="84px" w="293px" h="171px">
                     <ModalHeader fontWeight="500" color="rgba(20, 21, 34, 1)" fontSize="14px" letterSpacing="1px" lineHeight="21px" fontFamily="'Plus Jakarta Sans', sans-serif">By Level</ModalHeader>
                     <ModalCloseButton w="12px" h="12px" border="none" />
                      <ModalBody>
                      <Button border=" 1px solid rgba(245, 245, 247, 1)"  bottom="3px" left="4px" position="relative" bg="#fffff" color="#ffffff" w="74px" h="36px" borderRadius="10px">
                      <Text ml="2px" color="black">All</Text>
                      </Button>
                      <Button  border=" 1px solid #000000"  bottom="3px" left="24px" position="relative" bg="#000000" color="#ffffff" w="112px" h="36px" borderRadius="10px">
                      <Text ml="2px">Beginner</Text>
                      </Button>
                             
                       </ModalBody>

         <ModalFooter>
         <Button  border=" 1px solid #000000"  bottom="3px" left="-24px" position="relative" bg="#000000" color="#ffffff" w="134px" h="36px" borderRadius="10px">
          <Text ml="2px">Intermediate</Text>
            </Button>
            <Button border=" 1px solid #000000"  bottom="3px" left="-4px" position="relative" bg="#fffff" color="#ffffff" w="99px" h="36px" borderRadius="10px">
                      <Text ml="2px" color="black">Master</Text>
                      </Button>
          
         </ModalFooter>
       </ModalContent>
                 </Modal>
                  <Modal  isOpen={isModal3Open} onClose={onModal3Close}>
                   
                   <ModalContent position="relative" left="393px" top="89px" w="239px" h="223px">
                     <ModalHeader fontWeight="500" color="rgba(20, 21, 34, 1)" fontSize="14px" letterSpacing="1px" lineHeight="21px" fontFamily="'Plus Jakarta Sans', sans-serif">By Category</ModalHeader>
                     <ModalCloseButton w="12px" h="12px" border="none" />
                      <ModalBody>
                      <Button border=" 1px solid rgba(245, 245, 247, 1)"  bottom="3px" left="4px" position="relative" bg="#fffff" color="#ffffff" w="199px" h="36px" borderRadius="10px">
                      <Text ml="2px" color="black">A-Z</Text>
                      </Button>
                      <Button  border=" 1px solid rgba(245, 245, 247, 1)"  top="12px" left="5px" position="relative" bg="#ffffff" color="#000000" w="199px" h="36px" borderRadius="10px">
                      <Text ml="2px">Z-A</Text>
                      </Button>
                             
                       </ModalBody>

         <ModalFooter>
            <Button  border=" 1px solid #000000"  bottom="12px" left="5px" position="relative" bg="#000000" color="#ffffff" w="209px" h="36px" borderRadius="10px">
              <Text ml="2px">Popular</Text>
             </Button>
          </ModalFooter>
           </ModalContent>
           </Modal>
             </Box>
           </Flex>
          </Flex>
        </Flex>
        </Flex> 
        <Box ml={{base:"0px",md:"250px"}} position="relative" bottom={{base:"-12px",lg:"525px"}} width={{base:"390px",md:"1245px"}} bg={{base:"rgba(242, 246, 255, 1)", lg:"rgba(247, 248, 250, 1)"}}>
        <Flex  transform={{base:"translateX(0px)",lg:"translateX(32px)"}} gap={{base:"8px",lg:"45px"}} wrap="wrap" p={{base:2,lg:4}}  flexDirection={{ md: "row", base: "row" }}>
        {data.map((course,index) => (
          
            <UserProfile2  {...course} display='block' onClick={() => handleCourseClick(course)}  isVisible={isVisible} key={`Courses${index}`}/>
        
           ))}
        </Flex>
        <Box ml={"16px"} w={"359px"} color={"#fffff"} >
        <MobileSidebar />
       </Box>

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
            <Text ml="66px" fontFamily="Inter" fontSize="24px" lineHeight="32px" fontWeight='600' mb='1rem'>
              Delete Training?
            </Text>
            <Text  ml="16px" fontFamily="Inter" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="21px" fontWeight='400' mb='1rem'>
            Are you sure you want to delete the training? click yes to continue deletion, and no to cancel
            </Text>
            </Stack>
          </ModalBody>

          <ModalFooter>
          <Flex>
                   <Button fontSize="14px" bottom="32px" position="relative"border="1px solid black " color="black" left="10px" h="50px" fontFamily="Plus Jakarta Sans" bg="#ffffff" fontWeight={500} w="150px" borderRadius="10px">
                      Cancel
                       </Button>
                       <Button ml="12px" fontSize="14px" toggleVisiblty={handleDelete} onClick={handleDelete} colorScheme="transparent"  bottom="32px" position="relative" left="10px" h="50px" fontFamily="Plus Jakarta Sans" bg="rgba(38, 189, 217, 1)" fontWeight={500} w="150px" borderRadius="10px">
                      Delete
                       </Button>
                       </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
     </Box>
   </Box>
     
 </>
  )
}

export default MyCourses