import { Chart as ChartJS, ArcElement, Tooltip, } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip);
import initialData from "../../data/pokemon_initial.json";
import finalData from '../../data/pokemon.json'
import { convertDataToTypeCount } from "../../utils";

const data2 = convertDataToTypeCount(initialData);
const data3 = convertDataToTypeCount(finalData);

console.log(data3.map(item => item.type))

export const data = {
  labels: data2.map((item) => item.type),
  datasets: [
    {
      label: "count",
      data: data2.map((item) => item.count),
backgroundColor : [
  "Red",
  "DeepSkyBlue",
  "Gold",
  "Silver",
  "MediumAquamarine",
  "MediumPurple",
  "Coral",
  "Lime",
  "Blue",
  "Gray",
  "Yellow",
  "Magenta",
  "Cyan",
  "Green",
  "Navy",
  "Orange",
  "DarkOliveGreen",
  "Orchid",
  "SlateBlue",
],

borderColor : [
  "Red",
  "DeepSkyBlue",
  "Gold",
  "MediumAquamarine",
  "MediumPurple",
  "Coral",
  "Lime",
  "Blue",
  "Gray",
  "Yellow",
  "Magenta",
  "Cyan",
  "Green",
  "Navy",
  "Silver",
  "Orange",
  "DarkOliveGreen",
  "Orchid",
  "SlateBlue",
],



      borderWidth: 1,
    },
  ],
};
export const data4 = {
  labels: data3.map((item) => item.type),
  datasets: [
    {
      label: "count",
      data: data3.map((item) => item.count),
      backgroundColor: [
        "Red",
        "DeepSkyBlue",
        "Gold",
        "MediumAquamarine",
        "MediumPurple",
        "Coral",
        "Lime",
        "Blue",
        "Gray",
        "Yellow",
        "Magenta",
        "Cyan",
        "Green",
        "Navy",
        "Orange",
        "DarkOliveGreen",
        "Orchid",
        "SlateBlue",
      ],

      borderColor: [
        "Red",
        "DeepSkyBlue",
        "Gold",
        "MediumAquamarine",
        "MediumPurple",
        "Coral",
        "Lime",
        "Blue",
        "Gray",
        "Yellow",
        "Magenta",
        "Cyan",
        "Green",
        "Navy",

        "Orange",
        "DarkOliveGreen",
        "Orchid",
        "SlateBlue",
      ],

      borderWidth: 1,
    },
  ],
};
console.log(data.labels)

export function AllDataChart2() {
  return (
    <div className="grid grid-cols-2">
      <div>
      <Pie data={data} width={100} height={100} />;
      </div>
      <div>
      <Pie data={data4} width={100} height={100} />;
      </div>
    </div>
  );
}
