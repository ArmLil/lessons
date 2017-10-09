'use strict'

const http = require('http');

const getReqBody = (request, cb) => {
  request.on('data', (chunk) => {
    const dataArr = []
    dataArr.push(chunk)
    let body = Buffer.concat(dataArr)
    body = JSON.parse(body.toString())
    return cb(JSON.stringify(body))
  })
}

http.createServer((request, response) => {
  console.log(request.headers)
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  if (request.method === 'POST' && request.url === '/echo') {
    console.log('/echo')
    getReqBody(request,(body) => {
      response.write(body)
      response.end()
    })
    //request.pipe(response);
    //response.write('hello hello hello')
    //response.end()
  } else {
    response.statusCode = 404;
    response.write('Bad Request')
    response.end();
  }
}).listen(8080, () => console.log('listenning 8080'));
