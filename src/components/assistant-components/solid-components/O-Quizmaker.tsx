import { Container, Row, Col, Card } from 'react-bootstrap';

import { questionList } from '../../../utils/solid/o-quizMaker';

const QuizMaker = () => {
  return (
    <article>
      <h2>Open/Close Quiz</h2>
      <Container>
        <Row className="gy-5 mx-auto">
          {questionList.map((question, id) => {
            const { description, choices } = question;
            return (
              <Col key={id}>
                <Card className="quiz-card ">
                  <Card.Title>{description}</Card.Title>
                  <Card.Body>
                    {choices.map((choice: any, id: number) => {
                      const { number, description } = choice;
                      return (
                        <p key={id}>
                          {number}. {description}
                        </p>
                      );
                    })}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </article>
  );
};

export default QuizMaker;
