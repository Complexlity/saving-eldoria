import Rookie from "../components/charts/progression/1. PickAllTop";

const ChapterThree = () => {
  return (
    <div className="container mx-auto paragraph">
      <h1 className="text-center">
        <span>Chapter Three:</span> Rookie
      </h1>
      <div className="">
        <p>
          While carrying out the complex analysis needed to pick to perfect set
          of pokemons, my apprentice Jen asked a very important question{" "}
        </p>
        <blockquote>
          Why don't we just pick all the strongest pokemons?
        </blockquote>
        <p> Classic rookie mistake: Not understanding the problem</p>
        <p>
          To quech his curiousity, I picked 10 of the strongest pokemon and
          shows why this does not work. Once again{" "}
          <span className="font-bold">Balance</span>
        </p>
        <p>
          <span className="font-bold">Fig 3</span> shows the distribution of
          attributes from all the strongest pokemons. As seen the balance we
          need to attain on Fig 2 is not attained as we have a whole lot off
          attributes missing. We have also picked 6 pokemons with the dragon
          attribute and 4 psychic pokemons while at it.
        </p>

        <p className="text-center text-base">
          <span className="text-green-500 font-bold">Tip:</span>{" "}
          <em>Hover over the segments to see the count</em>
        </p>
        <Rookie />
        <p>
          This was a good learning moment for her. She now knows how important
          it is to understand the problem throughly before solving it.
        </p>
      </div>
    </div>
  );
};

export default ChapterThree;
