// i used rest operator

export const add = (...values) => {
  return values.reduce((a, b) => a + b, 0);
};
