//@flow
import Vector from "./vector.js"
import Polygon from "./polygon.js";
import Rotation from "./rotation.js"
import Attachable from "./attachable.js";

export class Shape {
  name     : string;
  parent   : Shape;
  children : Shape[];
  position : Vector;
  rotation : Rotation;

  static nameCounterMap = new Map();

  constructor(){
    this.children = [];

    // Set the default name of the class
    let clazz = typeof this;
    let n = Shape.nameCounterMap.get(clazz);
    if(n == undefined) n = 0;
    Shape.nameCounterMap.set(clazz, n + 1);
    this.name = clazz + n;
  };

  getPolygons(): Polygon[] {
    console.error("Shape is an abstract class, does not implement getMesh method");
    return [];
  }

  center(): Attachable {
    return new Attachable(this, new Vector(0, 0, 0));
  }

}
export default Shape
