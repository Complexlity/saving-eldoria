import Data1 from "./top10s.json" assert { type: "json" };
import Data2 from "./typesData.json" assert { type: "json" };
import fs from "fs";

const attributes = [
  "HP",
  "Attack",
  "Defense",
  "Special Attack",
  "Special Defense",
  "Speed",
];

const newData = Data1.map((item) => {
  const type = item.Type;
  const averages = Data2.find((data) => data.Type === type);
  const updatedHighestValues = {};

  attributes.forEach((attribute) => {
    const averageValue = averages[`Avg. ${attribute}`];
    const highestValues = item[`Highest ${attribute}s`];
    const updatedAttributeValues = highestValues.map((valueItem) => ({
      ...valueItem,
      "Difference From Average": valueItem.value - averageValue,
    }));
    updatedHighestValues[`Highest ${attribute}s`] = updatedAttributeValues;
  });

  return {
    ...item,
    ...updatedHighestValues,
  };
});


// Convert the processed data to JSON format
const processedJsonString = JSON.stringify(newData, null, 2);

const filePath = "top10sWithAverages.json";

// Save the processed JSON string into a file
fs.writeFile(filePath, processedJsonString, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File saved successfully.");
  }
});