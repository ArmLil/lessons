const stringifiedArr = JSON.stringify([1,2,3])
console.log(stringifiedArr)//[1,2,3]

console.log(stringifiedArr instanceof String) //false
console.log(typeof(stringifiedArr)) //string

console.log(JSON.parse('[1,2,3]')) //[1,2,3]
console.log(JSON.parse('[1,2,3]') instanceof Array) //true
console.log(typeof(JSON.parse('[1,2,3]'))) //object

//console.log(JSON.parse('hello')) //error
//console.log(JSON.parse("hello")) //error

console.log(JSON.parse('"hello"')) //hello
console.log(typeof(JSON.parse('"hello"')))//string
