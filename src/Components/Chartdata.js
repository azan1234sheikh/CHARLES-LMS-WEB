// Chartdata.js

import { border } from "@chakra-ui/react";

export const barChartDataDailyTraffic = [
  {
    name: "Present",
    data: [55]
  },
  
  {
    name: "Not Present",
    data: [45]
  },
  
];
export const GraduatebarChart = [
  {
    name: "Present",
    data: [55]
  },
  {
    name: "Didnot Pass",
    data: [35]
  },
  {
    name: "In Progress",
    data: [25]
  },
  
];

export const GraduatebarchartOptions = {

  chart: {
    type: 'bar',
     
    stacked: false,
    dataLabels:{
      enabled: false
   } // This will help in stacking bars if required
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '95%', // Adjusted width
      columnHeight:"0%",
      dataLabels:{
         enabled: true
      }
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: false,
    width:200 ,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Antendence Rate',],
    categories: ['Pass Rate',],
    categories: ['In Progress',],
  },
  yaxis: {
    
    title: {
      text: '% (percentage)'
    },
    
  },
  fill: {
    opacity: 1
  },
  grid: {
    show: false, // Hide grid lines
  },

  yaxis: {
    labels: {
      show : false // Hide y-axis labels
    },
  },
 
  tooltip: {
    x: {
      formatter: function (val) {
        return val + "%"
      }
    }
  },
  colors: ['rgba(115, 64, 229, 1)', 'rgba(221, 53, 69, 1)', 'rgba(255, 193, 25, 1)', '#FF4500', '#FFD700'] 
}

export const barChartOptionsDailyTraffic = {
  chart: {
    type: 'bar',
     
    stacked: false,
    dataLabels:{
      enabled: false
   } // This will help in stacking bars if required
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '75%', // Adjusted width
      columnHeight:"0%",
      dataLabels:{
         enabled: true
      }
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: false,
    width:200 ,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Antendence Rate',],
    categories: ['Not Present',],
  },
  yaxis: {
    
    title: {
      text: '% (percentage)'
    },
    
  },
  fill: {
    opacity: 1
  },
  grid: {
    show: false, // Hide grid lines
  },

  yaxis: {
    labels: {
      show : false // Hide y-axis labels
    },
  },
 
  tooltip: {
    x: {
      formatter: function (val) {
        return val + "%"
      }
    }
  },
  colors: ['#50C878', '#E0E0E0', '#2885D1', '#FF4500', '#FFD700'] 
};
