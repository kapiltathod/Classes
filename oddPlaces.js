class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}

class Child extends Base {
  constructor(input) {
    super();
    this.array = input;
  }

  run() {
    const resultant = [];
    let odd = 1;
    for (let i = 0; i < this.array.length; i++) {
      if (i % 2 == 1) {
        odd = this.array[i];
        resultant.push(odd);
        return resultant;
      }
    }
  }
}

const resultant = new Child([1,2,3,4,5,6]);
console.log(resultant.run());