'use strict'
const fs = require('fs')

const read = (path, cb) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    cb(data)
  })
}

const write = (path, data) => {
  fs.writeFile(path, data, (err) => {
    if(err) throw err
    console.log('data was written')
  })
}

 //file1 + file2 + file3 = sum
