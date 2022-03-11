import { Card } from 'react-bootstrap';

import { purchaseLog } from '../../../utils/solid/d-payments';

const Payments = () => {
  return (
    <article className="mt-4">
      <Card.Subtitle className="display-6 mb-3">
        Dependency Inversion Payments
      </Card.Subtitle>
      <Card>
        <Card.Body>
          {purchaseLog.map((log, id) => {
            return <p key={id}>{log}</p>;
          })}
        </Card.Body>
      </Card>
    </article>
  );
};

export default Payments;
