export const scrollElementIntoView = (elementName: string, time?: number) => {
  const element = document.getElementById(elementName);
  setTimeout(
    () =>
      element?.scrollIntoView({
        block: 'center',
        inline: 'nearest',
        behavior: 'smooth',
      }),
    time || 200
  );
};
