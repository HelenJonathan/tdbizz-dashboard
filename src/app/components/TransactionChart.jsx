"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { faL } from "@fortawesome/free-solid-svg-icons";

const TransactionChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const gradient = ctx.createLinearGradient(400, 400, 200, 100); // Define a vertical gradient
    gradient.addColorStop(0, "rgba(146, 170, 255, 0)"); // Start color
    gradient.addColorStop(1, "rgba(87, 111, 241, 1)"); // End color

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Transactions",
            data: [25, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75, 100], // Your provided data
            fill: true,
            tension: 0.2, // Adjust tension to create a curved line
            backgroundColor: gradient, // Set the background color as the defined gradient
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: "Transaction Charts",
            font: {
              size: 16,
            },
          },
          legend: {
            display: false,
            position: "bottom",
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="bg-white h-77 w-6/6 p-2 shadow-lg rounded-md">
      <div className="container mx-auto flex justify-between">
        <p>Transaction Charts</p>
        <ul className="flex items-end">
          <li className="rounded-full bg-[#EFF2FF] p-1 font-sm">monthly</li>
          <li className="rounded-full bg-[#EFF2FF] p-1 font-sm">yearly</li>
        </ul>
      </div>
      <canvas className="min-w-[6/6]" ref={chartRef}></canvas>
    </div>
  );
};

export default TransactionChart;
