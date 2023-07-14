import Rookie from "../components/charts/progression/1. PickAllTop";

const ChapterThree = () => {
  return (
    <div className="container mx-auto paragraph">
      <h1 className="text-center">
        <span>Chapter Three:</span> Rookie
      </h1>
      <div className="">
        <p className="grid">
          While carrying out the complex analysis needed to pick to perfect set
          of pokemons, my apprentice Jen asked a very important question{" "}
          <em>Why don't we just pick all the strongest pokemons?</em> Classic
          rookie mistake: <span>Not understanding the problem</span>
          <br />
          <br />
          To quech his curiousity, I picked 10 of the strongest pokemon and
          shows why this does not work. Once again <span>Balance</span>
          <br />
          <br />
          Fig 3 shows the distribution of attributes from all the strongest
          pokemons. As seen the balance we need to attain on Fig 2 is not attained
          as we have a whole lot off attributes missing. We have also picked 6 pokemons with the dragon attribute while at it.
          <br></br>
          <small className="text-center mx-auto justify-self-center"><span className='text-green-500 font-bold'>Tip:</span> <em>Hover over the boxes to see the count</em></small>
          <br />
          <br />

          <Rookie />
          
          <br />
          <br />
          This was a good learning moment for him. He now knows how important it
          is to understand the problem throughly before solving it.
        </p>



      </div>
    </div>
  );
};

export default ChapterThree;
