class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}


class Child extends Base {
  constructor(data) {
    super();
    this.array = data;
  }

  run () {
    this.array.sort();
    let frequency = 0;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[1] === this.array[i]) {
        frequency++;
      }
    }
    return frequency;
  }
}



const smallestFrequency = new Child([2,3,4,67,2,2,2,9]);
console.log(smallestFrequency.run());