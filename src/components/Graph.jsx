import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Sales By Month For:',
        font: {
          size: 20
        }
      },
    },
    scales: {
      yAxes: {
        max: 700,
        min: 0,
        title: {
          display: true,
          text: 'Sales'
        }
      },
      xAxes: {
        title: {
          display: true,
          text: 'Month'
        }
      },
    }
  };
  
  const labels = ['January', 'February', 'March', 'April'];
  
  const Graph = ({sales}) => {
    const data = {
      labels,
      datasets: [
        {
          label: 'Sales',
          data: sales,
          backgroundColor: 'cornflowerblue',
        }
      ]
    };

    return(
      <Bar options={options} data={data} />
    );
  }
  
export default Graph;