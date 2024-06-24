const localStorageKeys = [
  'hasBeenPWAPrompted',
  'canInstallAsApp',
  'hasPWABeenInstalled',
] as const;

export const addLocalStorageItem = (
  key: (typeof localStorageKeys)[number],
  value: any
) => localStorage.setItem(key, value);

export const getLocalStorageItem = (key: (typeof localStorageKeys)[number]) =>
  localStorage.getItem(key);
