globalThis.num = 244;

function setGlobalData() {
    globalThis.mydata ='this is a global data';
    console.log(globalThis.num)
}
setGlobalData();
console.log(globalThis.mydata ); 