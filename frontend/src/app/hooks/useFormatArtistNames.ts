import type Artist from "../types/Artist";

function useFormatArtistNames(namesToSort: Artist[]) {
  if (namesToSort.length >= 3) {
    const beginningNames = [];
    for (let i = 0; i < namesToSort.length - 2; i++) {
      beginningNames.push(namesToSort[i].name);
    }
    const lastTwoNames = `${namesToSort[namesToSort.length - 2].name} & ${
      namesToSort[namesToSort.length - 1].name
    }`;

    return `${beginningNames.join(", ")}, ${lastTwoNames}`;
  }

  if (namesToSort.length === 2) {
    return `${namesToSort[0].name} & ${namesToSort[1].name}`;
  }

  return namesToSort[0].name;
}

export default useFormatArtistNames;
