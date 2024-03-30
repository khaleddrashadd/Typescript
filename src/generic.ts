const promise: Promise<number> = new Promise((resolve, reject) => {
  resolve(123);
});

promise.then((a) => {
  return a;
});

const mergeObj = <T extends object, U extends object>(
  ob1: T,
  ob2: U
): T & U => {
  return { ...ob1, ...ob2 };
};

const merged = mergeObj({ name: 'khaled' }, { age: 30 });
console.log(merged.name);

const extract = <T extends object>(ob: T, key: keyof T) => {
  return ob[key];
};

console.log(extract({ name: 'khaled', age: 30 }, 'name'));

//OR

const extract2 = <T extends object, U extends keyof T>(ob: T, key: U) => {
  return ob[key];
};

console.log(extract2({ name: 'khaled', age: 30 }, 'name'));

class A<T extends string | number | boolean> {
  private data: T[] = [];
  set dataArr(item: T) {
    this.data.push(item);
  }
  get dataArr(): T[] {
    return this.data;
  }
}

const a = new A<string>();
a.dataArr = 'khaled';
// a.dataArr = 22;//error
const b = new A<number>();
b.dataArr = 22;
// b.dataArr = 'khaled';//error

//some utilities

const arr = <readonly number[]>[1, 2, 3];
arr.push(55); //error
