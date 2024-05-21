// import './classes';
// import './advancedTypes';
// import './indexSignature';
// import './generic';
// import './decorators';
// import './utilities';

// import './try';
type FF = {
  [key: string]: number;
};

function time(cb: any) {
  const t1 = performance.now();
  cb();
  const t2 = performance.now();
  console.log(`Time: ${(t2 - t1) / 1000} s`);
}

const fs = (n: number): void => {
  let sum: number = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
};
const ss = (n: number): void => {
  const sum = (n * (n + 1)) / 2;
  console.log(sum);
};

// this o notation is O(n)
// time(() => fs(10000));
// this o notation is O(1)
// time(() => ss(10000));

function test(arr: number[], arg: number) {
  
}
