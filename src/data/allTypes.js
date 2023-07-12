import originalData from "./pokemon.json" assert { type: "json" };
import fs from "fs";

// Function to find the top N items with the highest values for a specific property within an array
const findTopItems = (arr, property, type,) => {
  const sortedItems = arr.slice().sort((a, b) => b[property] - a[property]);

  const topItemsObject = [];
  for (let i = 0; i < sortedItems.length; i++) {
    const item = sortedItems[i];
    topItemsObject.push({
      value: item[property],
      name: item.Names,
      secondType: item.Type1 === type ? item.Type2 : item.Type1,
    });
  }

  return topItemsObject;
};

// Function to process the original data and generate the desired output
const processData = (data) => {
  const types = new Set();
  const processedData = [];

  // Collect all unique types
  data.forEach((item) => {
    types.add(item.Type1);
    types.add(item.Type2);
  });

  // Iterate over each type and find the top 10 values for each attribute
  types.forEach((type) => {
    debugger;
    const filteredItems = data.filter(
      (item) => item.Type1 === type || item.Type2 === type
    );

    const typeObject = {
      Type: type,
    };

    const attributes = [
      "HP",
      "Attack",
      "Defense",
      "Special Attack",
      "Special Defense",
      "Speed",
    ];

    debugger;
    attributes.forEach((attribute) => {
      debugger;
      typeObject[`Highest ${attribute}s`] = findTopItems(
        filteredItems,
        attribute,
        type,

      );
    });

    processedData.push(typeObject);
  });

  return processedData;
};

// Call the processData function with the original data

const processedJson = processData(originalData);

// Convert the processed data to JSON format
const processedJsonString = JSON.stringify(processedJson, null, 2);

const filePath = "allTypes.json";

// Save the processed JSON string into a file
fs.writeFile(filePath, processedJsonString, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File saved successfully.");
  }
});
