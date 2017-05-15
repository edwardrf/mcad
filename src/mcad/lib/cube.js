//@flow
import Shape from "./shape.js";
import Vector from "./vector.js";
import Attachable from "./attachable.js";

export class Cube extends Shape {
  lx: number;
  ly: number;
  lz: number;
  constructor(lx: number, ly: number, lz: number){
    super();
    this.lx = lx;
    this.ly = ly ? ly: lx;
    this.lz = lz ? lz: lx;
  };

  getMesh() {
    let params = {
      width: this.lx,
      depth: this.ly,
      height: this.lz
    }
    return null;
  };

  getCorner(left: bool, top: bool, front: bool) {
    let dx = this.lx / 2 * (left  ? 1 : -1);
    let dy = this.ly / 2 * (top   ? 1 : -1);
    let dz = this.lz / 2 * (front ? 1 : -1);
    return new Attachable(this, new Vector(dx, dy, dz));
  }

}

export default Cube;
