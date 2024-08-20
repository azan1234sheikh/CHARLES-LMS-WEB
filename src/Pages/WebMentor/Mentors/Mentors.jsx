import { Center, ChakraProvider, Container,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Icon} from '@chakra-ui/react';
    import Mentorcard from '../../../Components/MentorCard/Mentorcard.jsx';
       import Sidebar8 from '../../../Components/Sidebar/sidebar.jsx';
      import { Image } from '@chakra-ui/react';
      import { useNavigate } from 'react-router-dom';
      import React, { Suspense } from "react";
      import { CiSearch } from "react-icons/ci";
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
const Mentors = (
    {
        beginnerButton = "Beginner",
        courseTitle = "Creating Beautifull Landing Page in 1 Hour",
        mentorName = "Lincoln George",
        reviewText = "4,5",
        ...props}
) => {
  const navigatebtn = useNavigate();
  const handlebtn=()=>{
    navigatebtn('/MentorCourses');
  }
  const handleAccount=()=>{
    navigatebtn('/Account');
  }
  const handlenotfication=()=>{
    navigatebtn('/Notification');
  }
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
                    Tutors
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
                    <Link  onClick={handleAccount}>
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
                   <Box  position="relative" bottom="233px" right="92px">
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
                      
                      <Button onClick={onModal2Open} border=" 1px solid rgba(245, 245, 247, 1)" bottom="83px" left="734px" position="relative" bg="#fffff" color="#ffffff" w="127px" h="50px" borderRadius="10px">
                      <Image src="./element-1.svg" alt="Lincoln George" h="18px" w="18px" />
                      <Text ml="12px" color="black">Category</Text>
                      </Button>
                      <Button onClick={onModal3Open} border=" 1px solid rgba(245, 245, 247, 1)"  bottom="83px" left="774px" position="relative" bg="#fffff" color="#ffffff" w="166px" h="50px" borderRadius="10px">
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
          <Box   ml="250px" position="relative" bottom="555px" width="1265px" bg="rgba(247, 248, 250, 1)">
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} p={4} >
    
            {/* Card 1 */}
            <GridItem w="354px" >
              <Link href="#" >
                <Box onClick={handlebtn} position="relative" top="12px" left="23px">
                  <Flex
                    gap="20px"
                    bg="white"
                    w="354px"
                    h="153px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text fontWeight="714px" fontSize="14px" lineHeight="21px" alignSelf="end"color="black" textDecoration="none"> Emerson Levin</Text>
                        </Flex>
                        <Flex gap="4px"  mt="8px" w="32%" justifyContent="center">
                          <Text fontWeight="500" fontSize="14px" lineHeight="21px" color="rgba(219, 89, 98, 1)">Followed</Text>
                        </Flex>
                      </Flex>
                      <Text ml="43px" color="rgba(156, 156, 164, 1)">Ui Ux Design</Text>
                    </Flex>
                    <Stack>
                        <Flex position="relative" bottom="34px"   >
                        <Image  src="./document.svg" alt="Lincoln George" h="20px" w="20px" />
                        <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            50 Courses
                          </Text>
                        </Flex>
                        <Flex left="152px" position="relative" bottom="62px" >
                    <Image  src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                          <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            4.5(1200reviews)
                          </Text> 
                          </Flex>
                    </Stack>
                  </Flex>
                </Box>
              </Link>
            </GridItem>
            
            <GridItem w="354px" >
              <Link href="#" >
                <Box position="relative" top="12px" left="173px">
                  <Flex
                    gap="20px"
                    bg="white"
                    w="354px"
                    h="153px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text fontWeight="714px" fontSize="14px" lineHeight="21px" alignSelf="end"color="black" textDecoration="none"> Emerson Levin</Text>
                        </Flex>
                        <Flex gap="4px"  mt="8px" w="32%" justifyContent="center">
                          <Text fontWeight="500" fontSize="14px" lineHeight="21px" color="rgba(4, 164, 244, 1)">+Follow</Text>
                        </Flex>
                      </Flex>
                      <Text ml="43px" color="rgba(156, 156, 164, 1)">Ui Ux Design</Text>
                    </Flex>
                    <Stack>
                        <Flex position="relative" bottom="34px"   >
                        <Image  src="./document.svg" alt="Lincoln George" h="20px" w="20px" />
                        <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            50 Courses
                          </Text>
                        </Flex>
                        <Flex left="152px" position="relative" bottom="62px" >
                    <Image  src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                          <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            4.5(1200reviews)
                          </Text> 
                          </Flex>
                    </Stack>
                  </Flex>
                </Box>
              </Link>
            </GridItem>
            {/* Card 3 */}
            <Mentorcard/>
            
            <GridItem w="354px" >
              <Link href="#" >
                <Box position="relative" top="42px" left="178px">
                  <Flex
                    gap="20px"
                    bg="white"
                    w="354px"
                    h="153px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text fontWeight="714px" fontSize="14px" lineHeight="21px" alignSelf="end"color="black" textDecoration="none"> Emerson Levin</Text>
                        </Flex>
                        <Flex gap="4px"  mt="8px" w="32%" justifyContent="center">
                          <Text fontWeight="500" fontSize="14px" lineHeight="21px" color="rgba(4, 164, 244, 1)">+Follow</Text>
                        </Flex>
                      </Flex>
                      <Text ml="43px" color="rgba(156, 156, 164, 1)">Ui Ux Design</Text>
                    </Flex>
                    <Stack>
                        <Flex position="relative" bottom="34px"   >
                        <Image  src="./document.svg" alt="Lincoln George" h="20px" w="20px" />
                        <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            50 Courses
                          </Text>
                        </Flex>
                        <Flex left="152px" position="relative" bottom="62px" >
                    <Image  src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                          <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            4.5(1200reviews)
                          </Text> 
                          </Flex>
                    </Stack>
                  </Flex>
                </Box>
              </Link>
            </GridItem>
              
            <GridItem w="354px" >
              <Link href="#" >
                <Box position="relative" bottom="122px" left="23px">
                  <Flex
                    gap="20px"
                    bg="white"
                    w="354px"
                    h="153px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text fontWeight="714px" fontSize="14px" lineHeight="21px" alignSelf="end"color="black" textDecoration="none"> Emerson Levin</Text>
                        </Flex>
                        <Flex gap="4px"  mt="8px" w="32%" justifyContent="center">
                          <Text fontWeight="500" fontSize="14px" lineHeight="21px" color="rgba(4, 164, 244, 1)">+Follow</Text>
                        </Flex>
                      </Flex>
                      <Text ml="43px" color="rgba(156, 156, 164, 1)">Ui Ux Design</Text>
                    </Flex>
                    <Stack>
                        <Flex position="relative" bottom="34px"   >
                        <Image  src="./document.svg" alt="Lincoln George" h="20px" w="20px" />
                        <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            50 Courses
                          </Text>
                        </Flex>
                        <Flex left="152px" position="relative" bottom="62px" >
                    <Image  src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                          <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            4.5(1200reviews)
                          </Text> 
                          </Flex>
                    </Stack>
                  </Flex>
                </Box>
              </Link>
            </GridItem>
            
            <GridItem w="354px" >
              <Link href="#" >
                <Box position="relative" bottom="114px" right="212px">
                  <Flex
                    gap="20px"
                    bg="white"
                    w="354px"
                    h="153px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text fontWeight="714px" fontSize="14px" lineHeight="21px" alignSelf="end"color="black" textDecoration="none"> Emerson Levin</Text>
                        </Flex>
                        <Flex gap="4px"  mt="8px" w="32%" justifyContent="center">
                          <Text fontWeight="500" fontSize="14px" lineHeight="21px" color="rgba(4, 164, 244, 1)">+Follow</Text>
                        </Flex>
                      </Flex>
                      <Text ml="43px" color="rgba(156, 156, 164, 1)">Ui Ux Design</Text>
                    </Flex>
                    <Stack>
                        <Flex position="relative" bottom="34px"   >
                        <Image  src="./document.svg" alt="Lincoln George" h="20px" w="20px" />
                        <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            50 Courses
                          </Text>
                        </Flex>
                        <Flex left="152px" position="relative" bottom="62px" >
                    <Image  src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                          <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            4.5(1200reviews)
                          </Text> 
                          </Flex>
                    </Stack>
                  </Flex>
                </Box>
              </Link>
            </GridItem>
            <GridItem w="354px" >
              <Link href="#" >
                <Box position="relative" bottom="90px" left="22px">
                  <Flex
                    gap="20px"
                    bg="white"
                    w="354px"
                    h="153px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text fontWeight="714px" fontSize="14px" lineHeight="21px" alignSelf="end"color="black" textDecoration="none"> Emerson Levin</Text>
                        </Flex>
                        <Flex gap="4px"  mt="8px" w="32%" justifyContent="center">
                          <Text fontWeight="500" fontSize="14px" lineHeight="21px" color="rgba(4, 164, 244, 1)">+Follow</Text>
                        </Flex>
                      </Flex>
                      <Text ml="43px" color="rgba(156, 156, 164, 1)">Ui Ux Design</Text>
                    </Flex>
                    <Stack>
                        <Flex position="relative" bottom="34px"   >
                        <Image  src="./document.svg" alt="Lincoln George" h="20px" w="20px" />
                        <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            50 Courses
                          </Text>
                        </Flex>
                        <Flex left="152px" position="relative" bottom="62px" >
                    <Image  src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                          <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            4.5(1200reviews)
                          </Text> 
                          </Flex>
                    </Stack>
                  </Flex>
                </Box>
              </Link>
            </GridItem>
            
            <GridItem w="354px" >
              <Link href="#" >
                <Box position="relative" bottom="84px" right="203px">
                  <Flex
                    gap="20px"
                    bg="white"
                    w="354px"
                    h="153px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text fontWeight="714px" fontSize="14px" lineHeight="21px" alignSelf="end"color="black" textDecoration="none"> Emerson Levin</Text>
                        </Flex>
                        <Flex gap="4px"  mt="8px" w="32%" justifyContent="center">
                          <Text fontWeight="500" fontSize="14px" lineHeight="21px" color="rgba(4, 164, 244, 1)">+Follow</Text>
                        </Flex>
                      </Flex>
                      <Text ml="43px" color="rgba(156, 156, 164, 1)">Ui Ux Design</Text>
                    </Flex>
                    <Stack>
                        <Flex position="relative" bottom="34px"   >
                        <Image  src="./document.svg" alt="Lincoln George" h="20px" w="20px" />
                        <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            50 Courses
                          </Text>
                        </Flex>
                        <Flex left="152px" position="relative" bottom="62px" >
                    <Image  src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                          <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            4.5(1200reviews)
                          </Text> 
                          </Flex>
                    </Stack>
                  </Flex>
                </Box>
              </Link>
            </GridItem>
            
            <GridItem w="354px" >
              <Link href="#" >
                <Box position="relative" bottom="238px" left="793px">
                  <Flex
                    gap="20px"
                    bg="white"
                    w="354px"
                    h="153px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text fontWeight="714px" fontSize="14px" lineHeight="21px" alignSelf="end"color="black" textDecoration="none"> Emerson Levin</Text>
                        </Flex>
                        <Flex gap="4px"  mt="8px" w="32%" justifyContent="center">
                          <Text fontWeight="500" fontSize="14px" lineHeight="21px" color="rgba(4, 164, 244, 1)">+Follow</Text>
                        </Flex>
                      </Flex>
                      <Text ml="43px" color="rgba(156, 156, 164, 1)">Ui Ux Design</Text>
                    </Flex>
                    <Stack>
                        <Flex position="relative" bottom="34px"   >
                        <Image  src="./document.svg" alt="Lincoln George" h="20px" w="20px" />
                        <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            50 Courses
                          </Text>
                        </Flex>
                        <Flex left="152px" position="relative" bottom="62px" >
                    <Image  src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                          <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            4.5(1200reviews)
                          </Text> 
                          </Flex>
                    </Stack>
                  </Flex>
                </Box>
              </Link>
            </GridItem>
            
            <GridItem w="354px" >
              <Link href="#" >
                <Box position="relative" bottom="63px" right="593px">
                  <Flex
                    gap="20px"
                    bg="white"
                    w="354px"
                    h="153px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text fontWeight="714px" fontSize="14px" lineHeight="21px" alignSelf="end"color="black" textDecoration="none"> Emerson Levin</Text>
                        </Flex>
                        <Flex gap="4px"  mt="8px" w="32%" justifyContent="center">
                          <Text fontWeight="500" fontSize="14px" lineHeight="21px" color="rgba(4, 164, 244, 1)">+Follow</Text>
                        </Flex>
                      </Flex>
                      <Text ml="43px" color="rgba(156, 156, 164, 1)">Ui Ux Design</Text>
                    </Flex>
                    <Stack>
                        <Flex position="relative" bottom="34px"   >
                        <Image  src="./document.svg" alt="Lincoln George" h="20px" w="20px" />
                        <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            50 Courses
                          </Text>
                        </Flex>
                        <Flex left="152px" position="relative" bottom="62px" >
                    <Image  src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                          <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            4.5(1200reviews)
                          </Text> 
                          </Flex>
                    </Stack>
                  </Flex>
                </Box>
              </Link>
            </GridItem>
            <GridItem w="354px" >
              <Link href="#" >
                <Box position="relative" bottom="212px" left="409px">
                  <Flex
                    gap="20px"
                    bg="white"
                    w="354px"
                    h="153px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text fontWeight="714px" fontSize="14px" lineHeight="21px" alignSelf="end"color="black" textDecoration="none"> Emerson Levin</Text>
                        </Flex>
                        <Flex gap="4px"  mt="8px" w="32%" justifyContent="center">
                          <Text fontWeight="500" fontSize="14px" lineHeight="21px" color="rgba(4, 164, 244, 1)">+Follow</Text>
                        </Flex>
                      </Flex>
                      <Text ml="43px" color="rgba(156, 156, 164, 1)">Ui Ux Design</Text>
                    </Flex>
                    <Stack>
                        <Flex position="relative" bottom="34px"   >
                        <Image  src="./document.svg" alt="Lincoln George" h="20px" w="20px" />
                        <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            50 Courses
                          </Text>
                        </Flex>
                        <Flex left="152px" position="relative" bottom="62px" >
                    <Image  src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                          <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            4.5(1200reviews)
                          </Text> 
                          </Flex>
                    </Stack>
                  </Flex>
                </Box>
              </Link>
            </GridItem>
            <GridItem w="354px" >
              <Link href="#" >
                <Box position="relative" bottom="208px" left="183px">
                  <Flex
                    gap="20px"
                    bg="white"
                    w="354px"
                    h="153px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text fontWeight="714px" fontSize="14px" lineHeight="21px" alignSelf="end"color="black" textDecoration="none"> Emerson Levin</Text>
                        </Flex>
                        <Flex gap="4px"  mt="8px" w="32%" justifyContent="center">
                          <Text fontWeight="500" fontSize="14px" lineHeight="21px" color="rgba(4, 164, 244, 1)">+Follow</Text>
                        </Flex>
                      </Flex>
                      <Text ml="43px" color="rgba(156, 156, 164, 1)">Ui Ux Design</Text>
                    </Flex>
                    <Stack>
                        <Flex position="relative" bottom="34px"   >
                        <Image  src="./document.svg" alt="Lincoln George" h="20px" w="20px" />
                        <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            50 Courses
                          </Text>
                        </Flex>
                        <Flex left="152px" position="relative" bottom="62px" >
                    <Image  src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                          <Text ml="12px" color="black" alignSelf="end">
                            {/* {reviewText} */}
                            4.5(1200reviews)
                          </Text> 
                          </Flex>
                    </Stack>
                  </Flex>
                </Box>
              </Link>
            </GridItem>
            
          </Grid>
        </Box>
         </Box> 
       
         
        </>
      )
}

export default Mentors