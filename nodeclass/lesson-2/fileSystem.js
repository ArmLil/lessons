'use strict'

const fs = require('fs');

// const data = fs.readFileSync('junk.js');
// console.log(data.toString())
// console.log('hello')

const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('junk.js', (err, data) => {
      if (err) return reject(error)
      return resolve(data)
      console.log(data);
    });
  })
}

return readFile()
.then((result) => console.log(result))
.catch((err) => console.error('Opps', err))

// fs.readFile('junk.js', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')
