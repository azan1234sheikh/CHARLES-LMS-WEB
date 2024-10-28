import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
       Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress} from '@chakra-ui/react';
    import { FiEye } from "react-icons/fi";
import AccSidebar from '../../Components/AccSidebar/AccSidebar';
  import DatePicker from "react-datepicker";
import Sidebar8 from '../../Components/Sidebar/sidebar';  
import { Checkbox, Image,Select  } from '@chakra-ui/react'  
   import { useNavigate } from 'react-router-dom';
   import React, {useRef,useState, Suspense } from "react";
   import "react-datepicker/dist/react-datepicker.css";  
   import { useBoolean } from '@chakra-ui/react'
   import {IconButton,Card,InputRightElement,InputGroup , Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
   import MobileHeader from '../../Components/MobileHeader/MobileHeader';
   import { CiSearch } from "react-icons/ci";
   import { IoMdClose } from "react-icons/io";

   import MobileSidebar from '../../Components/MobileSidebar/MobileSidebar';
const Accountsetting = (
    {
        userlanguage =" English (US)",
         useremail = "prista123@gmail.com",
        mentorfollow = "+ Follow  Mentor",
        timezone = "Your time zone is currently set to: (UTC -6.00) Central Time (US & Canada)",
        CourseDesccription= "The community's need for applications that can facilitate daily activities is increasing as technology advances. Currently, many companies are looking for developers so that they can sell products (goods or services) that can reach wider buyers online. To become a developer, we are not required to understand all the science of design, but at least we can know the basics so that we can realize the design into code into a complete application more effectively. This class is the right medium to learn design and coding at the same time. With Mentor, you will create useful applications by adding animations to applications that are made to make them more interesting and interactive                                                                                           Our expert Mentors will explain how to create a furniture application from the design to code stage using the flagship Google Flutter SDK framework. By using the popular design tool Figma, you will learn the basics of creating interactive mockups as an illustration into an application or commonly known as a prototype. Then you will learn to apply animation between screens to make the prototype come alive. After that, the process will continue to slicing with a variety of ready-to-use Flutter Widgets so that the developer's work can be more efficient, saving time and effor This class is suitable for those of you who want to deepen complete mobile application development on the front-end side. Later the application that is successfully built can become a portfolio for applying for work or your personal business needs. If you encounter difficulties while studying, please ask our Mentor directly through the Telegram group, OK? Register now and we are waiting in class!",
        AccountDelete="When you delete your account, you lose access to Front account services, and we permanently delete your personal data. You can cancel the deletion for 14 days.",
        ...props}
) => {
  const handleClearSearch = () => {
    setTimeout(() => {
   SetSearchBarValue("");
 }, 100);
};
    const [SearchBarValue,SetSearchBarValue] = useState(""); 
    const [flag, setFlag] = useBoolean()
    const [showinputs,setShowinputs] = useState();
    const [showusername,setShowusername] = useState();
    const [showemail,setShowemail] = useState();
    const [showLanguage,setShowLanguage] = useState();
    const [showtimezone,setShowtimezone] = useState();
    const [showDelete,setshowDelete] = useState();



    const handleToggle = () => setShowinputs(prevState => !prevState);
    const handlesign = () => setShowusername(prevState => !prevState);
    const handleemail = () => setShowemail(prevState => !prevState);
    const handleLanguage = () => setShowLanguage(prevState => !prevState);
    const handletimezone = () => setShowtimezone(prevState => !prevState);
    const handleDelete = () => setshowDelete(prevState => !prevState);

  return (
    
  <>
    <Box h="100vh" overflowX={"hidden"}>
      <Flex gap={{ base: "0px", md: "56px" }} alignItems="start">
    <Sidebar8/>
    <Flex  mt={{ base: "0px", md: "30px" }}
    gap="22px"
    alignSelf="center" 
    flex={1}
    flexDirection="column">
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
     
   <Box 
    ml={{ base: "0px", md: "250px" }}
    
    position="relative"
     bottom={{base:"117px",md:"625px" }}
     width="100%"
      bg="rgba(247, 248, 250, 1)">
        <Box display={{ base: "block", md: "none" }} mb={{ base: "22px" }}>
      <MobileHeader />
      <FormControl bg="white" w="90%" mx="auto" mt="20px">
        <InputGroup>
          <Input
            w="full"
            value={SearchBarValue}
            onChange={(e) => SetSearchBarValue(e.target.value)}
            placeholder="Search For Course Name/Mentor"
            h="46px"
            fontSize="12px"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            _hover={{ border: "1px solid rgba(255, 187, 84, 1)" }}
          />
          <InputRightElement>
            <CiSearch size={"24px"} />
          </InputRightElement>
          {SearchBarValue?.length > 0 && (
            <Box position="absolute" right="40px" top="10px">
              <IoMdClose onClick={handleClearSearch} size={"24px"} />
            </Box>
          )}
        </InputGroup>
      </FormControl>
    </Box>
   <Grid
    templateColumns={{ base: "1fr", md: "1fr 3fr" }}
     gap={1} 
      p={4} >
    
     <AccSidebar/>

      <Card 
      boxShadow="md"
      p={6}
      w={{base:"100%",lg:"744px"}}
      h="full"
      bg="white"
       borderRadius="lg"
      >
      <Text mt="23px" ml="15px" fontFamily="Plus Jakarta Sans" lineHeight="27px" fontWeight="700" fontSize="18px" color="rgba(20, 21, 34, 1)">Edit Profile</Text>
       <Stack ml="22px" transform="translateY(20px)">
        <Flex>
        <Text  fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
        Password
        </Text>
        <Button isChecked={showinputs} onClick={handleToggle} ml={{base:"150px",md:"522px",lg:"522px"}} borderRadius="6px" w="46px"h="24px" bg="rgba(245, 245, 247, 1)" color="black" > {showinputs ? 'hide' : 'show'}</Button>
        </Flex>
        {showinputs&&(
              <Stack>
              <FormControl mt="4">
              <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif" > Current Password</FormLabel>
              <InputGroup>
              <Input mt="12px" w="385px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }} borderRadius="10px"  h="50px" name='Password' fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Enter Your Password'/>
                <InputRightElement>
                  <IconButton  mt="32px" mr="672px"
                    icon={<FiEye  />}
                    w="34px" h="34px" 
                    variant="ghost"
                    aria-label="Toggle Password Visibility"
                  />
                </InputRightElement>
              </InputGroup>
              </FormControl>
               
              <FormControl mt="4">
              <FormLabel mt="12px" htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif" > Updated Password</FormLabel>
              <InputGroup>
              <Input mt="12px" w="385px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }} borderRadius="10px"  h="50px" name='Password' fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Enter Your Password'/>
                <InputRightElement>
                  <IconButton  mt="32px" mr="672px"
                    icon={<FiEye  />}
                    w="34px" h="34px" 
                    variant="ghost"
                    aria-label="Toggle Password Visibility"
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl> 
            <Flex>
          <Button 
          bg=" rgba(38, 189, 217, 1);
"         mt="9" 
          fontWeight="500"
          fontSize="14px"
          borderRadius="10px"
          p="13px 24px" // Correct padding syntax
          lineHeight="21px"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          w="170px"
          h="50px"
          left="9px" // Optional: add margin-left to separate the button from the text
          _hover={{ bg: "#26bbd5"  }} 
        >
          Save Changes
        </Button>
        <Text mt="48px" ml="42px" color=" rgba(156, 156, 164, 1);" fontWeight="500" fontSize="14px" lineHeight="21px" fontFamily="'Plus Jakarta Sans', sans-serif">
          Forgot Password
          </Text>
          </Flex>
            </Stack>
        )}
         <Flex>
        <Text mt="15px" fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
        Username
        </Text>
        <Button onClick={handlesign} mt="19px"  isChecked={showinputs}  ml={{base:"150px",md:"522px",lg:"522px"}} borderRadius="6px" w="46px"h="24px" bg="rgba(245, 245, 247, 1)" color="black" > {showusername ? 'hide' : 'show'}</Button>
        </Flex>
        {showusername&&(
              <Stack>
              <FormControl mt="">
              </FormControl> 
              <FormControl mt="2">
              <FormLabel mt="2px" htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif" > Edit Username</FormLabel>
              <InputGroup>
              <Input mt="12px" w="385px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }} borderRadius="10px"  h="50px" name='Password' fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Enter Username'/>
                <InputRightElement>
                  
                </InputRightElement>
              </InputGroup>
            </FormControl> 
            <Flex>
          <Button 
          bg=" rgba(38, 189, 217, 1);
"         mt="9" 
          fontWeight="500"
          fontSize="14px"
          borderRadius="10px"
          p="13px 24px" // Correct padding syntax
          lineHeight="21px"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          w="170px"
          h="50px"
          left="9px" // Optional: add margin-left to separate the button from the text
          _hover={{ bg: "#26bbd5"  }} 
        >
          Save Changes
        </Button>
          </Flex>
            </Stack>
        )}
       </Stack>
          
        <Flex mt="42px">
         <Stack>
        <Text ml="22px"  fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
        Email Address
        </Text>
        <Text  display="contents"  fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
             Your current email Address is {useremail}
        </Text>
        </Stack>
        <Button mt="12px" isChecked={showemail} onClick={handleemail} ml={{base:"150px",md:"280px",lg:"280px"}} borderRadius="6px" w="46px"h="24px" bg="rgba(245, 245, 247, 1)" color="black" > {showemail ? 'hide' : 'show'}</Button>
        </Flex>
        {showemail&&(
           <Stack ml="26px">
              <FormControl mt="4">
              <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif" > New Email Address</FormLabel>
              <InputGroup>
              <Input mt="12px" w="385px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }} borderRadius="10px"  h="50px" name='Password' fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Enter Your Password'/>
              
              </InputGroup>
              </FormControl>
            <Flex>
          <Button 
          bg=" rgba(38, 189, 217, 1);
"         mt="9" 
          fontWeight="500"
          fontSize="14px"
          borderRadius="10px"
          p="13px 24px" // Correct padding syntax
          lineHeight="21px"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          w="170px"
          h="50px"
          left="9px" // Optional: add margin-left to separate the button from the text
          _hover={{ bg: "#26bbd5"  }} 
        >
          Save Changes
        </Button>
          </Flex>
            </Stack>
          
        )}
        <Flex mt="42px">
         <Stack>
        <Text ml="22px"  fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
        Language
        </Text>
        <Text   display="contents"  fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
        Your language is currently set to: {userlanguage}
        </Text>
        </Stack>
        <Button mt="12px" isChecked={showLanguage} onClick={handleLanguage} ml={{base:"150px",md:"325px",lg:"325px"}} borderRadius="6px" w="46px"h="24px" bg="rgba(245, 245, 247, 1)" color="black" > {showemail ? 'hide' : 'show'}</Button>
        </Flex>
        {showLanguage&&(
             <Stack ml="26px">
               <Select w="400px" h="50px" mt="12px" placeholder='Select option'>
                    <option value='option1'>English Default</option>
                   <option value='option2'>French </option>
                   <option value='option3'>German</option>
                    </Select>
           <Flex>
         <Button 
         bg=" rgba(38, 189, 217, 1);
"         mt="9" 
         fontWeight="500"
         fontSize="14px"
         borderRadius="10px"
         p="13px 24px" // Correct padding syntax
         lineHeight="21px"
         fontFamily="'Plus Jakarta Sans', sans-serif"
         w="170px"
         h="50px"
         left="9px" // Optional: add margin-left to separate the button from the text
         _hover={{ bg: "#26bbd5"  }} 
       >
         Save Changes
       </Button>
         </Flex>
           </Stack>
        )}
        <Flex mt="42px">
         <Stack>
        <Text ml="22px"  fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
        Timezone
        </Text>
        <Text   display="contents"  fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
         {timezone}
        </Text>
        </Stack>
        <Button mt="12px" isChecked={showtimezone} ml={{base:"100px",md:"145px",lg:"145px"}} onClick={handletimezone}  borderRadius="6px" w="46px"h="24px" bg="rgba(245, 245, 247, 1)" color="black" > {showemail ? 'hide' : 'show'}</Button>
        </Flex>
        {showtimezone&&(
             <Stack ml="26px">
               <Select w="400px" h="50px" mt="12px" placeholder='Select option'>
                    <option value='option1'>(UTC -6.00) Central Time (US & Canada)</option>
                   <option value='option2'>(UTC +2:00) Eastern European Time (Athens, Jerusalem, Istanbul)</option>
                   <option value='option3'>(UTC -1:00) Azores, Cape Verde Islands</option>
                    </Select>
           <Flex>
         <Button 
         bg=" rgba(38, 189, 217, 1);
"         mt="9" 
         fontWeight="500"
         fontSize="14px"
         borderRadius="10px"
         p="13px 24px" // Correct padding syntax
         lineHeight="21px"
         fontFamily="'Plus Jakarta Sans', sans-serif"
         w="170px"
         h="50px"
         left="9px" // Optional: add margin-left to separate the button from the text
         _hover={{ bg: "#26bbd5"  }} 
       >
         Save Changes
       </Button>
         </Flex>
           </Stack>
        )}
         <Flex mt="42px">
         <Stack>
        <Text ml="22px"  fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
        Delete Your Account
        </Text>
        <Text   display="contents"  fontWeight="400" color="rgba(156, 156, 164, 1)" fontSize="14px" lineHeight="28px" fontFamily="Plus Jakarta Sans">
        {AccountDelete}
        </Text>
        </Stack>
        <Button mt="12px" isChecked={showDelete} onClick={handleDelete} mr={{base:"10px",md:"80px",lg:"80px"}} borderRadius="6px" w="46px"h="24px" bg="rgba(245, 245, 247, 1)" color="black" > {showDelete ? 'hide' : 'show'}</Button>
        </Flex>
         {showDelete&&(
          <Stack mt="22px">

          <Checkbox defaultUnChecked>Confirm that I want to delete my account.</Checkbox>
           <Flex>
           <Button 
         bg=" #ffffff;
"         mt="1px" 
         fontWeight="500"
         fontSize="14px"
         color="black"
         borderRadius="10px"
         p="13px 24px" // Correct padding syntax
         lineHeight="21px"
         fontFamily="'Plus Jakarta Sans', sans-serif"
         w="170px"
         h="50px"
         left="9px" // Optional: add margin-left to separate the button from the text
         _hover={{ bg: "#cbcbcb"  }} 
       >
        Learn more
       </Button>
           <Button 
         bg=" rgba(38, 189, 217, 1);
"         mt="1px" 
         fontWeight="500"
         fontSize="14px"
         borderRadius="10px"
         p="13px 24px" // Correct padding syntax
         lineHeight="21px"
         fontFamily="'Plus Jakarta Sans', sans-serif"
         w="170px"
         h="50px"
         left="29px" // Optional: add margin-left to separate the button from the text
         _hover={{ bg: "#26bbd5"  }} 
       >
        Delete 
       </Button>
           </Flex>
          </Stack>
         )}
      </Card>
      
    
    
  
      

  </Grid>
  
  </Box>
</Box>
  </>
  )
}

export default Accountsetting