function genericFunc<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunc<string>('hello, world');
const someNumberValue = genericFunc<number>(2);

interface GenericInterface<T> {
  value: T;
  getValue(): T;
}

const genericString: GenericInterface<string> = {
  value: 'hi',
  getValue() {
    return this.value;
  },
};

console.log(genericString);

async function someFunc(): Promise<string> {
  return 'hell';
}
const value = await someFunc();
console.log(value);
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

createArray<string>(10, 'hi');
createArray<number>(100, 10);

type Car = {
  brand: string;
  price: number;
};

type Student = {
  name: string;
  age: number;
};

type Product = {
  name: string;
  price: number;
};

const car: Car = {
  brand: 'huawei',
  price: 1500,
};

const student: Student = {
  name: 'jim',
  age: 33,
};

const product: Product = {
  name: 'apple',
  price: 100,
};

// function printName<T extends Student | Product>(input: T): void {
//   console.log(input.name);
// }
function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName(student);
printName(product);

interface StoreData<T = any> {
  data: T[];
}

const storedNum: StoreData<number> = {
  data: [1, 2, 3],
};

const storedSome: StoreData = {
  data: ['ss', 1],
};
