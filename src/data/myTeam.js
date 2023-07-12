import data from "./allTypesWithAverage.json" assert { type: "json" };
import data2 from "./pokemon.json" assert { type: "json" };
import data3 from './typesData.json' assert { type: "json"};
import fs from "fs";

const types = data.map((item) => item.Type);

// return


const myTeam = [];
while (types.length > 0) {

  let highestDifferenceItem = null;
  let highestDifferenceIndex = -1;


  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    let highestDifferenceHP = null;

    Object.keys(item).forEach((attribute) => {
      if (attribute.startsWith("Highest")) {
        const highestValues = item[attribute];
        const highestDifferenceAttribute = highestValues.find((valueItem) =>
          types.includes(valueItem.secondType)
        );

        if (
          highestDifferenceAttribute &&
          (!highestDifferenceHP ||
            highestDifferenceAttribute["Difference From Average"] >
              highestDifferenceHP["Difference From Average"])
        ) {
          highestDifferenceHP = highestDifferenceAttribute;
        }
      }
    });

    if (
      highestDifferenceHP &&
      (!highestDifferenceItem ||
        highestDifferenceHP["Difference From Average"] >
          highestDifferenceItem["Difference From Average"])
    ) {
      highestDifferenceItem = highestDifferenceHP;
      highestDifferenceIndex = i;

    }
  }

  if (!highestDifferenceItem) {
    break;
  }


  const matchingItem = data2.find(
    (item) => item.Names === highestDifferenceItem.name
  );

  if (matchingItem) {
    myTeam.push({ ...matchingItem,"Difference From Average": highestDifferenceItem["Difference From Average"], highestFromAverageAttribute: highestDifferenceItem.highestFromAverageAttribute });
  }

  const typeToRemove = data[highestDifferenceIndex].Type;
  const indexToRemove = types.indexOf(typeToRemove);
  if (indexToRemove !== -1) {
    types.splice(indexToRemove, 1);
  }
  removeItemByType(data, typeToRemove);


  const secondTypeToRemove = highestDifferenceItem.secondType;
  const secondTypeIndexToRemove = types.indexOf(secondTypeToRemove);
  if (secondTypeIndexToRemove !== -1) {
    types.splice(secondTypeIndexToRemove, 1);
  }
  removeItemByType(data, secondTypeToRemove);
}

function removeItemByType(data, typeToRemove) {
  const indexToRemove = data.findIndex((item) => item.Type === typeToRemove);
  if (indexToRemove !== -1) {
    data.splice(indexToRemove, 1);
  }
}


//Add wild card
let wildCard = {Total: 0};

// Find the item with the highest "Total" that is not already in myTeam
data2.forEach((item) => {
  if (!myTeam.some((teamItem) => teamItem.Names === item.Names)) {
    if (!wildCard || item.Total > wildCard.Total) {
      wildCard = item;
    }
  }
});

const wildCardType1 = wildCard.Type1;
const wildCardType2 = wildCard.Type2;

let highestDifference = 0;
let highestFromAverageAttribute = "";

data3.forEach((averageItem) => {
  const type = averageItem.Type;

  if (type === wildCardType1 || type === wildCardType2) {
    debugger
    Object.keys(averageItem).forEach((attribute) => {
      debugger
      if (attribute !== "Type" && attribute !== "Avg. Total") {
        debugger
        const averageAttributeValue = averageItem[attribute];
        const wildCardAttributeValue = wildCard[attribute.replace('Avg. ', '')];
        const difference = Math.abs(
          wildCardAttributeValue - averageAttributeValue
        );

        if (difference > highestDifference) {
          highestDifference = difference;
          highestFromAverageAttribute = attribute.replace('Avg. ', '');
        }
      }
    });
  }
});

wildCard["Difference From Average"] = highestDifference;
wildCard.highestFromAverageAttribute = highestFromAverageAttribute;

if (wildCard) {
  myTeam.push(wildCard);
}


// // If an item is found, add it to myTeam
// if (wildCard) {
//   myTeam.push(wildCard);
// }
// console.log(Object.keys(myTeam).length);

const myTeamString = JSON.stringify(myTeam, null, 2);

const filePath = "myTeam.json";

// Save the processed JSON string into a file
fs.writeFile(filePath, myTeamString, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File saved successfully.");
  }
});
