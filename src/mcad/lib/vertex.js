//@flow
import Vector from "./vector.js";

class Vertex {
  pos    : Vector;
  normal : Vector;

  constructor(pos: Vector, normal: Vector) {
    this.pos = pos.clone();
    this.normal = normal.clone();
  }

  clone() {
    return new Vertex(this.pos, this.normal);
  }

  flip() {
    this.normal.negate();
  }

  interpolate(other: Vertex, t: number) {
    return new Vertex(
      Vector.lerp(this.pos, other.pos, t),
      Vector.lerp(this.normal, other.normal, t)
    );
  }
}

export default Vertex;
