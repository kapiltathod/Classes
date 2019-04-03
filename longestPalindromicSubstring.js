class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}



class Child extends Base {
  constructor(data) {
    super();
    this.string = data;
  }

  run() {
    let output = [];
    let maxLength = 1;
    let start = 0;
    let low, high;
    for (let i = 1; i < this.string.length; ++i) {
      low = i - 1;
      high = i;
      while (low >= 0 && high < this.string.length && this.string[low] == this.string[high]) {
        if (high - low + 1 > maxLength) {
          start = low;
          maxLength = high - low + 1;
        }
        --low;
        ++high;
      }
      low = i - 1;
      high = i + 1;
      while (low >= 0 && high < this.string.length && this.string[low] == this.string[high]) {
        if (high - low + 1 > maxLength) {
          start = low;
          maxLength = high - low + 1;
        }
        --low;
        ++high;
      }
    }
      for( let i = low; i <= high; ++i ){
          output.push(this.string[i]);
      }
      return output;
   }

}


const resultant = new Child("palinnilkni");
console.log(resultant.run());