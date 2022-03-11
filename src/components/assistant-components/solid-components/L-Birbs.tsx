import { Container, Row, Col, Card } from 'react-bootstrap';
import { birbs } from '../../../utils/solid/l-birds';

const Birbs = () => {
  return (
    <article>
      <h2>Liskov Substitution Birbs</h2>
      <Container>
        <Row>
          {birbs.map((birb, id) => {
            const { name, action } = birb;
            return (
              <Col key={id}>
                <Card>
                  <Card.Title>{name}</Card.Title>
                  <Card.Subtitle className="display-6">
                    Just {action}!
                  </Card.Subtitle>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </article>
  );
};

export default Birbs;
