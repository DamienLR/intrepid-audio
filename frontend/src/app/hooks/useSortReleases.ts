import type Release from "../types/Release";

const useSortReleases = (
  dataToSort: Release[],
  sortAscending: boolean = false
) => {
  const sortedData = dataToSort.sort((a: Release, b: Release) => {
    // why the + operator is used before each `new Date`
    // https://stackoverflow.com/questions/36560806/the-left-hand-side-of-an-arithmetic-operation-must-be-of-type-any-number-or
    // https://github.com/microsoft/TypeScript/issues/5710#issuecomment-157886246

    if (sortAscending) {
      return +new Date(a.releasedOn) - +new Date(b.releasedOn);
    }
    return +new Date(b.releasedOn) - +new Date(a.releasedOn);
  });

  return sortedData;
};

export default useSortReleases;
