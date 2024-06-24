// eslint-disable-next-line @typescript-eslint/no-empty-function
export const fakeAsyncFunc = (cb: () => void, time?: number) =>
  setTimeout(() => cb(), time || 2000);
