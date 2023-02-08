import React from "react";
import { Chart } from "react-google-charts";

const PieChart = ({ info }) => {
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={info}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
};

export default PieChart;
