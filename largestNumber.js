class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}



class Child extends Base {
  constructor (data) {
    super();
    this.array = data;
   }

   run () {
    const l = this.array.length;
    let large = 0;
    if (l < 2) {
      console.log(" Invalid Input ");
      return;
    }
    for (let p = 0; p < l; p++) {
      if(this.array[p] > large) {
        large = this.array[p];
      }
    }
    return large;
  }
}
const largest = new Child([29,3,90,78,32,10]);
console.log(largest.run());