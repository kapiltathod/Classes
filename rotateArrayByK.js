class Base {
  run1() {
    throw new Error('Run method not implemented in child');
  }
}



class Child extends Base {
  constructor(data, input) {
    super();
    this.array = data;
    this.number = input;
  }

  run1() {
    const temp = this.array[0];
    for (let i = 0; i < this.array.length - 1; i++) {
      this.array[i] = this.array[i + 1];
    }

    this.array[this.array.length - 1] = temp;
    return this.array;
  }

  get run2() {
    for (let j = 0; j < this.number; j++) {
      return this.run1();
    }
  }
}



const rotation = new rotateArray([1, 2, 3, 4, 5, 6, 7], 2);
console.log(rotation.run2);