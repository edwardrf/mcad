//@flow
import Shape from "./shape.js"
import Vector from "./vector.js";
import Rotation from "./rotation.js"
import Attachable from "./attachable.js"

export class Sphere extends Shape{
  rx: number;
  ry: number;
  rz: number;
  constructor(rx: number, ry: number, rz: number){
    super();
    this.rx = rx;
    this.ry = ry ? ry: rx;
    this.rz = rz ? rz: rx;
  };

  getPolygons() {
    return [];
  };

}

