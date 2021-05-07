const http = require('http');
const url = require('url');
const moment = require('moment');
const List = [{
  name: "John",
  content: "Lorem ipsum",
  timestamp: '2021-5-7 23:11:18'
}, {
  name: "John2",
  content: "Lorem ipsum2",
  timestamp: '2021-5-7 23:12:18'
}, {
  name: "John3",
  content: "Lorem ipsum3",
  timestamp: '2021-5-7 23:10:18'
}]
http.createServer((req, res) => {
  let parsedUrl=url.parse(req.url,true)
  res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500");
  if (parsedUrl.pathname=="/post") {
    console.log(JSON.stringify(parsedUrl.query));
    let query=parsedUrl.query
    query.timestamp=moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    console.log(query);
    List.push(parsedUrl.query)
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify(parsedUrl.query))
  }
  res.end()

}).listen(3000, ()=>{
  console.log("Listening");
})