import React, { Component } from "react";
import Chart from "react-apexcharts";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from '../Chartdata.js';
import { Box } from "@chakra-ui/react";

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
      <Box position="relative" right="92px">
        <Chart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="bar"
          width="100%"
          height="164px"
        />
      </Box>
    );
  }
}

export default BarChart;
