import React from 'react'
import { Center, ChakraProvider,Text,Stack, FormControl, FormLabel,UnorderedList,
    ListItem, Link,Heading, Input, Button,Grid,GridItem, Flex, Box, Progress,

    Container} from '@chakra-ui/react';
    import { Switch, Tabs, TabList, TabPanels,Image ,Tab, TabPanel,TabIndicator,Icon,Select } from '@chakra-ui/react'

const MobileNotification = () => {
  return (
   <>
     <Flex>
           <Stack direction='Column'>
            <Flex mt="30px">
              <Switch mr="12px" colorScheme='blue' size='lg' />
              <Text fontWeight="500" color="rgba(20, 21, 34, 1)" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">Chat Personal/Group </Text>

            </Flex>
            <Flex mt="30px">
              <Switch mr="12px" colorScheme='blue' size='lg' />
              <Text fontWeight="500" color="rgba(20, 21, 34, 1)" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">Newest Update</Text>

            </Flex>
            <Flex mt="30px">
              <Switch mr="12px" colorScheme='blue' size='lg' />
              <Text fontWeight="500" color="rgba(20, 21, 34, 1)" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">Mentor Of The Month</Text>

            </Flex>
            <Flex mt="30px">
              <Switch mr="12px" colorScheme='blue' size='lg' />
              <Text fontWeight="500" color="rgba(20, 21, 34, 1)" fontSize="14px" lineHeight="21px" fontFamily="Plus Jakarta Sans">Course Of The Month</Text>
            </Flex>
             
            <Button fontSize={{base:"10px",md:"14px"}} top={{base:"0px",md:"30px"}} position="relative" left="0px" h={{base:"30px",md:"50px"}} fontFamily="Plus Jakarta Sans" bg="rgba(38, 189, 217, 1)" fontWeight={500} w={{base:"100px",md:"150px"}} borderRadius="10px">
              Save Changes
              </Button>
              
             </Stack>
             </Flex>
   </>
  )
}

export default MobileNotification