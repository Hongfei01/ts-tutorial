class Book {
  private checkedOut: boolean = false;
  constructor(public title: string, public auth: string) {}
  get checkOut() {
    return this.checkedOut;
  }
  set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }
}

const book = new Book('react learn', 'john');
console.log(book.checkOut);
book.checkOut = true;
console.log(book.checkOut);

interface IPerson {
  name: string;
  age: number;
  get(): void;
  set: () => string;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}
  get(): void {
    console.log(this.age);
  }
  set(): string {
    return this.name;
  }
}

class Student extends Person {
  constructor(public name: string, public age: number) {
    super(name, age);
  }
}
const person = new Person('zs', 34);
person.get();
console.log(person.set());

const student = new Student('ls', 25);
student.get();
console.log(student.set());
