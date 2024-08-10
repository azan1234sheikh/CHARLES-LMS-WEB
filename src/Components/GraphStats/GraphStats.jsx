import { Heading, Text, Box, Flex ,ChakraProvider,SimpleGrid } from "@chakra-ui/react";
import React from "react";
import BarChart from "../Charts/Barchart.jsx";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from '../Chartdata.js';

const GraphStats = () => {
  return (
    <Box>
    <ChakraProvider>
  <Box position="relative" bottom="12px" right="166px" p={5}>
    <SimpleGrid columns={2} spacing={5}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <BarChart />
      </Box>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <BarChart />
      </Box>
    </SimpleGrid>
  </Box>
</ChakraProvider>
    
  </Box>
  )
}

export default GraphStats







