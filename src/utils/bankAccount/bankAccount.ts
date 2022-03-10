import { generateCardNumber, generateExpirationDate } from './helpers';

interface newAccountSchema {
  name: string;
  age: number;
}

export interface cardSchema {
  cardNumber: string;
  expirationDate: string;
  balance: number;
}

interface depositSchema {
  amount: number;
  duration: number;
}

class Account implements newAccountSchema {
  public name!: string;
  public age!: number;
  protected bankName: string;
  cards: Card[];
  protected deposits: Deposit[];

  constructor(personInfo: newAccountSchema) {
    Object.assign(this, personInfo);
    this.bankName = 'Privatbank';
    this.cards = [];
    this.deposits = [];
  }

  createCard() {
    this.cards.push(new Card());
  }
  showBalance(cardNumber: number) {
    const card = this.cards[cardNumber - 1];
    return card.showBalance();
  }
  setBalance(cardNumber: number, queryNumber: number) {
    const card = this.cards[cardNumber - 1];
    return card.setBalance(queryNumber);
  }

  createDeposit(amount: number, duration: number) {
    const deposit = new Deposit().setAmount(amount).setDuration(duration);
    this.deposits.push(deposit);
  }
}

class Card implements cardSchema {
  cardNumber = generateCardNumber();
  expirationDate = generateExpirationDate();
  balance = 0;

  setBalance(newBalance: number) {
    this.balance = newBalance;
  }
  showBalance() {
    return this.balance;
  }
}

class Deposit implements depositSchema {
  public amount: number;
  public duration: number;

  constructor() {
    this.amount = 1;
    this.duration = 12;
  }

  setAmount(amount: number) {
    this.amount = amount;
    return this;
  }

  setDuration(duration: number) {
    this.duration = duration;
    return this;
  }
}

const bankAccount = new Account({
  name: 'Ronnie D. Polla',
  age: 18
});

bankAccount.createCard();
bankAccount.createCard();
bankAccount.setBalance(1, 100);
bankAccount.createDeposit(1, 5);

export default bankAccount;
