import data from "./allTypesWithAverage.json" assert { type: "json" };
import data2 from "./pokemon.json" assert { type: "json" };
import fs from "fs";

const types = data.map((item) => item.Type);

// return
debugger;

const myTeam = [];
while (types.length > 0) {
  debugger;
  let highestDifferenceItem = null;
  let highestDifferenceIndex = -1;


  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    let highestDifferenceHP = null;
    debugger
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
    debugger
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
  debugger;
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
  debugger;

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
console.log(Object.keys(myTeam).length);

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
