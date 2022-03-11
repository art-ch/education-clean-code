class BooleanQuestion {
  description: string;
  constructor(description: string) {
    this.description = description;
  }

  questionChoices() {
    return [
      { number: '1', description: 'Fine' },
      { number: '2', description: 'Not Really Fine' }
    ];
  }
}
class MultipleChoiceQuestion {
  description: string;
  options: string[];
  constructor(description: string, options: string[]) {
    this.description = description;
    this.options = options;
  }

  questionChoices() {
    return this.options.map((option, id) => {
      return { number: `${id + 1}`, description: option };
    });
  }
}
class TextQuestion {
  description: string;
  constructor(description: string) {
    this.description = description;
  }

  questionChoices() {
    return [{ number: '1', description: 'Answer' }];
  }
}
class RangeQuestion {
  description: string;
  constructor(description: string) {
    this.description = description;
  }

  questionChoices() {
    return [
      { number: '1', description: 'Minimum' },
      { number: '2', description: 'Maximum' }
    ];
  }
}

const generateQuestions = (questions: any[]) =>
  questions.map((question) => {
    const { description } = question;
    const choices = question.questionChoices();

    return { description, choices };
  });

const questions = [
  new BooleanQuestion('How are you today?'),
  new MultipleChoiceQuestion('What is your main focus for today', [
    'Work',
    'Railfanning',
    'Binge Anime',
    'Check robcdee'
  ]),
  new TextQuestion("Today's summary you would want to add"),
  new RangeQuestion('Your mood on scale from 1 to 10')
];

export const questionList = generateQuestions(questions);
