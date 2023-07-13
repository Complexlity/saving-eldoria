import initialData from "../../../data/pokemon.json";
import { convertDataToTypeCount, fillData, getTypeColor } from "../../../utils";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import type { TypeCount } from "../../../utils";

//@ts-nocheck
 const allTypesData =
  [
    "Grass",
    "Poison",
    "Fire",
    "Flying",
    "Dragon",
    "Water",
    "Bug",
    "Normal",
    "Dark",
    "Electric",
    "Psychic",
    "Ground",
    "Ice",
    "Steel",
    "Fairy",
    "Fighting",
    "Rock",
    "Ghost",
  ]


ChartJS.register(ArcElement, Tooltip, Legend);



const optionsUnfilled = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context: any) {
          return "Count: 0";
        },
      },
    },
  },
};
const optionsFilled = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context: any) {
          return "Count: 1+";
        },
      },
    },
  },
};

export const dataUnfilled = {
  labels: allTypesData,
  datasets: [
    {
      label: "present",
      data: allTypesData.map((item) => {
        return true;
      }),
      backgroundColor: allTypesData.map((item) => {
        return  "LightGray";
      }),
      borderWidth: 0.3,
    },
  ],
};

export const datafilled = {
  labels: allTypesData,
  datasets: [
    {
      label: "present",
      data: allTypesData.map((item) => {
        return true;
      }),
      backgroundColor: allTypesData.map((item) => {
        return getTypeColor(item);
      }),
      borderColor: allTypesData.map((item) => {
        return getTypeColor(item);
      }),
      borderWidth: 1,
    },
  ],
};

const InitialState = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Pie data={dataUnfilled} options={optionsUnfilled} />
      </div>
      <div>
        <Pie data={datafilled} options={optionsFilled} />
      </div>
    </div>
  );
};

export default InitialState;
