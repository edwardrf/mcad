//@flow
import Shape from "./shape.js";
import Vector from "./vector.js";
import Attachable from "./attachable.js";
// Do not export origin class, there is a global singleton
class Origin extends Shape {
  constructor() {
    super();
    this.name = "origin";
  }

  getMesh() {
    return null;
  }

  getOrigin() {
    return new Attachable(this, new Vector(0,0,0));
  }
}

export var origin = new Origin();
export default origin
