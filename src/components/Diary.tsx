import { Card } from 'react-bootstrap';

import {
  CalorieTracker,
  QuizMaker,
  Birbs,
  Weapons
} from './assistant-components/solid-components';

import { DiaryWrapper } from '../styled';

const Diary = () => {
  return (
    <DiaryWrapper>
      <Card className="diary-card">
        <Card.Title className="display-4">Diary</Card.Title>
        <Card.Subtitle>Remaining SOLID Principles</Card.Subtitle>
        <Card.Body>
          <CalorieTracker />
          <QuizMaker />
          <Birbs />
          <Weapons />
        </Card.Body>
      </Card>
    </DiaryWrapper>
  );
};

export default Diary;
