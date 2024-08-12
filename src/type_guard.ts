type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('studying') }
    : { name: 'mary', login: () => console.log('logging in') };
};

const person = randomPerson();

function isStudent(person: Person): person is Student {
  //return 'study' in person;
  return (person as Student).study !== undefined;
}

if (isStudent(person)) {
  person.study();
} else {
  person.login();
}

type IncreaseAction = {
  user: string;
  amount: number;
  timestamp: number;
  type: 'increase';
};

type DecreaseAction = {
  user: string;
  amount: number;
  timestammp: number;
  type: 'decrease';
};

type Action = IncreaseAction | DecreaseAction;

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'increase':
      return state + action.amount;

    case 'decrease':
      return state - action.amount;

    default:
      const unexpectedAction: never = action;
      throw new Error(`${unexpectedAction}`);
  }
}

const num = reducer(12, {
  user: 'john',
  amount: 100,
  type: 'increase',
  timestamp: 1000,
});
console.log(num);
