export class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }

  playerDetails() {
    console.log(`${this.name} born in ${this.country}`);
  }
}

export class TennisPlayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }

  TennisPlayerDetails() {
    console.log(
      `${this.name} is ${this.age} years old and knows how to play Tennis `
    );
  }
}
