import { Heading, Text, Box, Flex ,ChakraProvider,SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import BarChart from "../Charts/Barchart.jsx";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from '../Chartdata.js';

const GraphStats = (
{
  passPeopleText= "30 People Present", percentageText= "55%" ,
  absentPeopleText= "20 Not Present", percentageText2= "35%" ,
  CurrentStatus = "Attendence Rate",
  ...props
}
) => {
  return (
    <Box>
    <ChakraProvider>
  <Box position="relative" bottom="2px" left="-30px" p={5}>
    <SimpleGrid columns={1} w="347px"h="260px" spacing={0}>
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
        <BarChart
    
         position="fixed"
        />
        <Stack>
        <Flex w={{md:"200px"}} mt={{base:"42px",md:"54px"}}>
        <Box  width="17px"  borderRadius={"25px"} height="10px" bgColor="#50C878" mr={2} />
        <Text  fontSize="sm" fontWeight={"500"} color={"black"}>{passPeopleText}</Text>
        <Stack mt={{base:"53px",md:"14px", lg:"27px"}}>
         <Text transform={{ base: "translateX(-63px)", md: "translateX(-75px)" }} fontSize={{base:"17px",lg:"20px"}} fontWeight="bold">{percentageText}</Text>
         </Stack>
        </Flex>
        <Flex>
        <Box  width="12px"  borderRadius={"25px"} height="10px" bgColor="#b8b8b8" mr={5} />
        <Text fontSize="sm" fontWeight={"500"} color={"black"}>{absentPeopleText}</Text>
        </Flex>
        <Stack mt={{base:"13px",md:"14px", lg:"11px"}}>
         <Text transform={{ base: "translateX(33px)", md: "translateX(51px)" }} fontSize={{base:"17px",lg:"20px"}} fontWeight="bold">{percentageText2}</Text>
         </Stack>
        </Stack>
       </Flex>
       
      </Box>

    </SimpleGrid>
  </Box>
</ChakraProvider>
    
  </Box>
  )
}

export default GraphStats







