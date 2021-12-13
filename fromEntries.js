//fromEntries method is used to convert key value pairs into object

//object to array
const myobject = { id: 42, name:"franc" };
const myarray = Object.entries(myobject); 
console.log(myarray);


//array to object

let demoArray = [ ['name', 'siri'], ['id', '02']];
let object = Object.fromEntries(demoArray);
console.log(object);


//map to object
let myMap = new Map([
    ['1','siri'],
    ['2','alexa'],
    ['3', 'cortana']
])

object = Object.fromEntries(myMap);
console.log(object);