export async function rateLimitedPromiseAll<T>(
  functions: (() => Promise<T>)[]
): Promise<T[]> {
  const functionCount = functions.length;
  let i = 0;
  const responses: T[] = [];
  const requestNextFunction = async (): Promise<any | void> => {
    if (i >= functionCount) {
      return {};
    }
    const index = i++;
    responses[index] = await functions[index]();
    return requestNextFunction();
  };

  // Each requestNextFunction call in this array is how many functions are handled at a time
  // Currently handled to run 5 at a time, as one completes, the next function will begin
  await Promise.all([
    requestNextFunction(),
    requestNextFunction(),
    requestNextFunction(),
    requestNextFunction(),
    requestNextFunction(),
  ]);
  return responses;
}

// USAGE
// await rateLimitedPromiseAll(
//     [].map((params) => {
//       return () => asyncFunc(params);
//     })
//   )
