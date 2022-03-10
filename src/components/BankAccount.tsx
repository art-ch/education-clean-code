import { Alert, Card, Container, Row, Col } from 'react-bootstrap';

import BankCard from './assistant-components/BankCard';

import { BankAccountWrapper } from '../styled';
import bankAccount from '../utils/bankAccount/bankAccount';

const BankAccount = () => {
  const { cards } = bankAccount;

  return (
    <BankAccountWrapper>
      <Card className="bank-account-card">
        <Card.Header>
          <Alert className="card-header__alert" variant="warning">
            Help Army Financially
          </Alert>
          <Card.Title className="display-4">Bank Account</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle className="display-6 mb-3">Your Cards</Card.Subtitle>
          <Container>
            <Row>
              {cards.map((card, id) => {
                const { cardNumber, expirationDate, balance } = card;
                const props = {
                  cardNumber,
                  expirationDate,
                  balance
                };

                return (
                  <Col key={id}>
                    <BankCard {...props} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </BankAccountWrapper>
  );
};

export default BankAccount;
