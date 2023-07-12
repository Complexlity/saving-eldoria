
import originalData from "./pokemon.json" assert { type: "json" };
import fs from 'fs'


// Function to calculate the average of a specific property from an array of objects, rounded to the nearest whole number
const calculateAverage = (arr, property) => {
  const sum = arr.reduce((acc, item) => acc + item[property], 0);
  const average = sum / arr.length;
  return Math.round(average);
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

  // Iterate over each type and calculate average values
  types.forEach((type) => {
    const filteredItems = data.filter(
      (item) => item.Type1 === type || item.Type2 === type
    );

    const averageTotal = calculateAverage(filteredItems, "Total");
    const averageHP = calculateAverage(filteredItems, "HP");
    const averageAttack = calculateAverage(filteredItems, "Attack");
    const averageDefense = calculateAverage(filteredItems, "Defense");
    const averageSpecialAttack = calculateAverage(filteredItems, "Special Attack");
    const averageSpecialDefense = calculateAverage(filteredItems, "Special Defense");
    const averageSpeed = calculateAverage(filteredItems, "Speed");

    // Create an object for each type with average values
    const typeObject = {
      Type: type,
      "Avg. Total": averageTotal,
      "Avg. HP": averageHP,
      "Avg. Attack": averageAttack,
      "Avg. Defense": averageDefense,
      "Avg. Special Attack": averageSpecialAttack,
      "Avg. Special Defense": averageSpecialDefense,
      "Avg. Speed": averageSpeed,
    };

    processedData.push(typeObject);
  });

  return processedData;
};

// Call the processData function with the original data
const processedJson = processData(originalData);

// Convert the processed data to JSON format
const processedJsonString = JSON.stringify(processedJson, null, 2);

// Output the processed JSON to the console or save it to a file
// console.log(processedJsonString);
const filePath ="typesData.json"

// Save the processed JSON string into a file
fs.writeFile(filePath, processedJsonString, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File saved successfully.");
  }
});