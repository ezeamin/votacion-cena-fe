import { Vote } from '@/components/interface';

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

export const countFrequency = (
  data: Vote[],
  field: 'king' | 'queen'
): [string, number | string][] => {
  const frequencyMap: Map<string, number> = new Map();

  data.forEach((vote) => {
    const fieldValue = vote[field];

    if (frequencyMap.has(fieldValue)) {
      frequencyMap.set(fieldValue, frequencyMap.get(fieldValue)! + 1);
    } else {
      frequencyMap.set(fieldValue, 1);
    }
  });

  // Sort the map entries by frequency in descending order
  const sortedEntries = Array.from(frequencyMap.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  // Take only the top 'limit' entries
  const topEntries = sortedEntries.slice(0, 5);

  // Convert the top entries to an array of tuples
  const result: [string, number][] = topEntries.map(([value, count]) => [
    value,
    count,
  ]);

  return result;
};
