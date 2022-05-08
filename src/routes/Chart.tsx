import React from "react";
import ReactApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useOutletContext, useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  id: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Chart = () => {
  const { id } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", id], () =>
    fetchCoinHistory(id)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ReactApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              toolbar: {
                show: false,
              },
              height: 500,
              width: 500,
              background: "transparent",
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 2,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              categories: data?.map((price) => price.time_close) ?? [],
              type: "datetime",
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["blue"], stops: [0, 100] },
            },
            colors: ["red"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(3)}`,
              },
            },
          }}
        ></ReactApexChart>
      )}
    </div>
  );
};
export default Chart;
