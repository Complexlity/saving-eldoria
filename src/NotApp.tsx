import pokemonData from "./data/pokemon.json";
function NotApp({ count }: { count: number }) {
  function findRepeatedIds(data: typeof pokemonData) {
      const idCount: { [key: number]: number } = {};
      const repeatedIds: number[] = [];
    // const idCount: any = {};
    // const repeatedIds: number[] = [];

    // Count the occurrences of each Id
    data.forEach((item: (typeof pokemonData)[0]) => {
      const { Id } = item;
      if (idCount[Id]) {
        idCount[Id]++;
      } else {
        idCount[Id] = 1;
      }
    });

    // Find the repeated Ids
    Object.entries(idCount).forEach(([Id, count]) => {
      if (count > 1) {
        //@ts-ignore
        repeatedIds.push(Id);
      }
    });

    return repeatedIds;
  }
  const repeatedIds = findRepeatedIds(pokemonData);
  console.log(repeatedIds);
  // Create a set to store unique Id values
  const uniqueIds = new Set();

  // Generate a unique CSS class for each item with a repeated Id
  const getClassName = (item: (typeof pokemonData)[0]) => {
    if (uniqueIds.has(item.Id)) {
      return "repeated-item box";
    }
    uniqueIds.add(item.Id);
    return "unique-item box";
  };
  if (!count || count <= 0) count = pokemonData.length;
  let newData = pokemonData.slice(0, count);

  return (
    <div className="gridded">
      {newData.map((item) => (
        <div className={getClassName(item)}>
          <div>{item.Id}</div>
          <div>{item.Total}</div>
          <div>{item.HP}</div>
          <div>{item.Type1}</div>
          <div>{item.Names}</div>
          <img src={item.image_url} alt="" />
        </div>
      ))}
    </div>
  );
}

export default NotApp;
