import { Center, ChakraProvider, Container,Text,Stack, FormControl, FormLabel,UnorderedList,
ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Icon} from '@chakra-ui/react';
   import Sidebar8 from '../../../Components/Sidebar/sidebar.jsx';
  import CourseData from '../../../Components/Data/CourseData.js';
  import { Image } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import React, { Suspense } from "react";
  import { CiSearch } from "react-icons/ci";
  import { IoMdClose } from "react-icons/io";

  import { useDisclosure } from '@chakra-ui/react';
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import UserProfile2 from '../../../Components/UserProfile2/index.jsx';
import MobileHeader from '../../../Components/MobileHeader/MobileHeader.jsx';
import { useState } from 'react';
import MobileSidebar from '../../../Components/MobileSidebar/MobileSidebar.jsx';
const Explorecourse = () => {

  const finalRef = React.useRef(null)
  const [SearchBarValue,SetSearchBarValue] = useState("");
  const [Visible,SetIsVisible] = useState(true);
  const { isOpen: isModal1Open, onOpen: onModal1Open, onClose: onModal1Close } = useDisclosure();
  const { isOpen: isModal2Open, onOpen: onModal2Open, onClose: onModal2Close } = useDisclosure();
  const { isOpen: isModal3Open, onOpen: onModal3Open, onClose: onModal3Close } = useDisclosure();
  const handleClearSearch = () => {
    // Delay clearing the search bar by 1 second
    setTimeout(() => {
      SetSearchBarValue("");
    }, 100);
  };
  const items = [
    { id: 1, name: 'Item 1', category: 'A-Z' },
    { id: 2, name: 'Item 2', category: 'Z-A' },
    { id: 3, name: 'Item 3', category: 'Popular' },
    { id: 4, name: 'Item 4', category: 'Category 3' },
  ];

  const navigatebtn = useNavigate();
  const handleAccount=()=>{
    navigatebtn('/Account');
  }
  const handlenotfication=()=>{
    navigatebtn('/Notification');
  }
  const handleExplore=()=>{
    navigatebtn('/Explorecourse');
  }
  const handleMycourse=()=>{
    navigatebtn('/MyCourse');
  }
 
  return (
    <>
    <Box  bg={{base:"rgba(242, 246, 255, 1)", lg:"#ffff"}} h="100vh">
     <Flex gap="56px" alignItems="start">
       <Sidebar8/>
       <Flex mt={{base:"1px",lg:"80px" }}gap="2px" alignSelf="center" flex={1} flexDirection="column">
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
              alignItems="start"
              display={{base:"none",md:"block"}}
              gap="10px"
              flexDirection={{ md: "row", base: "column" }}
              as="header"
            >
              <Flex flexDirection="row" mt="-6px" px={{ md: 0, base: "20px" }}>
                <Heading position="relative" bottom="290px" fontWeight ="500" fontSize="32px" lineHeight="48px" fontFamily="Plus Jakarta Sans" >
                Explore courses

                <Link onClick={handlenotfication}>
                  <Image
                    src="./notif.svg"
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
                <Link onClick={handleAccount}>
                  <Image
                    src="./Rectangle 5997 (1).svg"
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
                
            
               <Box  position="relative" bottom="233px" right="243px">
               
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
                  </Box>
                  <Modal  isOpen={isModal2Open} onClose={onModal2Close}>
                   
                    <ModalContent position="relative" left="153px" top="84px" w="293px" h="171px">
                      <ModalHeader fontWeight="500" color="rgba(20, 21, 34, 1)" fontSize="14px" letterSpacing="1px" lineHeight="21px" fontFamily="'Plus Jakarta Sans', sans-serif">By Category</ModalHeader>
                      <ModalCloseButton w="12px" h="12px" border="none" />
                       <ModalBody>
                       <Button border=" 1px solid rgba(245, 245, 247, 1)"  bottom="3px" left="4px" position="relative" bg="#fffff" color="#ffffff" w="74px" h="36px" borderRadius="10px">
                       <Text ml="2px" color="black">All</Text>
                       </Button>
                       <Button  border=" 1px solid #000000"  bottom="3px" left="24px" position="relative" bg="#000000" color="#ffff" w="100px" h="36px" borderRadius="10px">
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
     <Box   ml={{base:"0px",lg:"250px"}} position="relative" bottom={{base:"2px",lg:"525px"}} width={{base:"390px",md:"1245px"}} bg={{base:"rgba(242, 246, 255, 1)", lg:"rgba(247, 248, 250, 1)"}}>
     <Flex  transform={{base:"translateX(0px)",lg:"translateX(32px)"}} gap={{base:"8px",lg:"45px"}} wrap="wrap" p={{base:2,lg:4}}  flexDirection={{ md: "row", base: "row" }}>
          <Suspense fallback={<div>Loading feed...</div>}>
           {CourseData.map((d,index) => (
             <UserProfile2  {...d} display='none' isVisible={Visible} key={`Courses${index}`}/>
           ))}
         
         </Suspense>
         <Box w={"359px"} color={"#fffff"} >
       <MobileSidebar />
       </Box>
     </Flex>
    </Box>
     
     </Box> 
    
    </>
  )
}

export default Explorecourse