
import './App.css';
import ChapterOne from "./components/1.Introduction";
import ChapterTwo from './components/2.Balance';
import First from "./components/charts/progression/1. PickAllTop";
import Second from "./components/charts/progression/2. DynamicRendered";
import Fourth from './components/charts/progression/3. FourthChart';
import pokemonData from './data/pokemon.json';
import { Pokemon } from './utils';


const data: Pokemon[] = pokemonData.slice(0, 5)

function App() {
  return (
    <>
      <div className="max-w-[1000px] px-4 py-4 mx-auto">

        <ChapterOne />
        <ChapterTwo />
        
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

