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


const Passwordsetting = () => {
  return (
    <>
           <Text fontWeight="500"  color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
              Old Password
           </Text>
           <Flex>
                <Stack>
                   <FormControl mt="3" >
                     {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                     <Input border="1px solid #979797" aria-label="Toggle Password Visibility" w={{base:"300px",lg:"452px"}} variant="ghost" _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Enter Old Passsword'/>
                     <Box  position="relative" left="433px" bottom="35px" w="54px" h="24px" >
                     
                     </Box>
                   </FormControl>
                   <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                    New Password
                    </Text>
                    <FormControl mt="3" >
                     {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                     <Input  border="1px solid #979797" aria-label="Toggle Password Visibility" w={{base:"300px",lg:"452px"}} variant="ghost" _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Enter New Passsword'/>
                     <Box  position="relative" left="433px" bottom="35px" w="54px" h="24px" >
                     
                     </Box>
                   </FormControl>
                    <Text fontWeight="500" color="black" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">
                    Retype New Password
                    </Text>
                     <Flex>
                     <FormControl mt="3" >
                     {/* <FormLabel htmlFor='Email' fontFamily="'Plus Jakarta Sans', sans-serif">Email Address</FormLabel> */}
                     <Input  border="1px solid #979797" aria-label="Toggle Password Visibility" w={{base:"300px",lg:"452px"}}  variant="ghost" _hover={{ border: "1px solid rgba(255, 187, 84, 1)"  }}   h="50px" name='Search For Course Name/Mentor' fontSize="12px" lineHeight="18px" fontWeight="400" fontFamily="'Plus Jakarta Sans', sans-serif" placeholder='Enter New Passsword'/>
                     <Box  position="relative" left="433px" bottom="35px" w="54px" h="24px" >
                     
                     </Box>
                   </FormControl>
                   
                    </Flex>
                   
                     <Button fontSize="14px" position="relative" left="10px" h="50px" fontFamily="Plus Jakarta Sans" bg="rgba(38, 189, 217, 1)" fontWeight={500} w="150px" borderRadius="10px">
                     Save Changes
                      </Button>
                      </Stack>

   </Flex>
            
   </>
  )
}

export default Passwordsetting