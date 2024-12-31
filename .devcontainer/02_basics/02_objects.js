//singleton constructor-singleton

//object literals

const mySym = Symbol("key1")
const jsUser ={
    name :"Disha",
    "Fullname":"Disha Gupta",
    [mySym]:"myKey1",
    age : 18,
    location:"mumbai",
    email : "dishagupta@gmail.com",
    isloggedIn : false,
    LastLoggerDays : ["Monday","Staurday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log( typeof jsUser["Fullname"])
// console.log(typeof jsUser[mySym])

jsUser.email ="hinakhan@gmail.com"
// console.log(jsUser.email)

// Object.freeze(jsUser)
jsUser.email ="hinakhan@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
// console.log("hello js user");
}
jsUser.greeting2 = function(){
    // console.log(`hello js user ,${this.name}`);
    }
// console.log(jsUser.greeting())
// console.log(jsUser.greeting2())


//-part2-//

// const tinderuser = new Object()
const  tinderuser ={}
tinderuser.id= "345abs"
tinderuser.name = " taomm"
tinderuser.islOggedIn = false
// console.log(tinderuser)

const regularuser = {
    email  : " sommy@gmail.com",
    fullname : {
        userfullname:{
            firstname : "Diya",
            lastname :"aggrawal"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname)

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
// const obj3 ={obj1, obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)