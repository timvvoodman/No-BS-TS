function filterArrOfObjects<T, K extends keyof T>(
  searchString: T[K],
  listToBeSearched: T[],
  key: K
): T[] {
  if (!listToBeSearched) {
    return [];
  }

  if (!searchString) {
    return listToBeSearched;
  }

  // filter the list
  const filteredList = listToBeSearched.filter((item) => item[key] === searchString);

  return filteredList;
}

export default filterArrOfObjects;