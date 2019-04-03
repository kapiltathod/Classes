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

  run() {
    let newArray = [];
    for (let i = this.array.length - 1; i >= 0; i--) {
      newArray.push(this.array[i]);
    }
    return newArray;
  }
}

const reverseColors = new Child(["green", "red", "blue", "yellow", "black"]);
console.log(reverseColors.run());