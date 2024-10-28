import { Heading, Text, Box, Flex ,ChakraProvider,SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import BarChart from "../Charts/Barchart.jsx";
import {
    GraduatebarChart,
    GraduatebarchartOptions
} from '../Chartdata.js';
import BarChart2 from "../Charts/Barchart2";

const GraphStats2 = (
    {
        passPeopleText= "Pass People ", percentageText= "55%" ,
        absentPeopleText= "People didn't Pass", percentageText2= "35%" ,
        passratio= "15 In Progress", percentage= "25%" ,
        CurrentStatus = "Graduate Rate",
        ...props
      }
) => {
  return (
    <>
          <Box>
    <ChakraProvider>
  <Box position="relative" bottom="2px" left="-30px" p={5}>
    <SimpleGrid columns={1} w="347px" h="260px" spacing={0}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Heading
         size="16px"
         lineHeight="24px"
         fontWeight="700"
         as="h3"
          mt="12px"
         color=" rgba(15, 15, 15, 1);"
         ml={{ md: "10px", base: "0px" }}
         fontFamily="Plus Jakarta Sans"
       >
         {CurrentStatus}
       </Heading>
        <Flex>
        <BarChart2
    
         position="fixed"
        />
        <Stack>
        <Flex w={{md:"200px"}} mt={{base:"42px",md:"44px"}}>
        <Box  width="17px"  borderRadius={"25px"} height="10px" bgColor="#50C878" mr={2} />
        <Text fontWeight={"500"} fontSize="sm" color={"black"}>{passPeopleText}</Text>
        <Stack mt={{base:"53px",md:"28px"}}>
         <Text transform={{ base: "translateX(-33px)", md: "translateX(-65px)" }} fontSize={{base:"17px",lg:"20px"}} fontWeight="bold">{percentageText}</Text>
         </Stack>
        </Flex>
        <Flex>
        <Box  width="12px"  borderRadius={"25px"} height="10px" bgColor="rgba(221, 53, 69, 1)" mr={2} />
        <Text fontSize="sm"fontWeight={"500"} color={"black"}>{absentPeopleText}</Text>
        </Flex>
        <Stack mt={{base:"13px",md:"4px"}}>
         <Text transform={{ base: "translateX(33px)", md: "translateX(35px)" }} fontSize={{base:"17px",lg:"20px"}} fontWeight="bold">{percentageText2}</Text>
         </Stack>
        </Stack>
       </Flex> 
       <Flex>
        <Box  width="12px"  borderRadius={"25px"} height="10px" bgColor="rgba(221, 53, 69, 1)" mr={2} />
        <Text fontSize="sm" fontWeight={"500"} color={"black"}>{passPeopleText}</Text>
        </Flex>
        <Stack mt={{base:"13px",md:"4px"}}>
         <Text  transform={{ base: "translateX(33px)", md: "translateX(35px)" }} fontSize={{base:"17px",lg:"20px"}} fontWeight="bold">{}</Text>
         </Stack>  
       
      </Box>
      

    </SimpleGrid>
  </Box>
</ChakraProvider>
    
  </Box>
    </>
  )
}

export default GraphStats2