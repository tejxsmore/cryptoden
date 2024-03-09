import useSWR from "swr";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Chart({ coin }) {
  const { data, error, isLoading } = useSWR(
    `https://api.wazirx.com/sapi/v1/klines?symbol=${coin}&limit=20&interval=30m`,
    fetcher
  );
  const chartData = {
    labels: data?.map((item, agg) => agg + 1),
    datasets: [
      {
        label: "Price in INR",
        data: data?.map((item) => item[4]),
        color: "#FF1E00",
        borderColor: "#40A2E3",
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        scaleLabel: {
          display: true,
          labelString: "Point",
        },

        y: {
          grid: {
            display: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Value",
          },
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
    <div className="py-5 sm:py-10 flex justify-center">
      <div className="w-full md:max-w-2xl lg:max-w-3xl">
        <Line
          data={chartData}
          options={options}
          className="bg-dark text-light rounded-lg"
        />
      </div>
    </div>
  );
}
