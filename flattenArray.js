let complexArray = ["one", ["two","three",["four","five",["six"]]]];

//flatten data

console.log(complexArray.flat());
console.log(complexArray.flat(2));
console.log(complexArray.flat(3));


//flatMap

let array = [1,2,3,4,5];

//gives nested array
console.log(array.map(num => [num * 2]));

//flat map
console.log(array.flatMap(num => [num * 2]));


let string  = ["ES10", "", "Features"];

console.log(string.map(word => word.split(" ")));
console.log(string.flatMap(word => word.split("")));