class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}


class Child extends Base {
  constructor(data, parameter1, parameter2) {
    super();
    this.data = data;
    this.parameter1 = parameter1;
    this.parameter2 = parameter2;
  }

  run () {
    let i, j;
    let minDist = Number.MAX_SAFE_INTEGER;
    for (i = 0; i < this.data.length; i++) {
      for ( j = i + 1; j < this.data.length; j++) {
      if ((this.parameter1 == this.data[i] && this.parameter2 == this.data[j] || this.parameter2 == this.data[i] && this.parameter1 == this.data[j]) && minDist > Math.abs(i - j)) {
        minDist = Math.abs(i-j);
      }
    }
  }
  return minDist;
  }
}


const result = new Child([3, 5, 6, 2, 4, 5, 6, 6, 5, 4, 8, 3], 3, 6);
console.log(result);