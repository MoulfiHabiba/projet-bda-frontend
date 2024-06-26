import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DistanceVsAverageSpeedChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const distances = data.map((item) => item.distance);
      const averageSpeeds = data.map((item) => item.averageSpeed);

      const myChart = new Chart(chartRef.current, {
        type: 'scatter',
        data: {
          labels: distances,
          datasets: [
            {
              label: 'Distance vs. Average Speed',
              data: data.map((item) => ({ x: item.distance, y: item.averageSpeed })),
              backgroundColor: 'rgba(75, 192, 192, 0.4)',
              pointRadius: 5,
              pointHoverRadius: 7,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Distance',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Average Speed',
              },
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default DistanceVsAverageSpeedChart;