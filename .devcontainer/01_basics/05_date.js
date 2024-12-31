//dates 

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let newCreateOne = new Date(2023,0,23)
// let newCreateOne = new Date(2023,0,23,5,3)
// let newCreateOne = new Date("2023-01-14")
let newCreateOne = new Date("01-14-2023")
// console.log(newCreateOne.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(newCreateOne.getTime())
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})