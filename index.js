// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2 * this.radius;
  }

  set diameter(param) {
    this.radius = param / 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  set circumference(param) {
    this.radius = param / (Math.PI * 2);
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  set area(param) {
    this.radius = Math.sqrt(param / Math.PI);
  }
}
