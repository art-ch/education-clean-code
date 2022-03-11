import { Alert } from 'react-bootstrap';

import { Date, BankAccount, Diary } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <main className="text-center">
      <h1 className="my-3">Clean Code Organizer</h1>
      <Alert>
        <h2>Hello, User!</h2>
      </Alert>
      <Date />
      <BankAccount />
      <Diary />
    </main>
  );
};

export default App;
