class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}

const merge = new Base([6,8,9], [1,2,3]);
//console.log(merge.run());

class Child extends Base {
  constructor(input1, input2, input3) {
    super();
    this.firstArray = input1;
    this.secondArray = input2;
    this.thirdArray = input3;
  }

  run() {
    const resultantArray = [];
    let x = 0, y = 0, z = 0;
    while (x < this.firstArray.length && y < this.secondArray.length) {
      if(this.firstArray[x] < this.secondArray[y]) {
      resultantArray[z++] = this.firstArray[x++];
      } else {
      resultantArray[z++] = this.secondArray[y++];
      }
    }
    while (x < this.firstArray.length) {
    resultantArray[z++] = this.firstArray[x++];
    }
    while (y < this.secondArray.length) {
    resultantArray[z++] = this.secondArray[y++];
    }
    return resultantArray;

  }
}


const result = new Child([3,5,4], [1,0,7], [5,6,7]);
console.log(result.run());
