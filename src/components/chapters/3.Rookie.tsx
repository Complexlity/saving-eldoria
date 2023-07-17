import RookieChart from "../charts/RookieChart";

const ChapterThree = () => {
  return (
    <div className="container mx-auto paragraph">
      <h1 className="text-center">
        <span>Chapter Three:</span> Rookie
      </h1>
      <div className="">
        <p>
          While carrying out the complex analysis needed to pick to perfect set
          of pokemons, my apprentice, <span className="font-bold">Jen,</span>{" "}
          asked a very important question{" "}
        </p>
        <p>

        <blockquote>
          Why don't we just pick all the strongest pokemons?
        </blockquote>
        </p>
        <p>
          {" "}
          Classic rookie mistake:{" "}
          <span className="font-semibold">Not understanding the problem</span>
        </p>
        <p>
          To quench her curiousity, I picked 10 of the strongest pokemons and
          show why this does not work. Once again{" "}
          <span className="font-bold">Balance</span>
        </p>
        <p>
          <a className="font-bold hover:no-underline" href="#rookie">
            Fig 3
          </a>{" "}
          shows the distribution of type attributes after picking all the
          strongest pokemons.
          As seen, the balance we need to get on{" "}
          <a href="#balance" className="font-bold hover:no-underline">
            {" "}
            Fig 2
          </a>{" "}
          is not attained as we have a whole lot of attributes missing. We have
          also picked 6 pokemons with the Dragon attribute and 4 Psychic
          pokemons while at it.
        </p>

        <p className="text-center text-base">
          <span className="text-green-500 font-bold">Tip:</span>{" "}
          <em>Hover over the segments to see the number of pokemons with that attribute</em>
        </p>
        <RookieChart />
        <p>
          This was a good learning moment for her. She now knows how important
          it is to understand the problem throughly before solving it.
        </p>
      </div>
    </div>
  );
};

export default ChapterThree;
