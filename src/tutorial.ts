let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 10 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

console.log(items);

const names: string[] = ['jim', 'thiya', 'carson'];

function checkName(name: string): boolean {
  return names.includes(name);
}

function processInput(input: string | number) {
  if (typeof input === 'number') {
    console.log(input * 2);
  }
  if (typeof input === 'string') {
    console.log(input.toUpperCase());
  }
}
processInput(10);
processInput('hello');

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') return input * input;
  else
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
}

console.log(processData(10));
console.log(processData('hello'));
console.log(processData('Hello', { reverse: true }));

// type

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

// type guard  if we work with object
function printStaffDetails(t: Staff): void {
  if ('employees' in t) {
    console.log(`${t.name} is an manager, has ${t.employees.length} employees`);
  } else {
    console.log(`${t.name} is an employee in the ${t.department} department`);
  }
}

// interface

interface Books {
  readonly isbn: number;
  title: string;
  author: string;
  genre: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Books = {
  isbn: 123,
  title: 'deep work',
  author: 'cal work',
  genre: 'dfddf',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },

  // option 1
  // printSomething: function (someValue) {
  //   return someValue;
  // },

  // option 2
  printSomething: (someValue) => {
    console.log(deepWork.author);
    return someValue;
  },
  // option 3
  // printSomething(someValue) {
  //   return someValue;
  // },
};

deepWork.printAuthor();
console.log(deepWork.printSomething(23));

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(increase: number): number;
}

const Dell: Computer = {
  id: 132434,
  brand: 'Dell',
  ram: 123,
  upgradeRam(increase) {
    return this.ram + increase;
  },
};

Dell.storage = 256;
const upgradeRam = Dell.upgradeRam(234);
console.log(upgradeRam);
