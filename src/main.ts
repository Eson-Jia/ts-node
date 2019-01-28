import { sayHello, TestPromise } from "./greet";

console.log(sayHello("TypeScript"));

const theMap = new Map<number, string>();
theMap.set(1, 'one');
console.log(theMap.get(1));
const test = async () => {
    console.log(await TestPromise('hello'));
}

test();