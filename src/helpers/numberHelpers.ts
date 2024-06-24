export const safelyConvertToNumber = (val: number): number =>
  Number.isNaN(val) ? 0 : val;
