import { Container, Row, Col, Card } from 'react-bootstrap';

import { BankCardWrapper } from '../../styled';
import { cardSchema } from '../../utils/bankAccount/bankAccount';

const BankCard = (card: cardSchema) => {
  const { cardNumber, expirationDate, balance } = card;

  return (
    <BankCardWrapper>
      <Card className="bank-card">
        <Container>
          <Row className="mt-2 bank-card__bank-credits">
            <Col className="bank-credit">
              <h5>Privatbank</h5>
            </Col>
            <Col className="bank-credit">
              <p>Universal Card</p>
            </Col>
          </Row>
        </Container>
        <div className="mt-3 mb-1">
          <p className="engraved-text">{cardNumber}</p>
        </div>
        <div className="bank-card__expiration-date mb-4 mx-auto">
          <div className="expires me-2">
            <p>Expires</p>
          </div>
          <div className="expiration-date">
            <div className="expiration-date__headers">
              <p>Month</p>
              <p>Year</p>
            </div>
            <div>
              <p className="engraved-text">{expirationDate}</p>
            </div>
          </div>
        </div>
        <footer className="mx-4 d-flex justify-content-between">
          <p className="engraved-text">Ronnie D. Polla</p>
          <p>Balance: ${balance}.00</p>
        </footer>
      </Card>
    </BankCardWrapper>
  );
};

export default BankCard;
