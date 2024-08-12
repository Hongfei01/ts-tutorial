import type { Student, Person } from './types';
const student: Student = { name: 'zs', age: 45 };
const peter: Person = { id: 1, name: 'peter' };
console.log(student, peter);
export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
