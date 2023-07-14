import Strength from "../components/charts/progression/3. FourthChart";

const ChapterFive = () => {
  return (
    <div>
      <h1 className="text-center">
        <span>Chapter Five: </span>Strength
      </h1>
      <p>
        Jen, my apprentice, comes with another question{" "}
        <blockquote>
          Does this mean that we picked weak pokemons just to favour balance?{" "}
        </blockquote>
      </p>
      <p>
        Another learning moment! It would seem as though we have picked a weak
        team while trying to favour balance and in doing so, Aiden might not
        have strong pokemons do defeat oppositions before even getting to the{" "}
        <em>Veil Of Darkness.</em> Where the balance is actually needed
      </p>
      <p>
        But this is <strong>not</strong> the case. Through the years of working
        in the Pokemon Library, we have developed some thorough picking
        algorithms. One of which we have used here
      </p>
      <p>
        <strong>Fig 4</strong> shows how much the abilities or our chosen
        pokemon stand when compared with the entire pokemon data. As seen, we
        have picked pokemons in the top percentile while also adhering{" "}
      </p>
      <Strength />
      <p>
        We could also deduce the fighting strategy Aiden would need to employ with the chosen team. It's Low in speed and high in defense, So he have to use the <q>counter attack</q> and capitialize from our high level of <strong>hit points</strong> to take out opponents
      </p>
    </div>
  );
};

export default ChapterFive;
