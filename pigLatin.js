class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}

class Child extends Base {
  constructor(text) {
    super();
    this.array = text;
  }

  run() {
    const piglatin = [];
    for (let i = 0; i < this.array.length; i++) {
      let pig = this.array[i][1] + this.array[i][0] + 'ay'
      piglatin.push(pig);
    }
    return piglatin
  }
}

const latin = new Child(["the", "quick", "brown", "fox"]);
console.log(latin.run());