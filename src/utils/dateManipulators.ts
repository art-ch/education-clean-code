const date = new Date();

const generateFormattedDate = (option: object) => {
  return new Intl.DateTimeFormat('en-US', option).format(date);
};

export const getTodaysDate = () => {
  const day = {
    name: generateFormattedDate({ weekday: 'long' }),
    number: date.getDate()
  };
  const month = generateFormattedDate({ month: 'long' });
  const year = date.getFullYear();

  return { day, month, year };
};

export const getDaysSinceWarStarted = () => {
  const today = date.getTime();
  const dreadfulDate = new Date(2022, 1, 24).getTime();

  const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

  const timeDifference = Math.abs(today - dreadfulDate);
  const dayDifference = Math.ceil(timeDifference / MILLISECONDS_IN_A_DAY);

  return dayDifference;
};
