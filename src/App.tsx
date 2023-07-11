
import NotApp from './NotApp'
import './App.css'
import pokemonData from './data/pokemon.json'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label } from 'recharts'

interface Pokemon {
  image_url: string;
  Id: number;
  Names: string;
  Type1: string;
  Type2: string;
  Total: number;
  HP: number;
  Attack: number;
  Defense: number;
  "Special Attack": number;
  "Special Defense": number;
  Speed: number;
}

const data: Pokemon[] = pokemonData.slice(100,110)

function App() {
  return (
    <>
      <div>Hello world</div>
      {/* <BarChart width={2000} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Names"/>
        <YAxis dataKey="HP" />
        <Tooltip />
        <Legend />
        <Bar dataKey="HP" fill="orange" />
      </BarChart> */}
      <NotApp count={0} />
    </>
  );
}

export default App

