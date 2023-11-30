export const findMostFrequentValue = (arr: string[]): string | undefined => {
  // Create a map to store the count of each string
  const countMap = new Map<string, number>();

  // Iterate through the array and count occurrences
  arr.forEach((value) => {
    countMap.set(value, (countMap.get(value) || 0) + 1);
  });

  // Find the string with the maximum count
  const [mostFrequentValue] = Array.from(countMap.entries()).reduce(
    ([currentValue, currentCount], [value, count]) =>
      count > currentCount ? [value, count] : [currentValue, currentCount],
    ['', 0]
  );

  return mostFrequentValue !== '' ? mostFrequentValue : undefined;
};
