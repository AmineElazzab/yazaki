export const isArraysEqual = (a: string[], b: string[]) => {
  const aSorted = a.slice().sort();
  const bSorted = b.slice().sort();

  return (
    aSorted.length === bSorted.length &&
    aSorted.every(function (value, index) {
      return value === bSorted[index];
    })
  );
};
