import myTeam from "../../data/myTeam.json";
import PokeCard from "../PokeCard";
import SelectionChart from "../charts/SelectionChart";

const ChapterFour = () => {
  const finalPick = myTeam[myTeam.length - 1];
  return (
    <div>
      <h1 className="text-center">
        <span>Chapter Four:</span> Selection
      </h1>
      <p>
        After doing all extensive analysis and data manipulation. I have come up
        with the{" "}
        <span className="font-bold uppercase font-serif">perfect team</span>.
        One which would fill the Amulet of Hope in balance and in strength.
        Aiden, the Pokemon master would have all it takes to save the great
        Eldoria.
      </p>
      <p>
        We woulld go over the <span className="font-bold">entire list </span>
        step by step while we insert the items into the Amulet of Hope.
      </p>
      <ol className="grid gap-4">
        {myTeam.slice(1, 10).map((item, index) => (
          <SelectionChart slice={index + 1} key={item.Id} />
        ))}
      </ol>
      <h2 className="text-center">The Final Pick</h2>
      <p>
        If you do some counting, you would notice we have picked 9 items rather
        than 10. We have been able to balance the Amulet of Hope with 9 pokemons
      </p>
      <p>
        We would now use the <em>"Rookie"</em> Method to pick the last item
        since the attribute type is no longer a worry
      </p>
      <p>
        This involves picking the strongest (Highest Total Points) item in the
        database that of course hasn't been picked before.{" "}
        <span className="font-bold">Enter! Strongest Pokemon</span>
      </p>
      <p className="flex flex-col gap-6 items-center">
        {finalPick.Description}
        <PokeCard pokemon={finalPick} />
      </p>
    </div>
  );
};

export default ChapterFour;
