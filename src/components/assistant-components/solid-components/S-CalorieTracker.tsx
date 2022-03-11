import { Container, Row, Col, Card } from 'react-bootstrap';
import calorieTracker from '../../../utils/solid/s-calorieTracker';

const CalorieTracker = () => {
  return (
    <article>
      <h2>Single Responsibility Calorie Tracker</h2>
      <Container>
        <Row>
          {Object.entries(calorieTracker).map(([property, value], id) => {
            return (
              <Col key={id}>
                <Card>
                  <Card.Title>{property}</Card.Title>
                  <Card.Body className="display-6">{value}</Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </article>
  );
};

export default CalorieTracker;
