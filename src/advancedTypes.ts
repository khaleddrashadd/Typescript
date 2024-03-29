//intersecting types

// type A = {
//   name: string;
//   age: number;
// };

// type B = {
//   phone: number;
// };

// type C = A & B;

// const cc: C = {
//   name: 'john',
//   age: 23,
//   phone: 1234567890,
// };

///////////THE SAME AS ABOVE/////////////
// interface A  {
//   name: string;
//   age: number;
// };

// interface B  {
//   phone: number;
// };

// interface C extends A, B {}

// const cc: C = {
//   name: 'john',
//   age: 23,
//   phone: 1234567890,
// };

//intersecting types

// type A

// type A = number | string;
// type B = number | boolean;
// type C = A & B; //number
///////////////////////////////////////////////////

// type A

//discriminated unions

// type A = {
//   type: 'bird';
//   flyingSpeed: number;
// };

// type B = {
//   type: 'horse';
//   speed: number;
// };

// type C = A | B;

// const fn = (animal: C) => {
//   // console.log(animal.speed);
//   //one solution is
//   // if ('speed' in animal) console.log(animal.speed);

//   //second solution is

//   if (animal.type === 'horse') console.log(animal.speed);
// };

// fn({ type: 'horse', speed: 100 });
