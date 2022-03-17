export const refineDisplayName = (word: string) => {
  const intermediateResult = word.replace(/([A-Z])/g, ' $1');
  const result =
    intermediateResult.charAt(0).toUpperCase() + intermediateResult.slice(1);

  return result;
};
