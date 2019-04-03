class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}
//const split = new BaseClass(2342);
//console.log(split.run());

class Child extends Base {
  constructor(input) {
    super();
    this.number = input;
  }

  run() {
    const output = [];
    let sNumber = this.number.toString();
    let length = sNumber.length;
    for (let i = 0; i < length; i += 1) {
      output.push(+sNumber.charAt(i));
    }
    return output;
  }
}

const result = new Child(45632);
console.log(result.run());