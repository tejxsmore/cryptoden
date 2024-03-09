import useSWR from "swr";
import { useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Chart({ coin }) {
  const [timeInterval, setTimeInterval] = useState("1h");
  const { data, error, isLoading } = useSWR(
    `https://api.wazirx.com/sapi/v1/klines?symbol=${coin}&limit=50&interval=${timeInterval}`,
    fetcher
  );
  const chartData = {
    labels: data?.map((_, agg) => agg + 1),
    datasets: [
      {
        label: "INR",
        data: data?.map((item) => item[4]),
        color: "#FF1E00",
        borderColor: "#40A2E3",
        backgroundColor: "#191919",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 1, // Set the point radius to 0 to hide the dots
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
        scaleLabel: {
          display: true,
          labelString: "Point",
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        scaleLabel: {
          display: true,
          labelString: "Value",
        },
      },
    },
  };

  if (error)
    return (
      <div className="bg-dark text-light min-h-screen p-5">
        <p>Market depth could not be fetched</p>
      </div>
    );
  if (isLoading)
    return <div className="bg-dark text-light min-h-screen p-5">Loading</div>;
  return (
    <div>
      <div className="py-5 sm:p-5 flex justify-center">
        <div className="w-full sm:max-w-2xl md:max-w-3xl">
          <Line
            data={chartData}
            options={options}
            className="bg-dark text-light rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center pt-5 pb-0 sm:pb-10">
        <div className="flex items-center justify-between w-full sm:max-w-2xl md:max-w-3xl space-x-5">
          <div>
            <p className="rounded-lg px-4 p-2 hover:bg-modalGray border border-gray">
              Interval
            </p>
          </div>
          <div className="space-x-2.5">
            <button
              onClick={() => setTimeInterval("1h")}
              className={`w-10 rounded-lg p-2 hover:bg-modalGray border  ${
                timeInterval === "1h"
                  ? "border-blue text-blue  bg-modalGray"
                  : "border-gray"
              }`}
            >
              1h
            </button>
            <button
              onClick={() => setTimeInterval("6h")}
              className={`w-10 rounded-lg p-2 hover:bg-modalGray border  ${
                timeInterval === "6h"
                  ? "border-blue text-blue  bg-modalGray"
                  : "border-gray"
              }`}
            >
              6h
            </button>
            <button
              onClick={() => setTimeInterval("1d")}
              className={`w-10 rounded-lg p-2 hover:bg-modalGray border  ${
                timeInterval === "1d"
                  ? "border-blue text-blue  bg-modalGray"
                  : "border-gray"
              }`}
            >
              1d
            </button>
            <button
              onClick={() => setTimeInterval("1w")}
              className={`w-10 rounded-lg p-2 hover:bg-modalGray border  ${
                timeInterval === "1w"
                  ? "border-blue text-blue  bg-modalGray"
                  : "border-gray"
              }`}
            >
              1w
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
