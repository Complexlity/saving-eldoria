import PickAllChart from "./charts/PickAllChart";

const PickAll = () => {
  return (
    <div className="container mx-auto grid grid-cols-2">
      <PickAllChart />
      <h1>Picking Highest</h1>
    </div>
  );
}

export default PickAll;