class Entity {
  constructor(name) {
    this.name = name;
  }
}

const mover = {
  move() {
    return `${this.name} moved`;
  }
};

const attacker = {
  attack(targetEntity) {
    targetEntity.takeDamage(this.attackDamage);
    return `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} health`;
  }
};

const hasHealth = {
  takeDamage(amount) {
    this.health -= amount;
    return `${this.name} has ${this.health} health remaining`;
  }
};

class Character extends Entity {
  attackDamage;
  health;
  constructor(name, attackDamage, health) {
    super(name);
    this.attackDamage = attackDamage;
    this.health = health;
  }
}

Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

class Wall extends Entity {
  health;
  constructor(name, health) {
    super(name);
    this.health = health;
  }
}

Object.assign(Wall.prototype, hasHealth);

class Turret extends Entity {
  attackDamage;
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }
}

Object.assign(Turret.prototype, attacker);

const character = new Character('Character', 3, 100);
const turret = new Turret('Turret', 5);
const wall = new Wall('Wall', 200);

export const actionLog = [
  turret.attack(character),
  character.move(),
  character.attack(wall)
];

