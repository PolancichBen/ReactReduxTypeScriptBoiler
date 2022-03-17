export const getPublicUrl = () => {
  const url = process.env.REACT_APP_ASSETS_ROOT ?? '';

  return url;
};
