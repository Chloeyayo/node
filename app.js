const http = require('http');
const url = require('url');
const moment = require('moment');
const list = [{
  name: "John",
  content: "Lorem ipsum",
  timestamp: '2021-05-07 23:57:50'
}, {
  name: "John2",
  content: "Lorem ipsum2",
  timestamp: '2021-05-07 23:57:50'
}, {
  name: "John3",
  content: "Lorem ipsum3",
  timestamp: '2021-05-07 23:57:50'
}]
http.createServer((req, res) => {
  let parsedUrl=url.parse(req.url,true)
  res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500");
  if (parsedUrl.pathname=="/post") {
    let query=parsedUrl.query
    query.timestamp=moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    console.log(list);
    list.push(parsedUrl.query)
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify(list))
  }else if(parsedUrl.pathname=="/get") {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify(list))
  }
  res.end()

}).listen(3000, ()=>{
  console.log("listening");
})