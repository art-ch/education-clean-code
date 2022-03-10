export const generateCardNumber = () => {
  const LENGTH_OF_CARD_NUMBER = 16;
  return Math.random().toFixed(LENGTH_OF_CARD_NUMBER).split('.')[1];
};

export const generateExpirationDate = () => {
  const date = new Date();

  const rowMonth = date.getMonth() + 1;
  const month = rowMonth.toString().padStart(2, '0');

  const rowYear = date.getFullYear() + 2;
  const year = rowYear.toString().slice(2);

  return `${month}/${year}`;
};
