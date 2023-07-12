import originalData from "./pokemon.json" assert { type: "json" };
import fs from "fs";

// Function to find the object with the highest value for a specific property within an array
const findHighestValueObject = (arr, property) => {
  let highestObject = null;
  let highestValue = null;

  arr.forEach((item) => {
    if (highestValue === null || item[property] > highestValue) {
      highestValue = item[property];
      highestObject = item;
    }
  });

  return highestObject;
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

  // Iterate over each type and find the highest values
  types.forEach((type) => {
    const filteredItems = data.filter(
      (item) => item.Type1 === type || item.Type2 === type
    );

    const highestTotal = findHighestValueObject(filteredItems, "Total");
    const highestHP = findHighestValueObject(filteredItems, "HP");
    const highestAttack = findHighestValueObject(filteredItems, "Attack");
    const highestDefense = findHighestValueObject(filteredItems, "Defense");
    const highestSpecialAttack = findHighestValueObject(
      filteredItems,
      "Special Attack"
    );
    const highestSpecialDefense = findHighestValueObject(
      filteredItems,
      "Special Defense"
    );
    const highestSpeed = findHighestValueObject(filteredItems, "Speed");

    // Create an object for each type with the highest values
    const typeObject = {
      Type: type,
      "Highest Total": {
        value: highestTotal.Total,
        Names: highestTotal.Names,
      },
      "Highest HP": {
        value: highestHP.HP,
        Names: highestHP.Names,
      },
      "Highest Attack": {
        value: highestAttack.Attack,
        Names: highestAttack.Names
      },
      "Highest Defense": {
        value: highestDefense.Defense,
        Names: highestDefense.Names
      },
      "Highest Special Attack": {
        value: highestSpecialAttack["Special Attack"],
        Names: highestSpecialAttack.Names,
      },
      "Highest Special Defense": {
        value: highestSpecialDefense["Special Defense"],
        Names: highestSpecialDefense.Names
      },
      "Highest Speed": {
        value: highestSpeed.Speed,
        Names: highestSpeed.Names
      }
    };

    processedData.push(typeObject);
  });

  return processedData;
}

// Call the processData function with the original data
const processedJson = processData(originalData);
console.log(processedJson.length)
// Convert the processed data to JSON format
const processedJsonString = JSON.stringify(processedJson, null, 2);

// Output the processed JSON to the console or save it to a file
// console.log(processedJsonString);
const filePath = "highestsData.json";

// Save the processed JSON string into a file
fs.writeFile(filePath, processedJsonString, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File saved successfully.");
  }
});
