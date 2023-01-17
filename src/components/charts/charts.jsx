import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const PaysChart = () => {
  const barChartData = {
    labels: [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Субота",
      "Воскресенье",
    ],
    datasets: [
      {
        data: [19, 1, 234, 198, 1, 234, 45],
        label: "Webmoney",
        backgroundColor: "rgb(19, 20, 0)",
        fill: true,
      },
      {
        data: [110, 19, 380, 144, 34, 19, 1],
        label: "Юmoney",
        backgroundColor: "rgb(139, 63, 254)",
        fill: true,
      },
      {
        data: [110, 190, 30, 411, 24, 19, 100],
        label: "Payeer",
        backgroundColor: "rgb(52, 152, 219)",
        fill: true,
      },
      {
        data: [10, 90, 80, 193, 23, 19, 16],
        label: "Qiwi",
        backgroundColor: "rgb(252, 128, 0)",
        fill: true,
      },
      {
        data: [10, 10, 310, 134, 34, 159, 190],
        label: "Банковская карта",
        backgroundColor: "rgb(90, 165, 96)",
        fill: true,
      },
      {
        data: [10, 90, 30, 41, 24, 139, 231],
        label: "Bitcoin",
        backgroundColor: "rgb(247, 147, 26)",
        fill: true,
      },
    ],
  };

  return (
    <Bar
      type="bar"
      width={130}
      height={50}
      options={{
        legend: {
          display: true, 
          position: "top", 
        },
      }}
      data={barChartData}
    />
  );
};

export default PaysChart;
