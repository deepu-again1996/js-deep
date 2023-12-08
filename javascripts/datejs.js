 let myDate= new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
let myTimeStap = Date.now()
// console.log(myTimeStap)
// console.log(myDate.getTime())
// console.log(Math.floor(myDate.getDate()/1000))

myTimeStap.toLocaleString('default',{
    weekday: "long"
})
console.log(myTimeStap)