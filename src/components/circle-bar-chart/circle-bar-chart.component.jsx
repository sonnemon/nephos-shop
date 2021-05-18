import React from 'react';

const CircleBarChart = (props) => {
  return (
    <svg
      className="circle-chart"
      viewBox="0 0 33.831 33.831"
      width={140}
      height={140}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="circle-chart-background"
        stroke="#efefef"
        strokeWidth={2}
        fill="none"
        cx={16.915}
        cy={16.915}
        r={15.915}
      />
      <circle
        className="circle-chart-circle"
        stroke={props.color}
        strokeWidth={2}
        strokeDasharray={`${props.percentage},100`}
        strokeLinecap="round"
        fill="none"
        cx={16.915}
        cy={16.915}
        r={15.915}
      />
    </svg>
  );
};
export default CircleBarChart;
