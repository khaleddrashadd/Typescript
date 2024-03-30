type As = {
  as: string;
  grade: number;
  ver?: boolean;
};

const ob = {
  as: 'A',
  grade: 1,
};

const bb: Readonly<As> = {
  ...ob,
  ver: true,
};

//even the property is optional, it is required in the type
const cc: Required<As> = {
  ...ob,
  ver: true,
};

const dd: Partial<As> = {
  as: 'A',
};

/////////////////

//Record work for object key type and value type
type B = 'A' | 'B' | 'C';
type C = 1 | 2 | 3;
const aaaa: Record<B, C> = {
  A: 1,
  B: 2,
  C: 3,
};
////////////
//Pick and Omit
////////////
//Pick what you want to use from another type or interface
type D = Pick<As, 'as' | 'grade'>;
const ee: D = {
  as: 'A',
  grade: 1,
};

//omit what you don't want to use from another type or interface

type F = Omit<As, 'as'>;
const ff: F = {
  grade: 1,
};

//Exclude and Extract and NonNullable

//the diffrence between Exclude and omit is that Exclude is for key of type and omit is for key of object

type G = 'Khaled' | 'Ali' | 'Mohamed' | null | undefined;

// this removes Khaled and null and undefined
const gg: Exclude<G, 'Khaled'> = 'Ali';
console.log('💥 ~ gg', gg);

//this only takes Khaled and Ali
type H = Extract<G, 'Khaled' | 'Ali'>;
const hh: H = 'Ali';
console.log('💥 ~ hh', hh);

//this removes null and undefined
type I = NonNullable<G>;
const ii: I = 'Ali';

//////////////
const fn = (name: string, age: number) => {
  return {
    name,
    age,
  };
};

const jj: ReturnType<typeof fn> = {
  name: 'sa',
  age: 44,
};

const ooo: Parameters<typeof fn> = ['sa', 44];
//////////////////////
//awaited

const prom: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('done');
  }, 2000);
});

type P = Awaited<typeof prom>; //string