class Bird {
  action = '';
  layEgg() {
    return `Laid eggs`;
  }
}

class FlyingBird extends Bird {
  fly() {
    this.action = `flew away`;
  }
}

class SwimmingBird extends Bird {
  swim() {
    this.action = 'swam away';
  }
}

class Eagle extends FlyingBird {
  name = 'Eagle';
}

class Penguin extends SwimmingBird {
  name = 'Penguin';
}

const penguin = new Penguin();
penguin.swim();
penguin.layEgg();

const eagle = new Eagle();
eagle.fly();
eagle.layEgg();

export const birbs = [penguin, eagle];
