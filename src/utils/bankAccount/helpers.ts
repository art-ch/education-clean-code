const generate16DigitNumber = () => {
  const LENGTH_OF_NUMBER = 16;

  const generatedNumber = Math.random().toFixed(LENGTH_OF_NUMBER).split('.')[1];

  return generatedNumber;
};

const formatNumber = (number: string) => {
  const formattingChunks = [];

  for (var i = 0, charsLength = number.length; i < charsLength; i += 4) {
    formattingChunks.push(number.substring(i, i + 4));
  }

  const formattedNumber = formattingChunks.join(' ');

  return formattedNumber;
};

export const generateCardNumber = () => {
  const rowCardNumber = generate16DigitNumber();
  const formattedNumber = formatNumber(rowCardNumber);

  return formattedNumber;
};

export const generateExpirationDate = () => {
  const date = new Date();

  const rowMonth = date.getMonth() + 1;
  const month = rowMonth.toString().padStart(2, '0');

  const rowYear = date.getFullYear() + 2;
  const year = rowYear.toString().slice(2);

  return `${month}/${year}`;
};
