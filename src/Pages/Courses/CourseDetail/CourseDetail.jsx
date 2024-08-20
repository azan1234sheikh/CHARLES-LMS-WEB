import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress} from '@chakra-ui/react';
   import Sidebar8 from '../../../Components/Sidebar/sidebar.jsx';
    import { Image } from '@chakra-ui/react';
    import RatingBar  from "../../../Components/Ratingbar/Ratingbar.jsx"
   import { useNavigate } from 'react-router-dom';
   import React, {useRef,useState, Suspense } from "react";
   import {FaPlay, FaPause } from "react-icons/fa";
   import { AspectRatio } from '@chakra-ui/react'
   import {IconButton,Card   , Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
   import DatePicker from "react-datepicker";
   import "react-datepicker/dist/react-datepicker.css";  
   import AccountComponent from '../../../Components/CourseDetail/AccountComponent.jsx';
   const CourseDetail = (
    {
        beginnerButton = "Beginner",
        courseTitle = "Animation is the Key of Successfull UI/UX Design",
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
        figmaprototype="2. Make a micro interaction with principle",
        CourseDesccription= "The community's need for applications that can facilitate daily activities is increasing as technology advances. Currently, many companies are looking for developers so that they can sell products (goods or services) that can reach wider buyers online. To become a developer, we are not required to understand all the science of design, but at least we can know the basics so that we can realize the design into code into a complete application more effectively. This class is the right medium to learn design and coding at the same time. With Mentor, you will create useful applications by adding animations to applications that are made to make them more interesting and interactive                                                                                           Our expert Mentors will explain how to create a furniture application from the design to code stage using the flagship Google Flutter SDK framework. By using the popular design tool Figma, you will learn the basics of creating interactive mockups as an illustration into an application or commonly known as a prototype. Then you will learn to apply animation between screens to make the prototype come alive. After that, the process will continue to slicing with a variety of ready-to-use Flutter Widgets so that the developer's work can be more efficient, saving time and effor This class is suitable for those of you who want to deepen complete mobile application development on the front-end side. Later the application that is successfully built can become a portfolio for applying for work or your personal business needs. If you encounter difficulties while studying, please ask our Mentor directly through the Telegram group, OK? Register now and we are waiting in class!",
        ...props}
   ) => {
    const videoRef = useRef(null);
    const[isPlaying , setisplaying] = useState(false);
    const items = [
      { id: 1, name: 'Item 1', category: 'A-Z' },
      { id: 2, name: 'Item 2', category: 'Z-A' },
      { id: 3, name: 'Item 3', category: 'Popular' },
      { id: 4, name: 'Item 4', category: 'Category 3' },
    ];
    const handlevideobtn=()=>{
        if (videoRef.current && typeof videoRef.current.play === 'function') {
            videoRef.current.play();
          } else {
            console.error('Play function is not available');
          }
    }
    

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
                   <Heading position="relative" bottom="290px" fontWeight ="500" fontSize="32px" lineHeight="48px" fontFamily="Plus Jakarta Sans" >
                   My Courses
   
                   <Link href="#">
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
                   <Link href="#">
                     <Image
                       src="./Rectangle 5997 (1).svg"
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
            <GridItem>
            <Flex direction="column" ml="24px" w="744px" h="500px" bg="rgba(226, 226, 226, 0.674)" alignSelf="stretch" p="10px" borderRadius="10px">
            
            <iframe ref={videoRef}  title="Course Video" src="" type="video/mp4" controls={false} allowFullScreen/>
              <Box ml="12px" mt="293px" borderRadius="8px" w="704px" h="41px" p="10px, 16px, 10px, 16px" bg="white">
              <IconButton  borderRadius="8px" bg="white" w="50px" color="black" 
               icon={isPlaying ? <FaPause/>  :  <FaPlay />}
              onClick={handlevideobtn} aria-label="Play/Pause"/>
              </Box>
             
            </Flex>
            <Box h="997px" ml="25px" bg="white" >
            <Text mb="12px" ml="22px" color="rgba(20, 21, 34, 1)" fontWeight="700" fontSize="32px" fontFamily="Plus Jakarta Sans" > 
            Animation is the Key of Successfull UI/UX Design  
            </Text>
            <Flex>
            <Link href="#">
                     <Image
                       src="./Rectangle 5997 (1).svg"
                       alt="Image"
                       h="30px"
                       position="relative"
                       w="30px"
                       fit="cover"
                       ml="12px"
                       mt="12px"
                       borderRadius="24px"
                     /> 
                   </Link>
                   
                    <Flex  mt="22px" >
                    
                   <Text fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(20, 21, 34, 1)"ml="23px">{studentName}</Text>
                   <Text ml="13px" fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(156, 156, 164, 1)"> {CourseCat}</Text>
                   <Text ml="13px" fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(4, 164, 244, 1)"> {mentorfollow}</Text>
                   </Flex>
                   <Image position="relative" top="24px" left="123px" src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                   <Text ml="132px" color="black" alignSelf="end">
                        4.5 </Text>
                   </Flex> 
                  
                   <Tabs left="22px" top="23px" border="transparent " position='relative' variant='unstyled'>
            <TabList >
            <Tab  _hover={{border: '1px solid gray'}} >General</Tab>
            
            <Tab >Assignments</Tab>
            <Tab >Tools</Tab>
            <Tab>Review</Tab>
            </TabList>
            <TabIndicator _hover={{ border: "1px solid #ffffff" }}mt='-1.5px' height='2px' bg='rgba(255, 187, 84, 1)' borderRadius='1px' />
             <TabPanels>
            <TabPanel>
            <Text fontWeight="500" color="rgba(20, 21, 34, 1)" fontSize="24px" lineHeight="36px" fontFamily="Plus Jakarta Sans">
            Description
            </Text>
            <Flex>
                  <Stack>
                    <Text mt="18px" alignContent="space-around" fontWeight="400" color="rgba(20, 21, 34, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans"  >{CourseDesccription}</Text>
                    <Text mt="13px" fontWeight="500" color="rgba(20, 21, 34, 1)" fontSize="24px" lineHeight="36px" fontFamily="Plus Jakarta Sans">Key Points</Text>
                    <Flex mt="12px" >
                        <Image h="24px" w="24px"  src='./tick-circle.svg'/>
                        <Text ml="13px" fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(20, 21, 34, 1)">Undestand the basics of Prototype and Animation  </Text>
                       
                    </Flex>
                    <Flex mt="12px">
                        <Image h="24px" w="24px"  src='./tick-circle.svg'/>
                        <Text ml="13px" fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(20, 21, 34, 1)">Understand the basics of MicroInteraction</Text>
                       
                    </Flex>
                    <Flex mt="12px">
                        <Image h="24px" w="24px"  src='./tick-circle.svg'/>
                        <Text ml="13px" fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(20, 21, 34, 1)"> Creating Animation (20 case studies) for mobile apps</Text>
                    </Flex>
                    <Flex mt="12px">
                        <Image h="24px" w="24px"  src='./tick-circle.svg'/>
                        <Text ml="13px" fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(20, 21, 34, 1)">Presenting designs using Animation</Text>
                    </Flex>
                  </Stack>
            </Flex>
            </TabPanel>
           
            
             <TabPanel>
              <Box mt="23px" w="684px" h="641px">
                <AccountComponent/>
                <Box mt="23px" w="684px" h="1px " bg="rgba(245, 245, 247, 1)"></Box>
                <AccountComponent Heading="2. Make a micro interaction with principles "/>
                <Box mt="23px" w="684px" h="1px " bg="rgba(245, 245, 247, 1)"></Box>
                <AccountComponent Heading="3. Make a showcase animation for dribbble" />
            </Box>
              
             </TabPanel>
        
           <TabPanel>
           <Flex>
            <Flex mt="192px" transform="TranslateX(-410px)">
            <GridItem  >
              <Link href="#" >
              <Box position="relative" bottom="138px" left="403px">
                  <Flex
                    gap="20px"
                    bg="white"
                    border="1px solid rgba(245, 245, 247, 1)"
                    w="332px" h="105px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                   
                    
                  >
                   <Flex ml="12px" mb="102px">
                  <Image src='./Figma.svg' />
                   <Stack >
                  <Text  ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="21px" fontWeight="500" fontSize="14px" color="rgba(20, 21, 34, 1)">Figma </Text>
                  <Text ml="17px"   fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
                  Freemium</Text>
                 </Stack>
                 </Flex>
                  </Flex>
                </Box>
              </Link>
            </GridItem>  
            </Flex>
            <Flex mt="192px" transform="TranslateX(-390px)">
            <GridItem  >
              <Link href="#" >
                <Box position="relative" bottom="138px" left="403px">
                  <Flex
                    gap="20px"
                    bg="white"
                    border="1px solid rgba(245, 245, 247, 1)"
                    w="332px" h="105px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                   
                    
                  >
                   <Flex ml="12px" mb="102px">
                  <Image src='./Principal.svg' />
                   <Stack >
                  <Text  ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="21px" fontWeight="500" fontSize="14px" color="rgba(20, 21, 34, 1)">Principle </Text>
                  <Text ml="17px"   fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
                  Freemium</Text>
                 </Stack>
                 </Flex>
                  </Flex>
                </Box>
              </Link>
            </GridItem>  
            </Flex>
            </Flex>
           </TabPanel>
            <TabPanel>
             <Stack mt="40px">
            <Text  ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="24px" fontWeight="500" fontSize="16px" color="rgba(20, 21, 34, 1)">Jason Smith</Text>
            <Box  ml="19px">         
              <RatingBar/>
            </Box>
            <Text  ml="15px" mb="112px" fontFamily="Plus Jakarta Sans" lineHeight="28px" fontWeight="400" fontSize="14px" color="rgba(20, 21, 34, 1)">This course definitely brings me more values than I expect. Thank you so much both of you guys!</Text>

            </Stack>
            <Stack transform="TranslateY(-70px)" >
            <Text  ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="24px" fontWeight="500" fontSize="16px" color="rgba(20, 21, 34, 1)">Wilson Armela</Text>
            <Box  ml="19px">         
              <RatingBar/>
            </Box>
            <Text  ml="15px" mb="112px" fontFamily="Plus Jakarta Sans" lineHeight="28px" fontWeight="400" fontSize="14px" color="rgba(20, 21, 34, 1)">Super helpful class! I'm on my way to create a Digital Marketing Agency and I have found plenty of value inside this course. Highly recommend!</Text>

            </Stack>
            <Stack transform="TranslateY(-120px)" >
            <Text  ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="24px" fontWeight="500" fontSize="16px" color="rgba(20, 21, 34, 1)"> Ajax Simpson</Text>
            <Box  ml="19px">         
              <RatingBar/>
            </Box>
            <Text  ml="15px" mb="112px" fontFamily="Plus Jakarta Sans" lineHeight="28px" fontWeight="400" fontSize="14px" color="rgba(20, 21, 34, 1)">This class exceeded my expectations!</Text>
             
            </Stack>
            </TabPanel>
          </TabPanels>
          </Tabs>  
            </Box>
            </GridItem>
            <Flex flexDirection="row">
            <Card borderRadius="18px" w="350px" h="708px" bg="white" ml="33px">
            <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="27px" fontWeight="700" fontSize="18px" color="rgba(20, 21, 34, 1)">{courseTitle}</Text>
            <Flex mt="23px">
            <Link href="#">
                     <Image 
                       src="./Rectangle 5997 (1).svg"
                       alt="Image"
                       h="30px"
                       position="relative"
                       w="30px"
                       fit="cover"
                       ml="12px"
                       mt="12px"
                       borderRadius="24px"
                     /> 
                   </Link>
                    
                   <Text mt="18px" fontFamily="Plus Jakarta Sans" fontWeight="400" lineHeight="28px" fontSize="14px" color="rgba(156, 156, 164, 1)"ml="23px">{studentName}</Text>
                   <Image position="relative" top="26px" left="123px" src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                   
                   <Text ml="132px" color="black" alignSelf="end">
                        {reviewText} </Text>
                   </Flex>
                   <Stack>
                   <Progress ml="22px" w="290px" mt="22px" borderRadius="12px" sx={{'& > div': { bg:'rgba(255, 187, 84, 1)',}}}size='sm' value={30} />
                   <Flex>
                    <Image mt="7px" src="./Number.svg"/>
                   <Text mt="18px" fontFamily="Plus Jakarta Sans" fontWeight="700" lineHeight="24px" fontSize="16px" color="#000000"ml="23px">{Modules}</Text>
                   <Text ml="127px" mt="18px" fontFamily="Plus Jakarta Sans" fontWeight="400" lineHeight="28px" fontSize="14px" color="rgba(156, 156, 164, 1)" >{ratio}</Text>     

                   </Flex>
                   <Flex> 
                    <Box  mt="7px" p="2px,2px,1px,2px" borderRadius="7px" w="30px" h="30px" bg="rgba(245, 245, 247, 1)" ><Text ml="12px" mt="8px">2</Text></Box>
                   <Text mt="18px" fontFamily="Plus Jakarta Sans" fontWeight="500" lineHeight="21px" fontSize="14px" color="rgba(156, 156, 164, 1)"ml="23px">{Module1}</Text>  
                   <Text ml="142px"  mt="18px" fontFamily="Plus Jakarta Sans" fontWeight="400" lineHeight="28px" fontSize="14px" color="rgba(156, 156, 164, 1)" >{Duration}</Text>     
                   </Flex> 
                   <Flex> 
                   <Box  mt="7px" p="2px,2px,1px,2px" borderRadius="7px" w="30px" h="30px" bg="rgba(245, 245, 247, 1)" ><Text ml="12px" mt="8px">2</Text></Box>
                   <Text mt="18px" fontFamily="Plus Jakarta Sans" fontWeight="500" lineHeight="21px" fontSize="14px" color="rgba(156, 156, 164, 1)"ml="23px">{Module2}</Text>
                   <Text ml="94px"  mt="18px" fontFamily="Plus Jakarta Sans" fontWeight="400" lineHeight="28px" fontSize="14px" color="rgba(156, 156, 164, 1)" >{Duration}</Text>     

                   </Flex> <Flex>
                   <Box  mt="7px" p="2px,2px,1px,2px" borderRadius="7px" w="30px" h="30px" bg="rgba(245, 245, 247, 1)" ><Text ml="12px" mt="8px">3</Text></Box>
                   <Text mt="18px" fontFamily="Plus Jakarta Sans" fontWeight="500" lineHeight="21px" fontSize="14px" color="rgba(156, 156, 164, 1)"ml="23px">{Module3}</Text>
                   <Text ml="142px"  mt="18px" fontFamily="Plus Jakarta Sans" fontWeight="400" lineHeight="28px" fontSize="14px" color="rgba(156, 156, 164, 1)" >{Duration}</Text>     

                   </Flex>  <Flex>
                   <Box  mt="7px" p="2px,2px,1px,2px" borderRadius="7px" w="30px" h="30px" bg="rgba(245, 245, 247, 1)" ><Text ml="12px" mt="8px">4</Text></Box>

                   <Text mt="18px" fontFamily="Plus Jakarta Sans" fontWeight="500" lineHeight="24px" fontSize="14px" color="rgba(156,156,164,1) "ml="23px">{Module4}</Text>
                   <Text ml="92px"  mt="18px" fontFamily="Plus Jakarta Sans" fontWeight="400" lineHeight="28px" fontSize="14px" color="rgba(156, 156, 164, 1)" >{Duration}</Text>   
                   </Flex>  
                   <Flex>
                   <Box  mt="7px" p="2px,2px,1px,2px" borderRadius="7px" w="30px" h="30px" bg="rgba(245, 245, 247, 1)" ><Text ml="12px" mt="8px">5</Text></Box>

                   <Text mt="18px" fontFamily="Plus Jakarta Sans" fontWeight="500" lineHeight="24px" fontSize="14px" color="rgba(156,156,164,1) "ml="23px">{Module5}</Text>
                   <Text ml="107px"  mt="18px" fontFamily="Plus Jakarta Sans" fontWeight="400" lineHeight="28px" fontSize="14px" color="rgba(156, 156, 164, 1)" >{Duration}</Text>   
                   </Flex>  
                   <Flex>
                   <Button fontSize="14px" mt="12px" position="relative"border="1px solid black " color="black" left="10px" h="50px" fontFamily="Plus Jakarta Sans" bg="#ffffff" fontWeight={500} w="150px" borderRadius="10px">
                      Give Review
                       </Button>
                       <Button ml="12px" fontSize="14px" mt="12px" position="relative" left="10px" h="50px" fontFamily="Plus Jakarta Sans" bg="rgba(38, 189, 217, 1)" fontWeight={500} w="150px" borderRadius="10px">
                      Next Module
                       </Button>
                       </Flex>
                   </Stack>
            </Card>
            </Flex>
             <Text mt="22px" ml="22px" fontFamily="Plus Jakarta Sans" fontWeight="700" lineHeight="48px" fontSize="32px"  color="rgba(20, 21, 34, 1)">Related Courses</Text>
            <GridItem  w="354px" h="369px" >
              
          <Link href="#" >
            <Box position="relative" top="92px" right="733px" >
              <Flex
                gap="20px"
                bg="white"
                w="340px"
                h="360px"
                flexDirection="column"
                p={{ base: "20px", sm: "30px" }}
                borderRadius="16px"
                _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                transition="all 0.2s ease"
              >
              
                <Flex bg="rgba(226, 226, 226, 0.674)" alignSelf="stretch" p="10px" borderRadius="10px">
                  <Button
                    size="sm"
                    rightIcon={<Image src="./range.svg" alt="Settings" w="12px" h="12px" />}
                    mt="100px"
                    fontFamily="Plus Jakarta Sans"
                    gap="6px"
                    minW="90px"
                    borderRadius="8px"
                  >
                    
                    Beginner
                  </Button>
                </Flex>
                <Stack>
                <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                  <Heading size="heading3xl" as="h6" color="black" fontFamily="Plus Jakarta Sans" lineHeight="150%">
                  Introduction Basic 
                  Programming HTML & CSS
                  </Heading>
                  <Progress borderRadius="12px" sx={{'& > div': { bg:'rgba(37, 199, 139, 1)',}}}size='sm' value={30} />
                  <Flex alignItems="center">
                    <Flex gap="10px" flex={1} alignItems="center">
                      <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                      <Text alignSelf="end"color="black" textDecoration="none"> Emerson Sopr</Text>
                    </Flex>
                    <Flex gap="4px" w="32%" justifyContent="center">
                      <Flex flex={1} flexDirection="column" alignItems="end">
                        <Image src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                      </Flex>
                     
                      <Text color="black" alignSelf="end">
                        4.5
                        
                      </Text>
                      
                    </Flex>
                  </Flex>
                </Flex>
                </Stack>
              </Flex>
            </Box>
          </Link>
        </GridItem>
          
        <GridItem  w="354px" h="369px" >
              
              <Link href="#" >
                <Box position="relative" bottom="272px" left="433px" >
                  <Flex
                    gap="20px"
                    bg="white"
                    w="340px"
                    h="360px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                  
                    <Flex bg="rgba(226, 226, 226, 0.674)" alignSelf="stretch" p="10px" borderRadius="10px">
                      <Button
                        size="sm"
                        rightIcon={<Image src="./range.svg" alt="Settings" w="12px" h="12px" />}
                        mt="100px"
                        fontFamily="Plus Jakarta Sans"
                        gap="6px"
                        minW="90px"
                        borderRadius="8px"
                      >
                        
                        Beginner
                      </Button>
                    </Flex>
                    <Stack>
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Heading size="heading3xl" as="h6" color="black" fontFamily="Plus Jakarta Sans" lineHeight="150%">
                      Introduction Basic 
                      Programming HTML & CSS
                      </Heading>
                      <Progress borderRadius="12px" sx={{'& > div': { bg:'rgba(37, 199, 139, 1)',}}}size='sm' value={30} />
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text alignSelf="end"color="black" textDecoration="none"> Emerson Sopr</Text>
                        </Flex>
                        <Flex gap="4px" w="32%" justifyContent="center">
                          <Flex flex={1} flexDirection="column" alignItems="end">
                            <Image src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                          </Flex>
                         
                          <Text color="black" alignSelf="end">
                            4.5
                            
                          </Text>
                          
                        </Flex>
                      </Flex>
                    </Flex>
                    </Stack>
                  </Flex>
                </Box>
              </Link>
            </GridItem>

            <GridItem  w="354px" h="369px" >
              
              <Link href="#" >
                <Box position="relative" bottom="272px" left="63px" >
                  <Flex
                    gap="20px"
                    bg="white"
                    w="340px"
                    h="360px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
                    transition="all 0.2s ease"
                  >
                  
                    <Flex bg="rgba(226, 226, 226, 0.674)" alignSelf="stretch" p="10px" borderRadius="10px">
                      <Button
                        size="sm"
                        rightIcon={<Image src="./range.svg" alt="Settings" w="12px" h="12px" />}
                        mt="100px"
                        fontFamily="Plus Jakarta Sans"
                        gap="6px"
                        minW="90px"
                        borderRadius="8px"
                      >
                        
                        Beginner
                      </Button>
                    </Flex>
                    <Stack>
                    <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
                      <Heading size="heading3xl" as="h6" color="black" fontFamily="Plus Jakarta Sans" lineHeight="150%">
                      Introduction Basic 
                      Programming HTML & CSS
                      </Heading>
                      <Progress borderRadius="12px" sx={{'& > div': { bg:'rgba(37, 199, 139, 1)',}}}size='sm' value={30} />
                      <Flex alignItems="center">
                        <Flex gap="10px" flex={1} alignItems="center">
                          <Box h="30px" bg="gray" w="30px" borderRadius="14px" />
                          <Text alignSelf="end"color="black" textDecoration="none"> Emerson Sopr</Text>
                        </Flex>
                        <Flex gap="4px" w="32%" justifyContent="center">
                          <Flex flex={1} flexDirection="column" alignItems="end">
                            <Image src="./star.svg" alt="Lincoln George" h="20px" w="20px" />
                          </Flex>
                         
                          <Text color="black" alignSelf="end">
                            4.5
                            
                          </Text>
                          
                        </Flex>
                      </Flex>
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
   
   
  
   
   export default CourseDetail