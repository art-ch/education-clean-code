import Clock from 'react-live-clock';
import Calendar from 'react-calendar';
import { Alert, Card } from 'react-bootstrap';

import WorldClock from './assistant-components/WorldClock';

import {
  getTodaysDate,
  getDaysSinceWarStarted
} from '../utils/dateManipulators';
import { DateWrapper } from '../styled';

const Date = () => {
  const { day, month, year } = getTodaysDate();
  const { name: dayName, number: dayNumber } = day;

  return (
    <DateWrapper>
      <Card className="time-info-card my-5">
        <Card.Header>
          <Alert className="card-header__alert" variant="danger">
            {getDaysSinceWarStarted()} days have passed since war started
          </Alert>
          <Card.Title className="display-4">Clock</Card.Title>
          <h2 className="display-6 fs-4 fst-italic">
            Today is {dayName}, {month} {dayNumber} of year {year}
          </h2>
        </Card.Header>
        <Card.Body>
          <div className="card__clock-container">
            <h2>Local Time:</h2>
            <Clock
              className="card__clock card__local-time-clock"
              format={'HH:mm'}
              ticking={true}
              timezone={'Europe/Kiev'}
            />
          </div>
          <Calendar />
        </Card.Body>
        <Card.Footer>
          <WorldClock />
        </Card.Footer>
      </Card>
    </DateWrapper>
  );
};

export default Date;
