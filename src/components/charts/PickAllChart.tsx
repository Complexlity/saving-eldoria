import { useMemo } from "react";
import initialData from "../../data/pokemon_initial.json";
import finalData from "../../data/pokemon.json";

import { convertDataToTypeCount } from "../../utils";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const sortedData = initialData.sort((a, b) => b.Total - a.Total);
const sortedData2 = finalData.sort((a, b) => b.Total - a.Total);
const top10Items = sortedData.slice(0, 10);
const top10Items2 = sortedData2.slice(0, 10);

const data2 = convertDataToTypeCount(top10Items);
const data4 = convertDataToTypeCount(top10Items2)
export const data = {
  labels: data2.map((item) => item.type),
  datasets: [
    {
      label: "count",
      data: data2.map((item) => item.count),
      backgroundColor: [
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
export const data3 = {
  labels: data4.map((item) => item.type),
  datasets: [
    {
      label: "count",
      data: data4.map((item) => item.count),
      backgroundColor: [
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

const PickAllChart = () => {
  return (
    <div className="grid grid-cols-2">
  <div>
        <Pie data={data}  />
      </div>
      <div>
        <Pie data={data3}/>
      </div>

    </div>

  );
};

export default PickAllChart;
