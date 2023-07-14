import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import myTeam from "../../data/myTeam.json";
import initialData from "../../data/pokemon.json";
import { getAverageValues, getHighestValues } from '../../utils';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,  BarElement,);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};


const attributes: string[] = Object.keys(initialData[0]).filter(
  //@ts-ignore
  (attr) => !["Total", "Id"].includes(attr) && typeof initialData[0][attr] === "number"
);

const averageFromData = getAverageValues(attributes, initialData)
// const highestFromData = getHighestValues(attributes, initialData)
const averageFromMyTeam = getAverageValues(attributes, myTeam)
const highestFromMyTeam = getHighestValues(attributes, myTeam)





export const data = {
  labels: attributes,
  datasets: [
    {
      label: "Highest From My Team",
      data: attributes.map((attr) => highestFromMyTeam[attr]),
      backgroundColor: "orange",
      stack: "Stack 0",
    },
    {
      label: "Average From My Team",
      data: attributes.map((attr) => averageFromMyTeam[attr]),
      backgroundColor: "green",
      stack: "Stack 1",
    },
    {
      label: "Average value in Database",
      data: attributes.map((attr) => averageFromData[attr]),
      backgroundColor: "red",
      stack: "Stack 2",
    },
  ],
};



const FourthChart = () => {
  return (
    <div id="strength" className="grid justify-center">
      <Bar options={options} data={data} />

        <p>
          <span className="font-bold">Fig 4:</span>{" "}
          <span className="italic text-base">
            Comparison between our pokemon's strength and the average strength of the database
          </span>
        </p>
    </div>
  );
}

export default FourthChart;