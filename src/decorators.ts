////////////////////////////////////
//class decorator
////////////////////////////////////
function logger(target: Function) {
  console.log(target);
}

@logger
class Aa {
  private name: string = 'aa';
  public age: number = 99;
  constructor() {
    console.log('inside class');
  }
}
////////////////////////////////////
//factory decorator
////////////////////////////////////

function factory1(va: string) {
  console.log('💥 ~ factory1 ~ va', va);

  return function (target: Function) {
    console.log('factory1', va);
  };
}
function factory2(va: string) {
  console.log('💥 ~ factory2 ~ va', va);

  return function (target: Function) {
    console.log('factory2', va);
  };
}

// from down to up factory1 first
//but the factory from up to down factory2 first
@factory2('test2')
@factory1('test')
class B {
  private name: string = 'bb';
  public age: number = 88;
  constructor() {
    console.log('inside class');
  }
}
/////////////////////////////////////
// Method decorator
/////////////////////////////////////
function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log('target', target);
  console.log('propertyKey', propertyKey);
  console.log('descriptor', descriptor);
}

class Method {
  public aa: string = 'aa';
  @logMethod
  met() {
    console.log('inside method');
  }
}
//////////////////////////////////////////
//property decorator
//////////////////////////////////////////

function log(target: any, propertyName: string) {
  console.log('target', target);
  /* this is the prototype of the class if it was static, it would be the class itself */ const b =
    new target.constructor();
  console.log(b);
  console.log('propertyName', propertyName);
}

class Prop {
  @log
  nombre: string = 'prop';
  age: number = 99;
  constructor() {
    console.log('inside class');
  }
}

//////////////////////////////
//parameter decorator
//////////////////////////////
function logParameter(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log('target', target);
  console.log('propertyKey', propertyKey);
  console.log('parameterIndex', parameterIndex);
}

class Parameter {
  public aa: string = 'aa';
  method(@logParameter a: string) {
    console.log('inside method');
  }
}

//////////////////////////////
// Accessor decorator
//////////////////////////////

function logAccessor(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log('target', target);
  console.log('propertyKey', propertyKey);
  console.log('descriptor', descriptor);
}

class Accessor {
  private _name: string = 'name';
  @logAccessor
  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
}

//unique

interface Int<T> {
  aw(ar: T): T;
}

class II<T> implements Int<T> {
  constructor(

  ) {
    console.log('inside class');
  }
  aw(ar: T): T {
    return ar;
  }
}


const iii = new II<number>();
iii.aw(22);