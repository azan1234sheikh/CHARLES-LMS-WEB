// BarChart.js
import React, { Component } from "react";
import Chart from "react-apexcharts";
import {
  
  GraduatebarChart,
  GraduatebarchartOptions
} from '../Chartdata.js';
import { Box, Flex } from "@chakra-ui/react";

class BarChart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: GraduatebarChart ,
      chartOptions:GraduatebarchartOptions ,
    };
  }

  render() {
    return (
      <Box height={{base:"300px",lg:"350px"}}> {/* Ensure the box has width and height */}

        <Chart
       
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="bar"
          w={{base:"100%",md:"110%",lg:"130%"}}
          
          height="100%" 
          // Use full width and height of the Box
        />
      </Box>
    );
  }
}

export default BarChart2;
