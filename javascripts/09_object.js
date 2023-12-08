// singleton

//Object Literals
const mySym = Symbol("key1")
const JsUser = {

    name: "Deepak",
[mySym]: "key1",
    age: 18,
    email: "skumar@gmail.com",
    isLogedIn: false,
    lastloginDay: ["Monday", "saturday"]
}
// console.log(JsUser["age"])
// console.log(JsUser.name)
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email="deepkumar@gmail.com"
// Object.freeze(JsUser)
JsUser.email="dkumarsingh@gmail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello")
}
JsUser.greetingTwo = function(){
    console.log(`hello, ${this.name}`); //Referance object properties 
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())