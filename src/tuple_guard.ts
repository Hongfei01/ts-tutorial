const person: [string, number] = ['john', 25];
person.push('hello');
person.push(1);
console.log(person);

const dog: [string, number?] = ['rex'];
console.log(dog);

enum ServerResponseStatus {
  Success,
  Error,
}

console.log(ServerResponseStatus);

enum UserRole {
  Admin,
  manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}

const peter = createUser({
  id: 1,
  name: 'peter',
  role: UserRole.Admin,
  contact: ['john@gmail.com', '343434'],
});

console.log(peter);
