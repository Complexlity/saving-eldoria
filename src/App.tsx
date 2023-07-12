
import NotApp from './NotApp'
import './App.css'
import pokemonData from './data/pokemon.json'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label } from 'recharts'
import Introduction from "./components/Introduction";
import TheProblem from "./components/TheProblem";
import IntialTry from './components/InitialTry';


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

const data: Pokemon[] = pokemonData.slice(0, 5)

function App() {
  return (
    <>
      <Introduction />
      <TheProblem />
      <IntialTry />
      {/* <NotApp count={5} /> */}
    </>
  );
}

export default App

