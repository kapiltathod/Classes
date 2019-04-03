class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}


class Child extends Base {
  constructor(inputNumber) {
    super();
    this.number = inputNumber;
  }

  run() {
    const series = []
    let f1 = 0, f2 = 1;
    series.push(f1)
    for (let i = 1; i <= this.number; i++) {
      series.push(f2)
      let next = f1 + f2;
      f1 = f2;
      f2 = next;
    }
    return series.toString();
  }
}



const fibonacci = new Child(100);
console.log(fibonacci.run());