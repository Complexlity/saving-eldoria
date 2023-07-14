import BalanceChart from '../charts/BalanceChart'

const ChapterTwo = () => {
  return (
    <div className="container grid gap-4 mx-auto paragraph my-6">
      <h1 className="text-center">
        <span>Chapter Two:</span>Balance
      </h1>
      <BalanceChart />
      <div className="">
        <p>
          There are 18 attributes in total. So we have to take the Amulet of
          Hope from empty to being fully filled with items of all attributes.
          While doing so, we also have to ensure we take some strong pokemons
          and not just pick random items based on attributes. This is my biggest
          test since being the{" "}
          <span className="font-bold uppercase font-serif ">
            Pokemon Library Data Analyst
          </span>
        </p>
      </div>
    </div>
  );
}

export default ChapterTwo;