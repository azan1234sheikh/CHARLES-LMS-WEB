// BarChart.js

import React, { Component } from "react";
import Chart from "react-apexcharts";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from '../Chartdata.js';
import { Box, Flex } from "@chakra-ui/react";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: barChartDataDailyTraffic,
      chartOptions: barChartOptionsDailyTraffic,
    };
  }

  render() {
    return (
      <Box height="350px"> {/* Ensure the box has width and height */}

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

export default BarChart;
