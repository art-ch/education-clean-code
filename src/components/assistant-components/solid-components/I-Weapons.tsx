import { Card } from 'react-bootstrap';

import { actionLog } from '../../../utils/solid/i-weapons';

const Weapons = () => {
  return (
    <article>
      <h2>Interface Segregation Battlefield</h2>
      <Card>
        <Card.Body>
          {actionLog.map((log, id) => {
            return <p key={id}>{log}</p>;
          })}
        </Card.Body>
      </Card>
    </article>
  );
};

export default Weapons;
