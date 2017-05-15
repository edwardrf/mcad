//@flow
class Vector {
  x: number;
  y: number;
  z: number;
  constructor(x: number|Vector, y?: number, z?: number) {
    if(x instanceof Vector) {
      this.x = x.x;
      this.y = x.y;
      this.z = x.z;
    }else if(y != undefined && z != undefined) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  }

  clone(): Vector {
    return new Vector(this.x, this.y, this.z);
  }

  negate(): Vector {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }

  plus(v: Vector): Vector {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  minus(v: Vector): Vector {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  times(s: number): Vector {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }

  divide(s: number): Vector {
    this.x /= s;
    this.y /= s;
    this.z /= s;
    return this;
  }

  dot(v: Vector): number {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  lerp(a: Vector, t: number): Vector {
    return this.plus(a.minus(this).times(t));
  }

  length(): number {
    return Math.sqrt(Vector.dot(this, this));
  }

  unit(): Vector {
    return Vector.divide(this, this.length());
  }

  cross(v: Vector): Vector {
    this.x = this.y * v.z - this.z * v.y
    this.y = this.z * v.x - this.x * v.z
    this.z = this.x * v.y - this.y * v.x
    return this;
  }

  static clone(v: Vector) {
    return new Vector(v.x, v.y, v.z);
  }

  static negate(v: Vector) {
    return new Vector(-v.x, -v.y, -v.z);
  }

  static plus(v1: Vector, v2: Vector) {
    return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
  }

  static minus(v1: Vector, v2: Vector) {
    return new Vector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
  }

  static times(v: Vector, s: number) {
    return new Vector(v.x * s, v.y * s, v.z * s);
  }

  static divide(v: Vector, s: number) {
    return new Vector(v.x / s, v.y / s, v.z / s);
  }

  static dot(v1: Vector, v2:Vector) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  }

  static lerp(v: Vector, a: Vector, t: number) {
    return Vector.plus(v, Vector.minus(a, v).times(t));
  }

  static length(v: Vector) {
    return Math.sqrt(Vector.dot(v, v));
  }

  static unit(v: Vector) {
    return Vector.divide(v, v.length());
  }

  static cross(v1: Vector, v2: Vector) {
    return new Vector(
      v1.y * v2.z - v1.z * v2.y,
      v1.z * v2.x - v1.x * v2.z,
      v1.x * v2.y - v1.y * v2.x
    );
  }

}
export default Vector
