import Strength from "../charts/StrengthChart";

const ChapterFive = () => {
  return (
    <div>
      <h1 className="text-center">
        <span>Chapter Five: </span>Strength
      </h1>
        <blockquote className='text-lg'>
          Does this mean that we picked weak pokemons just to favour balance? <span className="font-normal not-italic">Jen asks</span>{" "}
        </blockquote>

      <p>
        Another learning moment!. It would seem as though we have picked a weak
        team while trying to favour balance. And in doing so, Aiden might not
        have strong pokemons to defeat oppositions before even getting to the{" "}
        <em className="font-bold">Veil Of Darkness.</em> (<span className="text-base italic">Where the balance is actually needed</span>)
      </p>
      <p>
        But this is <strong>not</strong> the case. Through the years of working
        in the Pokemon Library, I have developed some thorough picking
        algorithms. One of which we have used here
      </p>
      <p>
        <a href="#strength" className="font-bold hover:no-underline">Fig 4</a> shows how much the abilities or our chosen
        pokemon stand when compared with the entire pokemon data. As seen, we
        have picked pokemons in the top percentile while also adhering{" "}
      </p>
      <Strength />
      <p>
        We could also deduce the fighting strategy Aiden would need to employ
        with the chosen team. <br></br> It's Low in speed and high in defense, So he would probably have
        to use the <q>counter attack</q> fighting method and capitialize from our high level of{" "}
        <strong>Hit Points</strong> to take out opponents.
      </p>
    </div>
  );
};

export default ChapterFive;
