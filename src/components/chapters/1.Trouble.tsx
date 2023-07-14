import aidenStromrider from '../../assets/pokemonMaster.jpg';

const Introduction = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center not-prose mb-0">
        <span>Chapter One:</span>Trouble
      </h1>

      <div className="grid mx-auto ">
        <div className="grid">
          <p className="big-letter">
            In a land of myth, and a time of trouble, the destiny of a great
            kingdom called{" "}
            <span className="font-bold uppercase font-serif">Eldoria</span>{" "}
            rests on the shoulders of a pokemon master. His name{" "}
            <span className="font-bold uppercase font-serif">
              Aiden Stormrider
            </span>
            <br />
            <br />
            An ancient prophecy speaks of a great{" "}
            <span className="font-bold uppercase font-serif">
              veil of darkness
            </span>{" "}
            that threathens to bring all end to light and hope. With all the
            signs imminent, Aiden has been tasked to stop this darkness. He has
            been given an artifact called the{" "}
            <span className="font-bold uppercase font-serif">
              Amulet of Hope
            </span>{" "}
            to carry pokemons and engage on this journey
            <br />
            <br />
            In order to stop this darkness, all pokemon type attributes need to all
            combine in a single hit on this dark veil. However, the Amulet can
            only contain <strong>10 pokemons </strong> and this means he has to
            select wisely, else he lacks some attributes needed to stop this
            veil
            <br />
            <br />
            He has come to the great pokemon library and seeks{" "}
            <strong>my help</strong> as the{" "}
            <span className="font-bold uppercase font-serif">Data analyst</span>{" "}
            and Head of{" "}
            <span className="font-bold uppercase font-serif">
              Pokemon library
            </span>{" "}
            to select the suitable pokemons both in balance of type attributes and in
            power.
          </p>
        </div>
        <div className="grid justify-center">
          <img src={aidenStromrider} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default Introduction;