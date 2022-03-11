class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    return this.paymentProcessor.pay(200 * quantity);
  }
  purchaseHelmet(quantity) {
    return this.paymentProcessor.pay(15 * quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(amountInCents) {
    return this.stripe.makePayment(amountInCents * 100);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }
  pay(amountInDollars) {
    return this.paypal.makePayment(this.user, amountInDollars);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInCents) {
    return `${this.user} made payment of $${amountInCents / 100} with Stripe`;
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    return `${user} made payment of $${amountInDollars} with Paypal`;
  }
}

let store = new Store(new StripePaymentProcessor('You'));
const log1 = store.purchaseBike(2);
store = new Store(new PaypalPaymentProcessor('You'));
const log2 = store.purchaseHelmet(2);

export const purchaseLog = [log1, log2];
