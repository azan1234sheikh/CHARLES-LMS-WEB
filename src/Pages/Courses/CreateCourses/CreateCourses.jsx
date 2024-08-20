import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress,
    Card, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container} from '@chakra-ui/react';
   import Sidebar8 from '../../../Components/Sidebar/sidebar.jsx';
    import { Image } from '@chakra-ui/react';
   import { useNavigate } from 'react-router-dom';
   import React, { Suspense } from "react";
   import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'

const CreateCourses = () => {
  const navigatebtn = useNavigate();
  const handleAccount=()=>{
    navigatebtn('/Account');
  }
  const handlenotfication=()=>{
    navigatebtn('/Notification');
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
              <Flex flexDirection="row" mt="6px" px={{ md: 0, base: "20px" }}>
                <Heading position="relative" bottom="290px" fontWeight ="500" fontSize="32px" lineHeight="48px" fontFamily="Plus Jakarta Sans" >
                Create Courses

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
           </Flex>
          </Flex>
        </Flex>
        </Flex> 
        <Box   ml="250px" position="relative" bottom="615px" h="900px" width="1265px" bg="rgba(247, 248, 250, 1)">
      {/* <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} p={4} >

     </Grid> */}
      
         <Card  left="64px" top="35px"  w="1122px" h="639px" >
            <Tabs left="22px" top="23px" border="transparent " position='relative' variant='unstyled'>
            <TabList >
            <Tab  _hover={{border: '1px solid gray'}} >General</Tab>
            <Tab >Session</Tab>
            <Tab >Outcome</Tab>
            <Tab >SEO</Tab>
            <Tab>Finish</Tab>
            </TabList>
            <TabIndicator  mt='-1.5px' height='2px' bg='rgba(255, 187, 84, 1)' borderRadius='1px' />
             <TabPanels>
            <TabPanel>
            <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
            Course Name
            </Text>
            <Flex>
                 <Stack>
                    <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="452px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Search For Course Name/Mentor'/>
                      <Box  position="relative" left="433px" bottom="35px" w="54px" h="24px" >
                      
                      </Box>
                    </FormControl>
                    <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                     Training Date
                     </Text>
                     <Flex>
                     <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="216px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}  h="50px" fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Date'/>
                      <Box color="black" position="relative" left="402px" bottom="35px" w="54px" h="24px" >
                      <Image src='./Vector (1).svg'></Image>
                      </Box>
                      </FormControl>
                      <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="216px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Mon'/>
                      <Box  position="relative" right="39px" bottom="35px" w="54px" h="24px" >
                      <Image src='./Vector.svg'></Image>
                      </Box>
                      </FormControl>
                     </Flex>
                     <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                     Participant
                     </Text>
                     <FormControl mt="3">
                      <Input w="452px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Select Participant Criteria' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Participant Criteria'/>
                      <Box  position="relative" left="433px" bottom="35px" w="54px" h="24px" >
                      <Box position="relative" bottom="10px" right="429px">
                      <Accordion  h="50px" w="452px"  allowToggle border="transparent">
                          <AccordionItem>   
                            <AccordionButton border="0" >
                        <Box as='span' flex='1' textAlign='left'>
                            
                          </Box>
                     <AccordionIcon />
                   </AccordionButton>
    
                     <AccordionPanel  position="relative" right="3px" >
    <Stack w="452px">
                             <Text>
                                Above 18
                             </Text>
                             </Stack>
                   </AccordionPanel>
                   </AccordionItem>
                        </Accordion >
                      </Box>
                       </Box>
                      </FormControl>
                      <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                         Level
                     </Text>
                      <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="452px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Training Level'/>
                      <Box  position="relative"  bottom="35px" w="54px" h="24px" >
                      <Box position="relative" bottom="10px" right="9px">
                      <Accordion  _hover={{ border: "transparent"  }} border="transparent" h="50px" w="452px" allowToggle>
                          <AccordionItem>   
                            <AccordionButton >
                        <Box as='span' flex='1' >
                          </Box>
                         <AccordionIcon />
                        </AccordionButton>
    
    <AccordionPanel  position="relative" right="3px" >
                       <Stack h="55px" w="452px">
                             <Text>
                                 Basic
                             </Text>
                             <Text>
                                 Advanced
                             </Text>
                             </Stack>
                             </AccordionPanel>
                             </AccordionItem>
                        </Accordion>
                      </Box>
                          </Box>
                      </FormControl>
                      <Button fontSize="14px" position="relative" left="10px" h="50px" fontFamily="Plus Jakarta Sans" bg="rgba(38, 189, 217, 1)" fontWeight={500} w="150px" borderRadius="10px">
                      Buy Course
                       </Button>
                       </Stack>

    </Flex>
             </TabPanel>
        
           <TabPanel>
            <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
            Course Name
            </Text>
            <Flex>
                 <Stack>
                    <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="452px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Search For Course Name/Mentor'/>
                      <Box  position="relative" left="433px" bottom="35px" w="54px" h="24px" >
                      
                      </Box>
                    </FormControl>
                    <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                     Training Date
                     </Text>
                     <Flex>
                     <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="216px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}  h="50px" fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Date'/>
                      <Box color="black" position="relative" left="402px" bottom="35px" w="54px" h="24px" >
                      <Image src='./Vector (1).svg'></Image>
                      </Box>
                      </FormControl>
                      <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="216px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Mon'/>
                      <Box  position="relative" right="39px" bottom="35px" w="54px" h="24px" >
                      <Image src='./Vector.svg'></Image>
                      </Box>
                      </FormControl>
                     </Flex>
                     <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                     Participant
                     </Text>
                     <FormControl mt="3">
                      <Input w="452px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Select Participant Criteria' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Participant Criteria'/>
                      <Box  position="relative" left="433px" bottom="35px" w="54px" h="24px" >
                      <Box position="relative" bottom="10px" right="429px">
                      <Accordion  h="50px" w="452px"  allowToggle border="transparent">
                          <AccordionItem>   
                            <AccordionButton border="0" >
                        <Box as='span' flex='1' textAlign='left'>
                            
                          </Box>
                     <AccordionIcon />
                   </AccordionButton>
    
                     <AccordionPanel  position="relative" right="3px" >
    <Stack w="452px">
                             <Text>
                                Above 18
                             </Text>
                             </Stack>
                   </AccordionPanel>
                   </AccordionItem>
                        </Accordion >
                      </Box>
                       </Box>
                      </FormControl>
                      <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                         Level
                     </Text>
                      <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="452px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Training Level'/>
                      <Box  position="relative"  bottom="35px" w="54px" h="24px" >
                      <Box position="relative" bottom="10px" right="9px">
                      <Accordion  _hover={{ border: "transparent"  }} border="transparent" h="50px" w="452px" allowToggle>
                          <AccordionItem>   
                            <AccordionButton >
                        <Box as='span' flex='1' >
                          </Box>
                         <AccordionIcon />
                        </AccordionButton>
    
    <AccordionPanel  position="relative" right="3px" >
                       <Stack h="55px" w="452px">
                             <Text>
                                 Basic
                             </Text>
                             <Text>
                                 Advanced
                             </Text>
                             </Stack>
                             </AccordionPanel>
                             </AccordionItem>
                        </Accordion>
                      </Box>
                          </Box>
                      </FormControl>
                      <Button fontSize="14px" position="relative" left="10px" h="50px" fontFamily="Plus Jakarta Sans" bg="rgba(38, 189, 217, 1)" fontWeight={500} w="150px" borderRadius="10px">
                      Next To
                       </Button>
                       </Stack>

    </Flex>
             
           </TabPanel>
           <TabPanel>
            <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
            Course Name
            </Text>
            <Flex>
                 <Stack>
                    <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="452px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Search For Course Name/Mentor'/>
                      <Box  position="relative" left="433px" bottom="35px" w="54px" h="24px" >
                      
                      </Box>
                    </FormControl>
                    <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                     Training Date
                     </Text>
                     <Flex>
                     <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="216px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}  h="50px" fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Date'/>
                      <Box color="black" position="relative" left="402px" bottom="35px" w="54px" h="24px" >
                      <Image src='./Vector (1).svg'></Image>
                      </Box>
                      </FormControl>
                      <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="216px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Mon'/>
                      <Box  position="relative" right="39px" bottom="35px" w="54px" h="24px" >
                      <Image src='./Vector.svg'></Image>
                      </Box>
                      </FormControl>
                     </Flex>
                     <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                     Participant
                     </Text>
                     <FormControl mt="3">
                      <Input w="452px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Select Participant Criteria' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Participant Criteria'/>
                      <Box  position="relative" left="433px" bottom="35px" w="54px" h="24px" >
                      <Box position="relative" bottom="10px" right="429px">
                      <Accordion  h="50px" w="452px"  allowToggle border="transparent">
                          <AccordionItem>   
                            <AccordionButton border="0" >
                        <Box as='span' flex='1' textAlign='left'>
                            
                          </Box>
                     <AccordionIcon />
                   </AccordionButton>
    
                     <AccordionPanel  position="relative" right="3px" >
                       <Stack w="452px">
                             <Text>
                                Above 18
                             </Text>
                             </Stack>
                   </AccordionPanel>
                   </AccordionItem>
                        </Accordion >
                      </Box>
                       </Box>
                      </FormControl>
                      <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                         Level
                     </Text>
                      <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="452px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Training Level'/>
                      <Box  position="relative"  bottom="35px" w="54px" h="24px" >
                      <Box position="relative" bottom="10px" right="9px">
                      <Accordion  _hover={{ border: "transparent"  }} border="transparent" h="50px" w="452px" allowToggle>
                          <AccordionItem>   
                            <AccordionButton >
                        <Box as='span' flex='1' >
                          </Box>
                         <AccordionIcon />
                        </AccordionButton>
    
    <AccordionPanel  position="relative" right="3px" >
                       <Stack h="55px" w="452px">
                             <Text>
                                 Basic
                             </Text>
                             <Text>
                                 Advanced
                             </Text>
                             </Stack>
                             </AccordionPanel>
                             </AccordionItem>
                        </Accordion>
                      </Box>
                          </Box>
                      </FormControl>
                      <Button fontSize="14px" position="relative" left="10px" h="50px" fontFamily="Plus Jakarta Sans" bg="rgba(38, 189, 217, 1)" fontWeight={500} w="150px" borderRadius="10px">
                      Next
                       </Button>
                       </Stack>

    </Flex>
             </TabPanel>
             <TabPanel>
            <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
            Course Name
            </Text>
            <Flex>
                 <Stack>
                    <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="452px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Search For Course Name/Mentor'/>
                      <Box  position="relative" left="433px" bottom="35px" w="54px" h="24px" >
                      
                      </Box>
                    </FormControl>
                    <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                     Training Date
                     </Text>
                     <Flex>
                     <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="216px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}  h="50px" fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Date'/>
                      <Box color="black" position="relative" left="402px" bottom="35px" w="54px" h="24px" >
                      <Image src='./Vector (1).svg'></Image>
                      </Box>
                      </FormControl>
                      <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="216px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Mon'/>
                      <Box  position="relative" right="39px" bottom="35px" w="54px" h="24px" >
                      <Image src='./Vector.svg'></Image>
                      </Box>
                      </FormControl>
                     </Flex>
                     <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                     Participant
                     </Text>
                     <FormControl mt="3">
                      <Input w="452px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Select Participant Criteria' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Participant Criteria'/>
                      <Box  position="relative" left="433px" bottom="35px" w="54px" h="24px" >
                      <Box position="relative" bottom="10px" right="429px">
                      <Accordion  h="50px" w="452px"  allowToggle border="transparent">
                          <AccordionItem>   
                            <AccordionButton border="0" >
                        <Box as='span' flex='1' textAlign='left'>
                            
                          </Box>
                     <AccordionIcon />
                   </AccordionButton>
    
                     <AccordionPanel  position="relative" right="3px" >
    <Stack w="452px">
                             <Text>
                                Above 18
                             </Text>
                             </Stack>
                   </AccordionPanel>
                   </AccordionItem>
                        </Accordion >
                      </Box>
                       </Box>
                      </FormControl>
                      <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                         Level
                     </Text>
                      <FormControl mt="3">
                      {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                      <Input w="452px"  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Training Level'/>
                      <Box  position="relative"  bottom="35px" w="54px" h="24px" >
                      <Box position="relative" bottom="10px" right="9px">
                      <Accordion  _hover={{ border: "transparent"  }} border="transparent" h="50px" w="452px" allowToggle>
                          <AccordionItem>   
                            <AccordionButton >
                        <Box as='span' flex='1' >
                          </Box>
                         <AccordionIcon />
                        </AccordionButton>
    
                         <AccordionPanel  position="relative" right="3px" >
                       <Stack h="55px" w="452px">
                             <Text>
                                 Basic
                             </Text>
                             <Text>
                                 Advanced
                             </Text>
                             </Stack>
                             </AccordionPanel>
                             </AccordionItem>
                        </Accordion>
                      </Box>
                          </Box>
                      </FormControl>
                      <Button fontSize="14px" position="relative" left="10px" h="50px" fontFamily="Plus Jakarta Sans" bg="rgba(38, 189, 217, 1)" fontWeight={500} w="150px" borderRadius="10px">
                      Finish
                       </Button>
                       </Stack>

    </Flex>
             </TabPanel>
         
          </TabPanels>
          </Tabs>
         </Card>
        
     </Box>
   </Box>
    </>
  )
}

export default CreateCourses