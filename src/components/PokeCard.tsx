import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { MyPokemon, getTypeColor } from '../utils';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const fields = ["HP", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"];


const PokeCard = ({pokemon}: {pokemon: MyPokemon}) => {
  const data = {
  //@ts-ignore
  labels: fields.map(field => `${field}(${pokemon[field]})`),
  datasets: [
    {
      label: `Total Points (${pokemon.Total})`,
      //@ts-ignore
      data:fields.map(field => pokemon[field]),
      backgroundColor: getTypeColor(pokemon.Type2),
      borderColor: getTypeColor(pokemon.Type1),
      borderWidth: 2,
    },
  ],
};


  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-xl hover:shadow-gradient-to-r hover:-translate-y-1 ease-in-out transition-all duration-[350ms]">
      <div className="py-2">
        <div className="px-4 flex justify-between items-center gap-2 bg-gray-300 py-1 rounded-t-xl">
          <div className="font-bold text-xl">{pokemon.Names}</div>
          <div className=" grid relative w-24 h-24">
            <img
              className="w-full object-contain relative top-[-30px]"
              src={pokemon.image_url}
              alt="Sunset in the mountains"
            />
          </div>
        </div>
        <div className="not-prose grid items-center">
          <Tabs selectedTabClassName="" >
            <TabList >
              <Tab>Distribution</Tab>
              <Tab>Tabular</Tab>
            </TabList>
            <TabPanel>
              <Radar data={data} />
            </TabPanel>

              <TabPanel >
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Attribute</th>
                      <th className="px-4 py-2">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">HP</td>
                      <td className="border px-4 py-2">{pokemon.HP}</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border px-4 py-2">Attack</td>
                      <td className="border px-4 py-2">{pokemon.Attack}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Defense</td>
                      <td className="border px-4 py-2">{pokemon.Defense}</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border px-4 py-2">Special Attack</td>
                      <td className="border px-4 py-2">
                        {pokemon["Special Attack"]}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Special Defense</td>
                      <td className="border px-4 py-2">
                        {pokemon["Special Defense"]}
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border px-4 py-2">Speed</td>
                      <td className="border px-4 py-2">{pokemon.Speed}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="border px-4 py-2 font-bold uppercase">Total</td>
                      <td className="border px-4 py-2 font-bold">{pokemon.Total}</td>
                    </tr>
                  </tfoot>
                </table>
              </TabPanel>

          </Tabs>
        </div>
      </div>
      <div className="px-6  pb-2">
        <span
          style={{ backgroundColor: getTypeColor(pokemon.Type1) }}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
        >
          {pokemon.Type1}
        </span>
        <span
          style={{ backgroundColor: getTypeColor(pokemon.Type2) }}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
        >
          {pokemon.Type2}
        </span>
      </div>
    </div>
  );
}

export default PokeCard;