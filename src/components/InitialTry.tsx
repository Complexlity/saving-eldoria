import AllDataChart from "./charts/AllDataChart";
import { AllDataChart2 } from "./charts/AllDataChart2";

const IntialTry = () => {
  return (
    <div className="container mx-auto">


      <h1>Intial Try</h1>
      <div className="grid md:grid-cols-2 ">
        <div className='px-12'>
        <AllDataChart2/>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia
            nihil, ipsum exercitationem accusantium sed?
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntialTry;