export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound = "Loud Noise") {
    console.log(sound);
  }

  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }

  static staticFunction() {
    return "this is static function";
  }
}

export class Cat extends Animal {
  makeNoise(sound = "meow") {
    console.log(sound);
  }
}
