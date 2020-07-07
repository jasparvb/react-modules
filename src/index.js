import fruits from './fruits';
import {choice, remove} from './helpers';

let randFruit = choice(fruits);

console.log(`I'd like one ${randFruit}, please`);
console.log(`Here you go: ${randFruit}`);
console.log(`Delicious! May I have another?`);

fruits = remove(fruits, randFruit);
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);