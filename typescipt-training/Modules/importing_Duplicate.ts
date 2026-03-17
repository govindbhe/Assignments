import { PI, add, substraction } from './named_export.ts';
import { PI as pi, add as sum, substraction as sub } from './named_export.ts';

console.log(" Value of Pi :", PI);
console.log("Addiition of 10 and 5 Is :", sum(10, 5));
console.log("substration of 10 and 5 is :", sub(10, 5));