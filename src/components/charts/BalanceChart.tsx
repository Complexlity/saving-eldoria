import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getTypeColor } from "../../utils";

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
        label: function () {
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
        label: function () {
          return "Type count: 1+";
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
      data: allTypesData.map(() => {
        return true;
      }),
      backgroundColor: allTypesData.map(() => {
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
      data: allTypesData.map(() => {
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
    <div className="flex container flex-col md:flex-row" id="balance">
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
      <div className="grid justify-end md:justify-normal md:items-center ">
        <div className="arrow-1 rotate-90 md:rotate-0 h-8 w-24 flex"></div>
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
