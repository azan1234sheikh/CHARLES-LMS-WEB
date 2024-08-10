// export const lineChartDataOverallRevenue = {
//     series: [{
//       name: "Revenue",
//       data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
//     }],
//     options: {
//       chart: {
//         id: 'overall-revenue',
//         type: 'line'
//       },
//       xaxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
//       }
//     }
//   };
  
  // Data for the chart
// export const barChartDataDailyTraffic = [
//   {
//     name: "Daily Traffic",
//     data: ["55%","45%"]
//   }
// ];

// // Options for the chart
// export const barChartOptionsDailyTraffic = {
//   chart: {
//     id: 'daily-traffic',
    
//   },
  
// };

export const barChartDataDailyTraffic = [
  {
    name: "Present",
    data: [55, 50]
  },
  {
    name: "Not Present",
    data: [45]
  },
  {
    name: "Pass",
    data: [55]
  },
  {
    name: "Didn't Pass",
    data: [35]
  },
  {
    name: "In Progress",
    data: [35]
  }
];

export const barChartOptionsDailyTraffic = {
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Antecedence Rate', 'Graduated Level'],
  },
  yaxis: {
    title: {
      text: '% (percentage)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "%"
      }
    }
  },
  colors: ['#2885D1', '#E0E0E0', '#50C878', '#FF4500', '#FFD700']
};

