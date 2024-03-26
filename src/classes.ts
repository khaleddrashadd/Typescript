//implement singleton pattern

 class A {
  private static instance: A;
  private constructor(private x: number, private y: number) {
    this.x = x;
    this.y = y;
  }
  public static getInstance(a: number, b: number) {
    const i = new A(a, b);
    if (!this.instance) {
      this.instance = i;
      return this.instance;
    }
    return this.instance;
  }
  public calc(): number {
    return this.x + this.y;
  }
}

console.log(A.getInstance(1, 2).calc());
console.log(A.getInstance(5, 6));
