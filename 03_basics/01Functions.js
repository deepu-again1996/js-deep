function addTwoNumber(number1, number2){
    let result = number1 + number2
    return result
    

}

let result = addTwoNumber(3,4)
// console.log("Deepak", result)

function userLogin(username){
    if(username === undefined){
        console.log("Please Enter a User Name");
        return
    }
    return `${username} just logged in` 

}
//console.log(userLogin("Deepak"))
// console.log(userLogin())

function calculateCartPrice(...num1){
    return num1 
    
}
// console.log(calculateCartPrice(200,500,6000,5000,))


const obj2 = {
    name: "Deepak",
    age: "12"
}
// const obj3 = {
//     name: "Deepak",
//     age: "12"
// }

function objtest(finalresult){
    console.log(`this is my Name ${finalresult.name} and this is my age ${finalresult.age}`)
}
objtest(obj2)