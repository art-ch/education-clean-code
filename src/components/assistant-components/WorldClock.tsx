import { Card, Container, Row, Col } from 'react-bootstrap';

import Clock from 'react-live-clock';

const WorldClock = () => {
  const timezones = [
    { city: 'Los Angeles', timezone: 'US/Pacific' },
    { city: 'Zürich', timezone: 'Europe/Zurich' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo' }
  ];

  const clocks = timezones.map(({ city, timezone }) => {
    return {
      city,
      time: <Clock format={'HH:mm'} ticking={true} timezone={timezone} />
    };
  });

  return (
    <div className="my-4">
      <h2>World Clock:</h2>
      <Container className="mt-4">
        <Row>
          {clocks.map(({ city, time }, id) => {
            return (
              <Col key={id}>
                <Card>
                  <Card.Title>{city}</Card.Title>
                  <Card.Footer className="card__clock card__world-clock">
                    {time}
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default WorldClock;
