import typesData from './data/allTypes.json'

export interface TypeCount {
  type: string;
  count: number;
  present: boolean
}

export function convertDataToTypeCount(data: any[]): TypeCount[] {
  const typeCountMap: { [type: string]: number } = {};

  data.forEach((item) => {
    const type1: string = item.Type1;
    const type2: string = item.Type2;

    // Count type1
    if (type1 && !typeCountMap[type1]) {
      typeCountMap[type1] = 1;
    } else if (type1) {
      typeCountMap[type1]++;
    }

    // Count type2
    if (type2 && !typeCountMap[type2]) {
      typeCountMap[type2] = 1;
    } else if (type2) {
      typeCountMap[type2]++;
    }
  });

  const typeCountList: TypeCount[] = Object.entries(typeCountMap).map(
    ([type, count]) => ({
      type,
      count,
      present: true
    })
  );

  return typeCountList;
}

export function fillData(data: TypeCount[]) {
  const allTypes = typesData.map(item => item.Type);

  allTypes.forEach(type => {
    const existingType = data.find(item => item.type === type);
    if (!existingType) {
      data.push({
        type: type,
        count: 0,
        present: false
      });
    }
  });
  return data
}


const typeColors = {
  Grass: "Green",
  Poison: "Purple",
  Fire: "Red",
  Unknown: "Gray",
  Flying: "SkyBlue",
  Dragon: "Indigo",
  Water: "lightBlue",
  Bug: "Lime",
  Normal: "#b45309",
  Dark: "#27272a",
  Electric: "Yellow",
  Psychic: "Pink",
  Ground: "SandyBrown",
  Ice: "#2563eb",
  Steel: "#1e3a8a",
  Fairy: "#d946ef",
  Fighting: "Maroon",
  Rock: "Sienna",
  Ghost: "#f87171",
};

export function getTypeColor(value: string) {
  //@ts-ignore
  return typeColors[value]
}
export interface Pokemon {
  image_url: string;
  Id: number;
  Names: string;
  Type1: string;
  Type2: string;
  Total: number;
  HP: number;
  Attack: number;
  Defense: number;
  "Special Attack": number;
  "Special Defense": number;
  Speed: number;
}

export interface MyPokemon extends Pokemon {
  "Difference From Average": number,
  highestFromAverageAttribute: string,
  Description: string
}


export function findPokemonName(type: string, currentState: Pokemon[]) {
  return currentState.find(item => item.Type1 === type || item.Type2 === type)
}


export function getAverageValues(
  attributes: string[],
  data: Pokemon[]
): Record<string, number> {
  const averages: Record<string, number> = {};

  for (const attr of attributes) {
    //@ts-ignore
    const sum = data.reduce((acc, item) => acc + item[attr], 0);
    const average = Math.round(sum / data.length);
    averages[attr] = average;
  }

  return averages;
}

export function getHighestValues(
  attributes: string[],
  data: Pokemon[]
  ): Record<string, number> {
    const highestValues: Record<string, number> = {};

    for (const attr of attributes) {
      let highestValue = Number.MIN_SAFE_INTEGER;
    for (const item of data) {
      //@ts-ignore
      if (item[attr] > highestValue) {
        //@ts-ignore
        highestValue = item[attr];
      }
    }
    highestValues[attr] = highestValue;
  }

  return highestValues;
}
