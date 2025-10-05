var globalVar = "I'm a global variable";
let globalLet = "I'm also gloabl, but scoped with let";
const globalConst = "I'm a global constant";

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
console.log(globalVar);
console.log(globalLet);
console.log(globalConst); 

console.log(blockVar); //Should display error
console.log(blockLet); //Should display error

show();
console.log(functionVar); //Should display error
console.log(functionLet); //Should display error
console.log(functionConst); //Should display error
