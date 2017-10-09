'use strict'

const http = require('http');

const server = http.createServer((req, res) =>{
  let str = req.url
  let param1 = '/search?t='
  let param2 = '&filter='
  let strJSON = QueryToJSON(str)
  if (str === '/'){
    res.write('<html><h1>We are in the root</h1></html>')
  } else if(str === '/hello'){
    res.write('<html><h1>Hello Friend</h1></html>')
  } else if(str === '/bye'){
    res.write('<html><h1>Bye Friend</h1></html>')
  } else if(str.includes(param1)){
    let result = '<html><h1>Will search for '

    for(var k in strJSON) {
      if (k === 'search?t'){
        result += strJSON[k]
      } else {
        result += ', ' + k + ' set to ' + strJSON[k]
      }
    }
    result += '</h1></html>'
    res.write(result);
  }

  function QueryToJSON(str) {
      let pairs = str.substring(1,str.length).split('&');
      let result = {};
      pairs.forEach(function(pair) {
          pair = pair.split('=');
          result[pair[0]] = decodeURIComponent(pair[1] || '');
      });
      console.log(result)
      return JSON.parse(JSON.stringify(result));
  }

  res.end()
})

server.listen(3000)
