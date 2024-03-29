interface ob {
  name: string;
  age: number;
  gpa?: number;
  readonly [key: string]: string | number | undefined;
}

let obj: ob = {
  name: 'John',
  age: 30,
  address: 'New York',
};

// console.log(obj.name); // John
// console.log(obj['name']); // John

obj.age = 22;
// console.log(obj.age); // 22

type letral = 'name' | 'age' | 'gpa';
type objType = Record<letral, number>;

let obj2: objType = {
  name: 1,
  age: 2,
  gpa: 3,
};

const oo = {
  name: 'John',
  age: 30,
  address: 'New York',
  aa: {
    bb: 'bb',
    cc: 'cc',
  },
};
//this is shallow copy it if changed nested object it will change too
const aaa = { ...oo };
oo.aa.bb = 'khaled';
console.log('💥 ~ aaa', aaa);
//this is deep clone 
const deepClone = structuredClone(oo);
console.log('💥 ~ deepClone', deepClone);
