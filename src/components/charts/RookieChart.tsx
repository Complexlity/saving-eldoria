import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import initialData from "../../data/pokemon.json";
import { convertDataToTypeCount, fillData, getTypeColor } from "../../utils";


ChartJS.register(ArcElement, Tooltip, Legend);

const sortedData = initialData.sort((a, b) => b.Total - a.Total);
const top10Items = sortedData.slice(0, 10);


const data2 = convertDataToTypeCount(top10Items);
const filledData = fillData(data2).reverse()

const options = {
  plugins: {
    tooltip: {
      callbacks: {
        labelTextColor: function (context: any) {
          return 'white'
        },
        label: function (context: any) {
          return "Count " + filledData[context.dataIndex].count
        }

      }
    }
  }
}

export const data = {
  labels: filledData.map((item) => item.type),
  datasets: [
    {
      label: "present",
      data: filledData.map((item) => {
        return true;
      }),
      backgroundColor: filledData.map((item) => {
        return item.present ? getTypeColor(item.type) : "LightGray";
      }),
      borderColor: filledData.map((item) => {
        return item.present ? getTypeColor(item.type) : "#f3f4f6";
      }),
      borderWidth: 1,
    },


  ],
};



const PickAllChart = () => {
  return (
    <div id="rookie" className="grid justify-center gap-2">
      <div className="h-full grid justify-center">
      <Pie data={data} options={options} />
      </div>
      <div className="paragraph">
        <p><span className="font-bold">Fig 3:</span> <span className="italic text-base">Unbalanced Amulet after Picking All Top 10 in Total Points</span>
        </p></div>
</div>

  );
};

export default PickAllChart;
