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
    let start = 0;
    let end = this.string.length-1;
    while (end > start){
      if (this.string[start ++] !== this.string[end --]) {
      return ("String is not a Palindrome");
      }
    }
    return ("String is a Palindrome");
  }

}

const result = new Child("gammastack");
console.log(result.run());