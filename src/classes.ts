//implement singleton pattern

//  class A {
//   private static instance: A;
//   private constructor(private x: number, private y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   public static getInstance(a: number, b: number) {
//     const i = new A(a, b);
//     if (!this.instance) {
//       this.instance = i;
//       return this.instance;
//     }
//     return this.instance;
//   }
//   public calc(): number {
//     return this.x + this.y;
//   }
// }

// console.log(A.getInstance(1, 2).calc());
// console.log(A.getInstance(5, 6));

//extending interfaces

interface One {
  x: number;
  y: number;
}

interface Two {
  z: number;
}

//we can extend multiple interfaces unlike calsses
interface Three extends One, Two {
  add(): number;
}
//implementing interface three

// class A implements Three {
//   constructor(public x: number, public y: number, public z: number) {}
//   add(): number {
//     return this.x + this.y + this.z;
//   }
// }

//we can implement more than interface

// class B implements One,Two {
//   constructor(public x: number, public y: number, public z: number) {}

// }

//we can exrend and implement in the same class

// class C implements One{
//   constructor(public x: number, public y: number) {}
// }

// class D extends C implements Two {
//   constructor(public x: number, public y: number, public z: number) {
//     super(x, y);
//   }
// }
