import { Container, Row, Col, Card } from 'react-bootstrap';

import * as Charts from '../charts';

const TimeTableCharts = () => {
  return (
    <article>
      <Card className="charts-card">
        <Card.Title className="display-6">Local Station Stats</Card.Title>
        <Card.Subtitle>(Hardcoded)</Card.Subtitle>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                {Object.values(Charts).map((Chart, id) => {
                  return <Chart key={id} />;
                })}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </article>
  );
};

export default TimeTableCharts;
