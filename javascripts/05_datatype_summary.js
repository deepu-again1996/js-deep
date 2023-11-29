// # Primitive

//7- sting , Number, Boolean, null, undefined, symbol, BigInt



const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id==anotherID);

const BigNumber = 2341456134171546165322481n

// # Reference (Non primitive) 
//  - Array object, Functions

const heros = ["shaktiman", "naagraj", "ironman"];
let myobj={

    name:  "Deepak",//objects
    age: 22,
}
const Myfunction = function(){

    console.log("hello")

}

console.log(typeof BigNumber)

