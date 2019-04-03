class Base {
  run() {
    throw new Error('Run method not implemented in child')
  }
}

class Child extends Base {
  constructor(arr1,arr2) {
    super();
    this.firstArray = arr1;
    this.secondArray = arr2;
  }

  run() {
    const resultant = [];
    let t = this.firstArray.length + this.secondArray.length;
    let i = 0, j = 0;
    for (let k = 0 ; k < t; k++) {
      if (k % 2 == 0) {
        resultant.push(this.firstArray[i++]);
      } else {
        resultant.push(this.secondArray[j++]);
    }
  }
  return (resultant);
  }
}

const result = new Child(["r", "n", "e"], [5, 6, 7]);
console.log(result.run());