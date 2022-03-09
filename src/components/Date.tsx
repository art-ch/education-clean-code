import Clock from 'react-live-clock';
import { Alert } from 'react-bootstrap';

import WorldClock from './WorldClock';

import {
  getTodaysDate,
  getDaysSinceWarStarted
} from '../utils/dateManipulators';

const Date = () => {
  const { day, month, year } = getTodaysDate();
  const { name: dayName, number: dayNumber } = day;

  const localTime = (
    <Clock format={'HH:mm'} ticking={true} timezone={'Europe/Kiev'} />
  );

  return (
    <section className="my-5">
      <h2 className="display-1">Time Info:</h2>
      <h2>
        Today is {dayName}, {month} {dayNumber} of year {year}
      </h2>
      <h2>Local Time: {localTime}</h2>
      <Alert variant="warning">
        {getDaysSinceWarStarted()} days have passed since war started
      </Alert>
      <WorldClock />
    </section>
  );
};

export default Date;
