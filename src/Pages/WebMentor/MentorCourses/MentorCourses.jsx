
import { Center, ChakraProvider, Container,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem,Card ,Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Icon} from '@chakra-ui/react';
   import CourseData from '../../../Components/Data/CourseData.js';
   import UserProfile2 from '../../../Components/UserProfile2/index.jsx';
   import MobileSidebar from '../../../Components/MobileSidebar/MobileSidebar.jsx';
   import MobileHeader from '../../../Components/MobileHeader/MobileHeader.jsx';
       import Sidebar8 from '../../../Components/Sidebar/sidebar.jsx';
      import { Image } from '@chakra-ui/react';
      import { useNavigate } from 'react-router-dom';
      import React, { useState, Suspense } from "react";
      import { CiSearch } from "react-icons/ci";
      import { useDisclosure } from '@chakra-ui/react';
      import { IoMdClose } from "react-icons/io";

      import {
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalFooter,
        ModalBody,
        ModalCloseButton,
      } from '@chakra-ui/react'
  import { useParams } from 'react-router-dom';
   import Mentordetail from "../../../Components/Data/Mentordetail.js";
import UserProfile5 from '../../../Components/UserProfile5/UserProfile5.jsx';
const MentorCourses = (
    {
        beginnerButton = "Beginner",
        courseTitle = "Creating Beautifull Landing Page in 1 Hour",
        reviewText = "4.5",
        mentorName = "Emerson Sopr",
        followbtn = "+FollowMentor",
        btn = "followed",
        Course = "Ui Ux Design",
        CompletedCourses =  "50 Courses",
        reviews = "4.5(1200reviews)",
        children,
        ...props}
) => {
  const [Visible,SetIsVisible] = useState(true);

    const finalRef = React.useRef(null);
    const { id } = useParams();
    const btnnavigate = useNavigate();
    const courseId = parseInt(id, 10);
    
    const course = Mentordetail.find((course) => course.id === courseId);
    const handleClearSearch = () => {
      // Delay clearing the search bar by 1 second
      setTimeout(() => {
        SetSearchBarValue("");
      }, 100);
    };
    const [SearchBarValue,SetSearchBarValue] = useState("");
    const [follow,setfollow] = useState(true);
    const btnfollow = ()=>{
      setfollow(!follow);
    }
  

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
    <Box h="100vh">
     <Flex gap="56px" alignItems="start">
       <Sidebar8/>   
     </Flex>
      <Box  ml={{base:"0px",md:"250px"}} position="relative" bottom={{base:"14px",md:"645px" }} width={{base:"390px",md:"1265px"}} bg="rgba(247, 248, 250, 1)">
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
          
           

        </Box>
      <Flex>
       <Heading position="relative"display={{base:"none",lg:"block"}} bottom={{base:"0px",md:"70px"}} left="42px" fontWeight ="500" fontSize="32px" lineHeight="48px" fontFamily="Plus Jakarta Sans" >
                Mentor courses

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
                    left="1002px"
                    bottom="60px"
                    w="50px"
                    fit="cover"
                    borderRadius="24px"
                  />
                </Link>
                </Heading>
       </Flex>
      <Card bottom={{base:"2px",md:"62px"}} left={{base:"17px",md:"42px"}} w={{base:"350px",sm:"400px",md:"1122px"}} h="224px">
      <Flex mt="28px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Flex alignItems="center">
                        <Flex gap="10px"  flex={1} alignItems="center">
                          <Box h={{base:"30px",md:"50px"}}  bg="gray" w={{base:"40px",md:"50px"}} borderRadius="24px" />
                          <Text mb="7px" display={{base:"inline"}} fontWeight="bold" flexDirection={{base:"column"}} fontSize={{base:"15px",md:"22px"}} lineHeight="36px" alignSelf="end"color="black" fontFamily="Plus Jakarta Sans"> {course.mentorName}</Text>
                          <Stack position={"relative"} right={{base:"10px",lg:"162px"}} top={{base:"1px",lg:"32px"}} >
                          <Text >{course.Course}</Text>

                          </Stack>
                        </Flex>
                        <Flex>
                         <Image mt="15px" mr={{base:"12px",md:"12px"}} src="/document.svg" alt="Lincoln George" h="20px" w={{base:"17px",md:"20px"}} />
                        <Text  fontWeight="400" fontSize={{base:"11px",md:"14px"}} lineHeight={{base:"7px",md:"28px"}}  mr={{base:"2px",md:"212px"}} color="black" alignSelf="end">
                           
                            {course.coursescompleted}
                           
                          </Text>
                          </Flex>
                          <Flex  left={{base:"-113px",md:"2px"}} position="relative" top={{base:"72px",md:"7px"}} >
                          <Image  src="/star.svg" alt="Lincoln George" h="20px" w="20px" />
                          <Text ml="12px" color="black" alignSelf="end">
                           
                            {course.reviews}
                          </Text> 
                          </Flex>
                        <Flex gap="4px" left={{base:"-383px",md:"2px"}} position="relative" top={{base:"72px",md:"7px"}}    w="32%" justifyContent="center">
                        {follow ? 
                          <Text fontWeight="500" onClick={btnfollow}  fontSize="16px" lineHeight="28px" color="rgba(4, 164, 244, 1)">{course.followbtn}</Text>
                          :
                          <Text fontWeight="500"   fontSize="16px" lineHeight="28px" color="#d60606">{course.btn}</Text>
                          }
                        </Flex>
                      </Flex>
                      <Text  fontWeight="400" fontSize="14px" lineHeight="28px"  ml="63px" mb="82px" color="rgba(156, 156, 164, 1)"></Text>
        </Flex>
           <Stack>
                   <Flex display={{base:"none",md:"block"}}>
                    <FormControl left="10px" bottom="53px">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="440px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Search For Course Name/Mentor'/>
                      <Box  position="relative" left="383px" bottom="35px" w="54px" h="24px" >
                       <CiSearch size="100%"  />
                      </Box>
                    </FormControl>
                    <Box>
                  <Button onClick={onModal1Open} border=" 1px solid rgba(245, 245, 247, 1)" bottom="119px" right="-718px" position="relative" mt="12px"  ml="93px" bg="#fffff" color="#ffffff" w="97px" h="50px" borderRadius="10px">
                  <Image src="/range (3).svg" alt="Lincoln George" h="12px" w="12px" />
                  <Text ml="12px" color="black"> Level</Text>
                  </Button>
                  <Button onClick={onModal2Open} border=" 1px solid rgba(245, 245, 247, 1)" bottom="117px" right="-470px" position="relative" bg="#fffff" color="#ffffff" w="127px" h="50px" borderRadius="10px">
                  <Image src="/element-1.svg" alt="Lincoln George" h="18px" w="18px" />
                  <Text ml="12px" color="black">Category</Text>
                  </Button>
                  <Button onClick={onModal3Open} border=" 1px solid rgba(245, 245, 247, 1)"  bottom="118px" left="154px" position="relative" bg="#fffff" color="#ffffff" w="166px" h="50px" borderRadius="10px">
                  <Image src="/range (3).svg" alt="Lincoln George" h="12px" w="12px" />
                  <Text ml="12px" color="black">Sort By: Popular</Text>
                  </Button>
                  </Box>
                  <Box  display={{base:"block",md:"block"}}>
                  <Modal  isOpen={isModal2Open} onClose={onModal2Close}>
                   
                    <ModalContent position="relative" left="153px" top="84px" w="293px" h="171px">
                      <ModalHeader fontWeight="500" color="rgba(20, 21, 34, 1)" fontSize="14px" letterSpacing="1px" lineHeight="21px" fontFamily="'Plus Jakarta Sans', sans-serif">By Category</ModalHeader>
                      <ModalCloseButton w="12px" h="12px" border="none" />
                       <ModalBody>
                       <Button border=" 1px solid rgba(245, 245, 247, 1)"  bottom="3px" left="4px" position="relative" bg="#fffff" color="#ffffff" w="74px" h="36px" borderRadius="10px">
                       <Text ml="2px" color="black">All</Text>
                       </Button>
                       <Button  border=" 1px solid #000000"  bottom="3px" left="24px" position="relative" bg="#000000" color="white" w="100px" h="36px" borderRadius="10px">
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
                   
                   <ModalContent position="relative" left="3px" top="84px" w="293px" h="171px">
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
        </Stack>
      </Card>
      <Box   ml={{base:"0px",lg:"-4px"}} position="relative" bottom={{base:"2px",lg:"5px"}} width={{base:"390px",md:"1245px"}} bg={{base:"rgba(247, 248, 250, 1)", lg:"rgba(247, 248, 250, 1)"}}>
     <Flex  transform={{base:"translateX(0px)",lg:"translateX(32px)"}} gap={{base:"8px",lg:"45px"}} wrap="wrap" p={{base:2,lg:4}}  flexDirection={{ md: "row", base: "row" }}>
          <Suspense fallback={<div>Loading feed...</div>}>
           {CourseData.map((d,index) => (
             <UserProfile5  {...d} display='none' isVisible={Visible} key={`Courses${index}`}/>
           ))}
         
         </Suspense>
         <Box w={"359px"} color={"#fffff"} >
       <MobileSidebar />
       </Box>
     </Flex>
    </Box>
    </Box>
     </Box> 
   
     
    </>

  )
}

export default MentorCourses
