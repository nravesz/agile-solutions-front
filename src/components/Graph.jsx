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
    },
    scales: {
      yAxes: {
        max: 700,
        min: 0,
        title: {
          display: true,
          text: 'Ventas'
        }
      },
    }
  };
  
  const labels = ['January', 'February', 'March', 'April'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Ventas',
        data: [10,100,50,15],
        backgroundColor: 'cornflowerblue',
      }
    ]
  };
  
  export function Graph() {
    return <Bar options={options} data={data} />;
  }
  
export default Graph;