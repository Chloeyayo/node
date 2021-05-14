const express= require('express');
const app = express();
const moment= require('moment');
const list = [{
  name: "John",
  content: "Lorem ipsum",
  timestamp: '2021-05-07 23:11:18'
}, {
  name: "John2",
  content: "Lorem ipsum2",
  timestamp: '2021-05-07 23:12:18'
}, {
  name: "John3",
  content: "Lorem ipsum3",
  timestamp: '2021-05-07 23:10:18'
}]
app.all("*",(_req, res,next) => {
  res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500");
  next();
})
app.get('/post',(req, res)=>{
  let query={}
  query.name = req.query.name
  query.content = req.query.content
  query.timestamp =moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  list.push(query)
  res.send(list)
})
app.get('/list',(req, res)=>{
  res.send(list)
})
app.listen(3000,()=>{
console.log('listening on 3000')
})
