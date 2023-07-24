let read = require("readline-sync");

var isRunning = true;
class Area {
  circle(radius) {
    return 3.14 * radius * radius;
  }
  square(lines) {
    return lines * lines;
  }
  rectangle(len, wid) {
    return len * wid;
  }
  triangle(height, base) {
    return (height * base) / 2;
  }
}
class Myclass extends Area {
  circles() {
    let r = read.questionInt("Enter Radius of Circle: ");
    let result = this.circle(r);
    console.log(result);
  }
  squares() {
    let l = read.questionInt("Enter Line of Square: ");
    let result = this.square(l);
    console.log(result);
  }
  rectangles() {
    let length = read.questionInt("Enter Length of Rectangle: ");
    let width = read.questionInt("Enter Width of Rectangle: ");
    let result = this.rectangle(length, width);
    console.log(result);
  }
  triangles() {
    let height = read.questionInt("Enter Height of Triangle: ");
    let base = read.questionInt("Enter Base of Triangle: ");
    let result = this.triangle(height, base); // Corrected method call
    console.log(result);
  }
}

let MObj = new Myclass();
while (isRunning) {
  var choice = read.questionInt(
    `\n1.Area of a Circle\n2.Area of a Square\n3.Area of a Rectangle\n4.Area of a Triangle\n5.Exit\nSelect Your Choice: `
  );
  switch (choice) {
    case 1:
      MObj.circles();
      break;

    case 2:
      MObj.squares();
      break;

    case 3:
      MObj.rectangles();
      break;

    case 4:
      MObj.triangles();
      break;

    default:
      console.log("Exited...");
      isRunning = false;
      break;
  }
}
