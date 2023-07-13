
import NotApp from './NotApp'
import './App.css'
import pokemonData from './data/pokemon.json'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label } from 'recharts'
import Introduction from "./components/Introduction";
import TheProblem from "./components/TheProblem";
import IntialTry from './components/InitialTry';
import PickAll from './components/PickAll';
import First from "./components/charts/progression/1. PickAllTop";
import Zero from "./components/charts/progression/0. InitialState";
import Second from "./components/charts/progression/2. DynamicRendered";
import Fourth from './components/charts/progression/3. FourthChart';
import { AllDataChart2 } from './components/charts/AllDataChart2';
import currentState from './data/myTeam.json'
import { Pokemon } from './utils';


const data: Pokemon[] = pokemonData.slice(0, 5)

function App() {
  return (
    <>
      <div className="max-w-[1000px] px-4 py-4 mx-auto">

        <Introduction />
        <Zero />
        <First />
        <Second slice={10} />
        <Fourth />
        {/* <AllDataChart2 /> */}
      {/* <TheProblem /> */}
      {/* <PickAll /> */}
      {/* <IntialTry /> */}

      {/* <NotApp count={5} /> */}
      </div>
    </>
  );
}

export default App

