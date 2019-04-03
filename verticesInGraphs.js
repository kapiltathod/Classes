class Base {
  addVertex(vertex) {
    throw new Error('Run method not implemented in child');
  }

  printGraph() {
    throw new Error('Run method not implemented in child');
  }
}



class Child extends Base {
  constructor(noOfVertices) {
    super();
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(vertex) {
    this.AdjList.set(vertex, []);
  }

  printGraph() {
    var get_keys = this.AdjList.keys();
    for (var i of get_keys) {
      var get_values = this.AdjList.get(i);
      var conc = "";
        for (var j of get_values) {
         conc += j + " ";
        }
        console.log(i + " -> " + conc);
    }
  }
}



var g = new Child(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.printGraph();
