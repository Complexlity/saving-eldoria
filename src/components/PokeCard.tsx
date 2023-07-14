import myTeam from '../data/myTeam.json'
import { MyPokemon, Pokemon, getTypeColor } from '../utils';

const PokeCard = ({pokemon}: {pokemon?: MyPokemon}) => {
  if(!pokemon)pokemon = myTeam[8]


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
        <table className="table-auto my-1">
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
              <td className="border px-4 py-2">{pokemon["Special Attack"]}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Special Defense</td>
              <td className="border px-4 py-2">{pokemon["Special Defense"]}</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Speed</td>
              <td className="border px-4 py-2">{pokemon.Speed}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="border px-4 py-2">Total</td>
              <td className="border px-4 py-2">{pokemon.Total}</td>
            </tr>
          </tfoot>
        </table>
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