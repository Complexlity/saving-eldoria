import initialData from "../../../data/pokemon.json";
import finalData from "../../../data/pokemon.json";

import { convertDataToTypeCount, fillData, getTypeColor } from "../../../utils";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import type { TypeCount } from "../../../utils";
import myTeam from '../../../data/myTeam.json'
import {findPokemonName} from '../../../utils'

//@ts-nocheck

ChartJS.register(ArcElement, Tooltip);

const pokescriptions = [
  "The great Eternatus Eternamax, a formidable Poison/Dragon-type Pokemon, possesses incredible power and endurance. With its ferocious Attack and high HP, it strikes fear into the hearts of its adversaries",

  "The opposition would do all but chuckle at the sight or Shuckle, a unique Bug/Rock-type Pokemon, may seem unassuming, but its incredible Defense and Special Defense make it a formidable wall. Its ability to endure attacks is unmatched",

  "A mighty Steel/Ground-type Pokemon, boasts an impenetrable Defense. Its incredible resilience allows it to withstand even the harshest assaults, making it an excellent defender. Legend has it that Steelix Mega was used in a war against the transformers and came out victorious"
  ,
  "Mewtwo Mega Mewtwo X, a Psychic/Fighting-type Pokemon, possesses unrivaled physical strength. Its devastating Attack stat and exceptional Speed make it a fearsome force on the battlefield.",

  "Cloyster, a Water/Ice-type Pokemon, showcases exceptional Defense. Its icy shell acts as a sturdy fortress, providing protection against physical onslaughts.",

  "Electrode Hisuian Electrode, an Electric/Grass-type Pokemon, surprises opponents with its lightning-fast Speed. Its ability to outpace and strike swiftly gives it a significant advantage in battles.",

  "Ho-oh, a majestic Fire/Flying-type Pokemon, shines with its exceptional Special Defense. It possesses the ability to withstand powerful special attacks, making it a resilient guardian.",

  "Wigglytuff, a charming Normal/Fairy-type Pokemon, boasts extraordinary HP. Its incredible endurance allows it to endure even the toughest of battles with grace.",

  "Sableye Mega Sableye, a mischievous Dark/Ghost-type Pokemon, possesses an incredibly high Defense. It skillfully dodges attacks and endures with a smirk, making it a formidable opponent.",
  "Rayquaza Mega Rayquaza, a legendary Dragon/Flying-type Pokemon, stands out with its awe-inspiring Special Attack. Its devastating attacks can lay waste to foes, solidifying its place as a legendary force.",
];
console.log({length: pokescriptions.length})


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
    <>
    <div className="grid grid-cols-2">
      <div>
      <Pie data={data} options={options}  />
      </div>
      <div>

</div>
      </div>
      <p>
        {pokescriptions[slice-1] || pokescriptions[pokescriptions.length -1]}
      </p>
    </>
  );
};

export default PickAllChart;
