'use strict'

const http = require('http');
const fs = require('fs');
const PATH1 = './tweet.js'
const PATH2 = './file2.js'

const write = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path1, JSON.stringify(data), function (err) {
      if (err) return reject(err)
      return resolve('data was written')
    });
  })
}

// Promise.reject('promise....')
// .then(console.log)
// .catch(console.log)

const read = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      //console.log(data)
      if (err) return reject(err);
      return resolve(data)
    })
  })
}

return read(PATH1)
.then((resultFromRead) => write(PATH2, resultFromRead))
.then((resultFromWrite) => console.log(resultFromWrite))
.catch((err) => console.error('Opps',err))
