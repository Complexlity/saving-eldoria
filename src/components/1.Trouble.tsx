import dummyImg from '../assets/dummy.png'

const Introduction = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center not-prose mb-0"><span>Chapter One:</span>Trouble</h1>

      <div className="grid mx-auto ">
        <div className="grid">
          <p className="">
            In a land of myth, and a time of trouble, the destiny of a great
            kingdom called <span>Eldoria</span> rests on the shoulders of a
            pokemon master. His name <span>Aiden Stormrider</span>
            <br />
            <br />
            An ancient prophecy speaks of a great veil of darkness that
            threathen to bring all end to light and hope. With all the signs
            imminent, Aiden has been tasked to stop this darkness. He has been
            given an artifact called the <span>Amulet of Hope</span> to carry
            pokemons and engage on this journey
            <br />
            <br />
            In order to stop this darkness, all pokemon attributes need to all
            combine in a single hit on this destructive veil. However, the
            Amulet can only contain 10 pokemons and this means he has to select
            wisely, else he lacks some attributes needed to stop this veil
            <br />
            <br />
            He has come to the great pokemon library and seeks my help as the Data analyst and head of library to select the suitable pokemons both in balance of attribute and in power.
          </p>
        </div>
        <div className="grid justify-center bg-green-400">
          <img src={dummyImg} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default Introduction;