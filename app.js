'use strict'

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('req.url', req.url)
  if(req.url === '/'){
    res.write('<html><h1>We are in the root</h1></html>')
  } else if (req.url === '/hello'){
    res.write('<html><h1>Hello Friend</h1></html>')
  } else if (req.url === '/bye'){
    res.write('<html><h1>Bye Friend</h1></html>')
  }
  res.end()
})

server.listen(3000, () => {
  console.log('server listening on port 3000')
})
