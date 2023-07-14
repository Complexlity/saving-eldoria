import Second from "./charts/progression/2. DynamicRendered";
import myTeam from '../data/myTeam.json'

const ChapterFour = () => {
  console.log(myTeam)
  return (
    <div>
      <h1 className="text-center">
        <span>Chapter Four:</span> Selection
      </h1>
      <p>
        After doing all extensive analysis and data manipulation. I have come up
        with the perfect team. One which would fill the Amulet of Hope in
        balance and in strength. Aiden, the Pokemon master would have all it
        takes to save the great Eldoria
      </p>
      <p>
        We woulld go over the entire list step by step while we insert the items
        into the{" "}
      </p>
      <div>
        {myTeam.slice(1, 10).map((item, index) => (

          <Second slice={index + 1} key={item.Id} />

        ))}
      </div>
      <h2 className="text-center">The Final Pick</h2>
      <p>If you do some counting, you would notice we have picked 9 items  rather than 10. We have been able to balance the Amulet of Hope with 9 pokemons</p>
      <p>We would now use the <em>"Rookie"</em> Method to pick the last item since the attribute type is no longer a worry</p>
      
    </div>
  );
};

export default ChapterFour;
