
import { ArcElement, Chart as ChartJS, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import myTeam from '../../data/myTeam.json';
import { convertDataToTypeCount, fillData, findPokemonName, getTypeColor } from "../../utils";
import PokeCard from "../PokeCard";



ChartJS.register(ArcElement, Tooltip);



const PickAllChart = ({ slice }: {slice: number}) => {

  const currentState = (slice > myTeam.length || slice <= 0) ? myTeam : myTeam.slice(0, slice)



  const data2 = convertDataToTypeCount(currentState);
  const filledData = fillData(data2).reverse();

  const options = {
    maintainAspectRation: false,
    plugins: {
      legend: {
        display:false
      },
      tooltip: {
        callbacks: {
          labelTextColor: function () {
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
            return "Type count: " + filledData[context.dataIndex].count;
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
        data: filledData.map(() => {
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

const lastPokemonPicked = currentState[currentState.length - 1]
  return (
    <li className="grid mb-8">
      <p className="">{lastPokemonPicked.Description}</p>
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="relative">
          <Pie data={data} options={options} />
          <p className="absolute mx-auto right-0 left-0 text-center italic text-base">
            <span className="font-bold">Fig: </span>Amulet Of Hope After Adding{" "}
            <span className="font-bold">{lastPokemonPicked.Names}</span>
          </p>
        </div>
        <div>
          <PokeCard pokemon={lastPokemonPicked} />
        </div>
      </div>
    </li>
  );
};

export default PickAllChart;
