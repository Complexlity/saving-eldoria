import initialData from "../../../data/pokemon.json";
import finalData from "../../../data/pokemon.json";

import { convertDataToTypeCount, fillData, getTypeColor } from "../../../utils";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import type { TypeCount } from "../../../utils";
import myTeam from '../../../data/myTeam.json'
import {findPokemonName} from '../../../utils'

//@ts-nocheck

ChartJS.register(ArcElement, Tooltip, Legend);


const PickAllChart = ({ slice }: {slice: number}) => {

  const currentState = (slice > myTeam.length || slice <= 0) ? myTeam : myTeam.slice(0, slice)



  const data2 = convertDataToTypeCount(currentState);
  const filledData = fillData(data2).reverse();

  const options = {
    plugins: {
      tooltip: {
        backgroundColor: "blue",
        callbacks: {
          labelTextColor: function (context: any) {
            return "white";
          },
          afterLabel: function (context: any) {
            const pokemon = findPokemonName(filledData[context.dataIndex].type, currentState)
            if(!pokemon) return ''
            return (
              "Pokemon Name: " + pokemon.Names
            );
          },
          label: function (context: any) {
            return "Type Count " + filledData[context.dataIndex].count;
          },
        },
      },
    },
  };

  const data = {
    labels: filledData.map((item) => item.type),
    datasets: [
      {
        label: "present",
        data: filledData.map((item) => {
          return true;
        }),
        backgroundColor: filledData.map((item) => {
          return item.present ? getTypeColor(item.type) : "LightGray";
        }),
        borderColor: filledData.map((item) => {
          return item.present ? getTypeColor(item.type) : "#f3f4f6";
        }),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PickAllChart;
