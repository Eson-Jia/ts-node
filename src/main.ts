import { sayHello, TestPromise } from "./greet";
import { Sum } from './math';
import { MyUpper } from './str';
import { readFile } from 'fs';

console.log(sayHello("TypeScript"));

const theMap = new Map<number, string>();
theMap.set(1, 'one');
console.log(theMap.get(1));
const test = async () => {
    console.log(await TestPromise('hello'));
}

test();

const sum = Sum([1, 2, 2, 3, 3, 3, 3]);
console.log(MyUpper('sum'), sum);

readFile('./README.md', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});