class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}



class Child extends Base {
  constructor(text, data) {
    super();
    this.array = text;
    this.number = data;
  }

  run() {
    outer: {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == this.array.number) {
        return ("Element is present")
        break outer;
      }
    }
    return ("Element is not present");
    }
  }
}

const check = new Child([1, 2, 3, 4, 5, 6], 11);
console.log(check.run());
