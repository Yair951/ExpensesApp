import React from "react";
import { IDataPoints } from "../../Interfaces/DataPointsInterface";
import "./Chart.css";
import ChartBar from "./ChartBar";

interface IProps {
  dataPoints: IDataPoints[];
}

const Chart: React.FC<IProps> = (props: IProps) => {
  const { dataPoints } = props;
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
