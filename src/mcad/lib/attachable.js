//@flow
import Vector from "./vector.js"
import Rotation from "./rotation.js"
import Shape from "./shape.js"

class Attachable extends Vector{
  parent: Shape;
  constructor(parent: Shape, vector: Vector){
    super(vector)
    this.parent = parent;
  }

  attach(point: Attachable, rotation: Rotation, vector: Vector){
    let dv = Vector.plus(this.parent.position, point);
    dv.add(this);
    if(vector) {
      dv.add(vector);
    }
    point.parent.position = dv;
    point.parent.rotation = rotation;

    this.parent.children.push(point.parent);
  }

  attachTo(from: Attachable, rotation: Rotation, vector: Vector) {
    from.attach(this, rotation, vector);
  }
}

export default Attachable
