interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managerPeople(): void;
  delegate(): void;
}

function getEmployee(): Person | DogOwner | Manager {
  const randNum = Math.random();
  if (randNum < 0.33) {
    return {
      name: 'john',
    };
  } else if (randNum < 0.66) {
    return {
      name: 'jim',
      dogName: 'rex',
    };
  } else {
    return {
      name: 'peter',
      managerPeople() {
        console.log('managing people...');
      },
      delegate() {
        console.log('delegate method ...');
      },
    };
  }
}

const employee = getEmployee();

console.log(employee);

function isManager(t: Person | DogOwner | Manager): t is Manager {
  return 'managerPeople' in t;
}

if (isManager(employee)) {
  employee.delegate();
}
