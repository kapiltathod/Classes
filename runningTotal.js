class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}

class Child extends Base {
  constructor(data) {
    super();
    this.data = data;
  }

  run() {
    let sum = 0, i = 0;
    while (i < this.data.length) {
      sum += this.data[i];
      i++;
    }
     return(sum);
  }
}


const result = new Child([1, 2, 3, 4, 5, 6]);
console.log(result.run());