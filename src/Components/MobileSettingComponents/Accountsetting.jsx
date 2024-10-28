import React from 'react'
import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress,
    Card, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container} from '@chakra-ui/react';
    import { Switch, Tabs, TabList, TabPanels,Image ,Tab, TabPanel,TabIndicator,Icon,Select } from '@chakra-ui/react'

const Accountsetting = () => {
  return (
    <>

             
             <Text  ml={{base:"-15px"}} fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
             Language
             </Text>
             <Flex ml={{base:"-16px"}} >
                  <Stack w={{base:"340px",md:"450px"}}>
                  <Select mt="12px" placeholder='Select option'>
                      <option value='option1'>English Default</option>
                     <option value='option2'>French </option>
                     <option value='option3'>German</option>
                      </Select>
                      <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                      Timezone 
                      </Text>
                      <Select mt="12px" placeholder='English Default'>
                      <option value='option1'>Asian(Pkt)</option>
                     <option value='option2'>American</option>
                     <option value='option3'>Afirica</option>
                      </Select>
                      <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                      Timezone</Text> 
                      <Flex>
                      <FormControl mt="2">
                       {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                       <Input w={{base:"160px",lg:"216px"}}  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}  h="50px" fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Date'/>
                       <Box color="black" position="relative" left="402px" bottom="35px" w="54px" h="24px" >
                       <Image src='./Vector (1).svg'></Image>
                       </Box>
                       </FormControl>
                       <FormControl mt="3">
                       <Input w={{base:"160px",lg:"216px"}}  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Mon'/>
                       <Box  position="relative" right="39px" bottom="35px" w="54px" h="24px" >
                       <Image src='./Vector.svg'></Image>
                       </Box>
                       </FormControl>
                      </Flex>
                       <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                         Date Format 
                      </Text>
                      <Flex>
                      <FormControl mt="3">
                       {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                       <Input w={{base:"160px",lg:"216px"}}  _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}  h="50px" fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Select Date'/>
                       <Box color="black" position="relative" left="402px" bottom="35px" w="54px" h="24px" >
                       <Image src='./Vector (1).svg'></Image>
                       </Box>
                       </FormControl>
                       <FormControl mt="3">
                       <Input w={{base:"160px",lg:"216px"}} _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Mon'/>
                       <Box  position="relative" right="39px" bottom="35px" w="54px" h="24px" >
                       <Image src='./Vector.svg'></Image>
                       </Box>
                       </FormControl>
                      </Flex>
                       <Button fontSize="14px" position="relative" left="10px" h="50px" fontFamily="Plus Jakarta Sans" bg="rgba(38, 189, 217, 1)" fontWeight={500} w="150px" borderRadius="10px">
                       Buy Course
                        </Button>
                  </Stack>

                  
                </Flex>

    </>
  )
}

export default Accountsetting