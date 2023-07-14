import initialData from "../../data/pokemon.json";
import { convertDataToTypeCount, fillData, getTypeColor } from "../../utils";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import type { TypeCount } from "../../utils";

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

    <div className="flex container" id="balance">
      <div className="flex-1 grid ">
        <Pie data={dataUnfilled} options={optionsUnfilled} />
        <p className="justify-self-center">
          {" "}
          <span className="font-bold" id="fig1">
            Fig 1:
          </span>{" "}
          <span className="italic text-base">Empty Amulet Of Hope</span>
        </p>
      </div>
      <div className="grid items-center">
        <div className="arrow-1"></div>
      </div>
      <div className="flex-1 grid ">
        <Pie data={datafilled} options={optionsFilled} />
        <p className="justify-self-center">
          {" "}
          <span className="font-bold" id="fig2">
            Fig 2:
          </span>{" "}
          <span className="italic text-base">Balanced Amulet Of Hope</span>
        </p>
      </div>
    </div>
  );
};

export default InitialState;
