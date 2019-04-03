class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}

const ps = new Base(20);
//ps.run();

class Child extends Base {
  constructor(input) {
    super();
    this.number = input;
  }

  run() {
    for (let i = 1; i <= this.number; i++) {
      console.log(i*i);
    }
  }
}

const result = new Child(30);
result.run();


