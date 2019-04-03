class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}


class Child extends Base {
  constructor(parameter1, parameter2) {
    super();
    this.rows = parameter1;
    this.columns = parameter2;
  }

  run() {
    for (let i = 1; i <= this.rows; i++) {
      let pattern = "";
      for (let j = 1; j <= this.columns; j++) {
        if (i==1 || i==this.rows || j==1 || j==this.columns) {
          pattern += "*"
        } else {
          pattern += " "
        }
      }
      console.log(pattern);
    }
  }
}

const rectangleFrame = new Child(3, 6);
rectangleFrame.run();
