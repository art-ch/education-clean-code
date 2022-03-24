import { Alert } from 'react-bootstrap';

import { Date, BankAccount, Diary, TrainSchedule } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <main className="text-center">
      <h1 className="my-3">Education Organizer Organizer</h1>
      <Alert>
        <h2>Hello, User!</h2>
      </Alert>
      <Date />
      <BankAccount />
      <Diary />
      <TrainSchedule />
    </main>
  );
};

export default App;
