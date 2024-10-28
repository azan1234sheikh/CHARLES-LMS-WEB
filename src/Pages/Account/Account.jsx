import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress} from '@chakra-ui/react';
    import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
  import AccSidebar from '../../Components/AccSidebar/AccSidebar';
    import DatePicker from "react-datepicker";
import Sidebar8 from '../../Components/Sidebar/sidebar';    
    import { Image,Select } from '@chakra-ui/react';
   import { useNavigate } from 'react-router-dom';
   import React, {useRef,useState, Suspense } from "react";
   import "react-datepicker/dist/react-datepicker.css";  
   import MobileHeader from '../../Components/MobileHeader/MobileHeader';
   import {IconButton,Card,InputRightElement,InputGroup} from '@chakra-ui/react'
   import { CiSearch } from "react-icons/ci";
   import { IoMdClose } from "react-icons/io";


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
   const formats = ['jpeg','png','pdf','jpg'];
    const videoRef = useRef(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [image,Setimage]= useState("");
    const handleClearSearch = () => {
         setTimeout(() => {
        SetSearchBarValue("");
      }, 100);
    };
    const [SearchBarValue,SetSearchBarValue] = useState("");
    const inputRef = useRef(null);

    const handleimgchange =()=>{
      if (inputRef.current) {
        inputRef.current.click();
    } else {
        console.error("Image ref is null");
    }

    }
   const handleeventchange=(event)=>{
       const file = event.target.files[0];
       if(file){
        let fileExtension=file.name.split(".").pop().toLowerCase();
        if(formats.includes(fileExtension)){
            setErrorMessage('');
            console.log("File accepted:", file);
            
             } else {
            
              setErrorMessage('Invalid file format. Please upload a PNG, JPEG, JPG, or PDF.');
            
             }
            
        
       }
       
       Setimage(event.target.files[0]);
   }
  return (
<>
<Box h="100vh"  bg="gra.50">
  <Flex gap={{ base: "0px", md: "56px" }} alignItems="start">
    <Sidebar8 />
    <Flex
      mt={{ base: "0px", md: "30px" }}
      gap="22px"
      flex={1}
      flexDirection="column"
    >
      <Flex
        justifyContent="space-between"
        alignItems="start"
        flexDirection={{ md: "row", base: "column" }}
        px={{ md: 0, base: "20px" }}
        as="header"
      >
        <Heading
          fontWeight="500"
          fontSize="32px"
          lineHeight="36px"
          fontFamily="Plus Jakarta Sans"
          display={{ base: "none", lg: "block" }}
        >
          Account
        </Heading>
      </Flex>
    </Flex>
  </Flex>

  <Box
    ml={{ base: "0px", md: "250px" }}
    mt={{ base: "0px", md: "-630px" }}
    bg="rgba(247, 248, 250, 1)"
    width="100%"
    p={4}
  >
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
      bg="rgba(247, 248, 250, 1)"
      p={4}
      rounded="lg"
    >
      <AccSidebar />
      <Card
        boxShadow="md"
        p={6}
        w={{base:"100%",lg:"744px"}}
        h="full"
        bg="white"
        borderRadius="lg"
      >
          <Input type='file' ref={inputRef} onChange={handleeventchange} display={"none"}/>
        <Text
          mt={2}
          fontFamily="Plus Jakarta Sans"
          fontWeight="700"
          fontSize="18px"
          color="black"
        >
          Edit Profile
        </Text>

        <Stack mt={6}>
          <Box onClick={handleeventchange}>
            {image ? 
              <Image
                h="150px"
                w="150px"
                borderRadius="full"
                src={URL.createObjectURL(image)}
              />
            : 
              
              <Image
                h="150px"
                w="150px"
                borderRadius="full"
                src="/Account.svg"
                
              />
            }
            <Image
              onClick={handleimgchange}
              src="./Upload.svg"
              alt="Upload"
              h="60px"
              position={"relative"}
              top={{base:"-33px",md:"-52px"}}
              left={{base:"81px",md:"102px"}}
              
              
            />
            
          </Box>
          <Flex mr={{base:"93px",md:"162px"}}  transform={{base:"translateY(-32px)",lg:"translateY(-142px)"}}  direction="column" align="center">
            <Text fontSize="14px" fontWeight="500" color="black">
              Upload Photo
            </Text>
            <Text fontSize="14px" color="gray.500"py={{md:"12px"}}>
              300x300 and max 2 MB
            </Text>
            
          </Flex>
        </Stack>

        <Stack spacing={3} >
          <FormControl w={{ base: "94%", md: "400px" }}>
            <Text fontWeight="500" color="black" fontSize="14px">
              Full Name
            </Text>
            <Input
              border="1px solid #979797"
              w="full"
              h="50px"
              placeholder="Enter Full Name"
              _hover={{ borderColor: "rgba(255, 187, 84, 1)" }}
            />
          </FormControl>

          <FormControl w={{ base: "94%", md: "400px" }}>
            <Text fontWeight="500" color="black" fontSize="14px">
              Location
            </Text>
            <Select border="1px solid gray" h="50px" placeholder="Lahore">
              <option value="Islamabad">Islamabad</option>
              <option value="Karachi">Karachi</option>
              <option value="Peshawar">Peshawar</option>
            </Select>
          </FormControl>

          <FormControl >
            <Text fontWeight="500" color="black" fontSize="14px">
              Birthday
            </Text>
            <InputGroup>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                customInput={
                  <Input
                  w={{ base: "auto",sm:"100%", md: "400px" }}
                    h="50px"
                    placeholder="Select date"
                    border="1px solid #979797"
                  />
                }
              />
              <InputRightElement>
                <Image
                  src="./celendar.svg"
                  alt="Calendar"
                  h="24px"
                  mt="2px"
                  mr={{base:"70px",md:"582px"}}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl w={{ base: "94%", md: "400px" }}>
            <Text fontWeight="500" color="black" fontSize="14px">
              Phone Number
            </Text>
            <Input
              h="50px"
              placeholder="Enter Phone Number"
              _hover={{ borderColor: "rgba(255, 187, 84, 1)" }}

            />
          </FormControl>

          <FormControl w={{ base: "90%", md: "400px" }}>
            <Text fontWeight="500" color="black" fontSize="14px">
              Bio
            </Text>
            <Input
              h="50px"
              placeholder="Write A brief Bio About Yourself"
              border="1px solid #979797"
              _hover={{ borderColor: "rgba(255, 187, 84, 1)" }}
            />
          </FormControl>
        </Stack>
      </Card>
    </Grid>
  </Box>
</Box>
</>
  )
}

export default Account