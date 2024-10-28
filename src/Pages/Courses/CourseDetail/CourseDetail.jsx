import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress} from '@chakra-ui/react';
   import Sidebar8 from '../../../Components/Sidebar/sidebar.jsx';
    import { Image } from '@chakra-ui/react';
    import RatingBar  from "../../../Components/Ratingbar/Ratingbar.jsx"
   import { useNavigate } from 'react-router-dom';
   import React, {useRef,useState, Suspense } from "react";
   import { useParams } from 'react-router-dom';
   import {FaPlay, FaPause } from "react-icons/fa";
   import { AspectRatio } from '@chakra-ui/react'
   import {IconButton,Card   , Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
   import DatePicker from "react-datepicker";
   import "react-datepicker/dist/react-datepicker.css";  
   import AccountComponent from '../../../Components/CourseDetail/AccountComponent.jsx';
   import CourseData from '../../../Components/Data/CourseData.js';
   import UserProfile2 from '../../../Components/UserProfile2/index.jsx';
import data from '../../../Components/Data/MycourseData.js';
import Coursedetail from '../../../Components/Data/Coursedetail.js';
import UserProfile5 from '../../../Components/UserProfile5/UserProfile5.jsx';
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
        children,
        
        figmaprototype="2. Make a micro interaction with principle",
        CourseDescription= "The community's need for applications that can facilitate daily activities is increasing as technology advances. Currently, many companies are looking for developers so that they can sell products (goods or services) that can reach wider buyers online. To become a developer, we are not required to understand all the science of design, but at least we can know the basics so that we can realize the design into code into a complete application more effectively. This class is the right medium to learn design and coding at the same time. With Mentor, you will create useful applications by adding animations to applications that are made to make them more interesting and interactive                                                                                           Our expert Mentors will explain how to create a furniture application from the design to code stage using the flagship Google Flutter SDK framework. By using the popular design tool Figma, you will learn the basics of creating interactive mockups as an illustration into an application or commonly known as a prototype. Then you will learn to apply animation between screens to make the prototype come alive. After that, the process will continue to slicing with a variety of ready-to-use Flutter Widgets so that the developer's work can be more efficient, saving time and effor This class is suitable for those of you who want to deepen complete mobile application development on the front-end side. Later the application that is successfully built can become a portfolio for applying for work or your personal business needs. If you encounter difficulties while studying, please ask our Mentor directly through the Telegram group, OK? Register now and we are waiting in class!",
        ...props}
   ) => {
    const videoRef = useRef(null);
    const { id } = useParams();
    
    const [isVisible, setIsVisible] = useState(true);
    const [isReadmore, setShowless] = useState(true);
    const[isPlaying , setisplaying] = useState(false);
    const [isReadMore, setIsReadMore] = useState(false);
    const btnnavigate = useNavigate();
    const courseId = parseInt(id, 10);
    const course = Coursedetail.find((course) => course.id === courseId);

  const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
  };
  const handleExplore=()=>{
    btnnavigate('/MyCourse');
  }

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
          <Box overflowX={"hidden"} bg={{base:"rgba(242, 246, 255, 1)", lg:"#ffff"}} h="100vh">
      <Flex gap="56px" alignItems="start">
          <Sidebar8/>
          <Flex mt="30px" gap="22px" alignSelf="center" flex={1} flexDirection="column">
          <Box display={{base:"block",md:"none"}} mb={{base:"22px"}}>
            <Button 
             onClick={handleExplore}
             left={"12px"}
             bg = {""}
           leftIcon={
            <Image src="/Full Arrow Right.svg" transform="rotate(-180deg)" alt="Full Arrow Right" w="20px" h="20px" />
            }>
            <Text ml={"122px"} fontWeight ="500" fontSize={{base:"18px",lg:"32px"}} lineHeight="48px" fontFamily="Plus Jakarta Sans">My Courses</Text>
            </Button>
            </Box>
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
   
                   <Link href="#" >
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
           
         <Box   ml={{base:"10px",lg:"250px"}} position="relative" bottom={{base:"150px",md:"595px"}} width={{base:"auto",md:"1265px"}} bg="rgba(247, 248, 250, 1)">
         <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} p={4} >
            <GridItem>
            <Flex direction="column"   w={{base:"355px",md:"744px"}} h={{base:"239px",lg:"500px"}} bg="rgba(226, 226, 226, 0.674)" alignSelf="stretch" p="10px" borderRadius="10px">
            
            <iframe ref={videoRef}  title="Course Video" src="" type="video/mp4" controls={false} allowFullScreen/>
              <Box ml="12px" transform={{base:"translateX(-10px)"}} mt={{base:"28px",lg:"293px"}} borderRadius="8px" w={{base:"336px",lg:"704px"}} h={{base:"30px",lg:"41px"}} p="10px, 16px, 10px, 16px" bg="white">
              <IconButton  borderRadius="8px" bg="white" w="50px" color="black" 
               icon={isPlaying ? <FaPause/>  :  <FaPlay />}
              onClick={handlevideobtn} aria-label="Play/Pause"/>
              </Box>
             
            </Flex>
            <Box h={{base:"1150px",lg:"997px"}} transform={{base:"translateY(600px)" ,lg:"translateY(0px)"}}  display={{lg:"block"}} w={{base:"356px",lg:"744px"}} ml="0px" bg="white" >
            <Text mb="12px" display={{base:"none",lg:"block"}} ml="22px" color="rgba(20, 21, 34, 1)" fontWeight="700" fontSize={{base:"16px",lg:"32px"}} fontFamily="Plus Jakarta Sans" > 
            {course.courseTitle}
            </Text>
            <Flex>
            <Link href="#" display={{base:"none",lg:"block"}}>
                     <Image
                       src="/Rectangle 5997 (1).svg"
                       alt="Image"
                       h="40px"
                       position="relative"
                       w="40px"
                       fit="cover"
                       ml="12px"
                       mt="12px"
                       borderRadius="24px"
                     /> 
                   </Link>
                   
                    <Flex transform={{lg:"translateY(23px)"}} display={{base:"none",lg:"flex"}} >
                    
                   <Text fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(20, 21, 34, 1)"ml="23px">{course.studentName}</Text>
                   <Text ml="13px" fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(156, 156, 164, 1)"> {course.CourseCat}</Text>
                   <Text ml="13px" fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(4, 164, 244, 1)"> {course.mentorfollow}</Text>
                   </Flex>
                   <Image display={{base:"none",lg:"block"}} position="relative" top="24px" left="123px" src="/star.svg" alt="Lincoln George" h="20px" w="20px" />
                   <Text display={{base:"none",lg:"block"}} ml="132px" color="black" alignSelf="end">
                        4.5 </Text>
                   </Flex> 
                  
                   <Tabs left="22px" top="23px" border="transparent " position='relative' variant='unstyled'>
            <TabList >
            <Tab fontSize={{base:"11px",lg:"16px"}} _hover={{border: '1px solid gray'}} fontWeight={{base:"bold",md:"normal"}} >General</Tab>
            
            <Tab fontSize={{base:"11px",lg:"17px"}} fontWeight={{base:"bold",md:"normal"}} >Assignments</Tab>
            <Tab  fontSize={{base:"11px",lg:"17px"}} fontWeight={{base:"bold",md:"normal"}} >Tools</Tab>
            <Tab fontSize={{base:"11px",lg:"17px"}} fontWeight={{base:"bold",md:"normal"}}>Review</Tab>
            </TabList>
            <TabIndicator _hover={{ border: "1px solid #ffffff" }}mt='-1.5px' height='2px' bg='rgba(255, 187, 84, 1)' borderRadius='1px' />
             <TabPanels>
            <TabPanel>
            <Text fontWeight="500" color="rgba(20, 21, 34, 1)" fontSize={{base:"14px",lg:"24px"}} lineHeight="36px" fontFamily="Plus Jakarta Sans">
            Description
            </Text>
            <Flex>
                  <Stack >
                  <Text mt="18px" alignContent="space-around" fontWeight="400" color="rgba(20, 21, 34, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans"  >
                  {isReadMore ? CourseDescription : `${CourseDescription.slice(0, 400)}...`}
                        {CourseDescription.length > 100 && (
                        <span 
                  onClick={toggleReadMore} 
                  style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
                  >
                  {isReadMore ? "Show Less" : "See More"}
                </span>
          )}
                  </Text>
                  <Box display={{base:"none",lg:"block"}}>
                    <Text mt="13px" fontWeight="500" color="rgba(20, 21, 34, 1)" fontSize="24px" lineHeight="36px" fontFamily="Plus Jakarta Sans">Key Points</Text>
                  
                    <Flex mt="12px" >
                        <Image h="24px" w="24px"  src='/tick-circle.svg'/>
                        <Text ml="13px" fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(20, 21, 34, 1)">Undestand the basics of Prototype and Animation  </Text>
                       
                    </Flex>
                    <Flex mt="12px">
                        <Image h="24px" w="24px"  src='/tick-circle.svg'/>
                        <Text ml="13px" fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(20, 21, 34, 1)">Understand the basics of MicroInteraction</Text>
                       
                    </Flex>
                    <Flex mt="12px">
                        <Image h="24px" w="24px"  src='/tick-circle.svg'/>
                        <Text ml="13px" fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(20, 21, 34, 1)"> Creating Animation (20 case studies) for mobile apps</Text>
                    </Flex>
                    <Flex mt="12px">
                        <Image h="24px" w="24px"  src='/tick-circle.svg'/>
                        <Text ml="13px" fontFamily="Plus Jakarta Sans" fontWeight="400" fontSize="14px" color="rgba(20, 21, 34, 1)">Presenting designs using Animation</Text>
                    </Flex>
                    </Box>
                  </Stack>
            </Flex>
            </TabPanel>
           
            
             <TabPanel>
              <Box mt="23px" w="684px" h="641px">
                <AccountComponent/>
                <Box mt="23px"  w={{base:"354px",lg:"684px"}}h="1px " bg="rgba(245, 245, 247, 1)"></Box>
                <AccountComponent Heading="2. Make a micro interaction with principles "/>
                <Box mt="23px" w={{base:"354px",lg:"684px"}} h="1px " bg="rgba(245, 245, 247, 1)"></Box>
                <AccountComponent Heading="3. Make a showcase animation for dribbble" />
            </Box>
              
             </TabPanel>
        
           <TabPanel >
           <Flex   flexDirection={{base:"column",md:"row"}}>
            <Flex  mt="192px" transform="TranslateX(-410px)">
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
                   <Flex  ml="12px" mb="102px">
                  <Image src='/Figma.svg' />
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
                <Box position="relative" bottom="138px" left={{base:"370px",lg:"403px"}}>
                  <Flex
                    gap="20px"
                    bg="white"
                    border="1px solid rgba(245, 245, 247, 1)"
                    w="332px" h="105px"
                    flexDirection="column"
                    p={{ base: "20px", sm: "30px" }}
                    borderRadius="16px"
                    mt={{base:"-153px",lg:"0px"}}
                    
                  >
                   <Flex ml={{base:"0px",lg:"12px"}} mb="102px">
                  <Image src='/Principal.svg' />
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
            <Flex transform={{base:"translateY(-1150px)" ,lg:"translateY(0px)"}} flexDirection="row">
            <Card borderRadius={{base:"2px",lg:"18px"}}  w="350px" h={{base:"600px",lg:"708px"}} bg="white" ml={{base:"2px",lg:"33px"}}>
            <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="27px" fontWeight="700" fontSize="18px" color="rgba(20, 21, 34, 1)">{course.courseTitle}</Text>
            <Flex mt="23px">
            <Link href="#">
                     <Image 
                       src="/Rectangle 5997 (1).svg"
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
                   <Image position="relative" top="26px" left="123px" src="/star.svg" alt="Lincoln George" h="20px" w="20px" />
                   
                   <Text ml="132px" color="black" alignSelf="end">
                        {reviewText} </Text>
                   </Flex>
                   <Stack>
                   <Progress ml="22px" w="290px" mt="22px" borderRadius="12px" sx={{'& > div': { bg:'rgba(255, 187, 84, 1)',}}}size='sm' value={30} />
                   <Flex>
                    <Image mt="7px" src="/Number.svg"/>
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
             <Box   ml={{base:"0px",lg:"-760px"}} position="relative" top={{base:"2px",lg:"75px"}} width={{base:"390px",md:"1245px"}} bg={{base:"rgba(242, 246, 255, 1)", lg:"rgba(247, 248, 250, 1)"}}>

             <Flex  gap={{base:"8px",lg:"45px"}} wrap="wrap" p={{base:2,lg:4}}  flexDirection={{ md: "row", base: "row" }}>
              {data.map((d,index) => (

             <UserProfile5  {...d} isVisible={isVisible}   key={`Courses${index}`}
             />

             ))}
            </Flex>
            </Box>
                
    
        </Grid>
        
        </Box>
      </Box>
       </>
     )
   }
   
   
  
   
   export default CourseDetail