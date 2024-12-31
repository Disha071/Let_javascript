//array

const myArr = [7,5,6,0,'true','disha']
const myHeroes = ["staktiman","naagraj"]
const myArr2 =  new Array(1,2,3,4)
// console.log(myArr[2])


 //Arrat methods

// myArr.push(6)
// myArr.push(66)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(8))
// console.log(myArr.indexOf(5))

const newArr = myArr.join()


// console.group(myArr)
// console.group(typeof myArr)


//slice,splice

// console.log("A", myArr)

const myn1 = myArr.slice(1,3)
// console.log(myn1)

// console.log("B ",myArr)

const myn2 = myArr.splice(1,3)
// console.log(myn2)

// console.log("C ",myArr)



const marvel_heroes = ["ironman","thor","spiderman"]
const dc_heroes = ["superman","flash","batman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

const all_new_heroes =[...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("disha"))
// console.log(Array.from("disha"))
// console.log(Array.from({name :"disha"}))//interesting

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3))