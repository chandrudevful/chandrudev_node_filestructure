const express = require('express');
const app = express();
var cors = require('cors')
const path = require('path')
const bodyParser = require("body-parser");


const postCommentRouter = require('./router/post-comment');
const getCommentRouter = require('./router/get-comment');

const config = require('../config/config');

// Then use it before your routes are set up:
app.use(cors());
app.use(bodyParser.json());

app.use((_req,_res,_next)=>{
  console.log('request url: ', _req.url);
  _next();
});


app.get('/api', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})


app.use('/postcomment', postCommentRouter);

app.use('/getcomments', getCommentRouter);


app.listen(config.nodePort,()=>{
  console.log('Node Server listening at the Port: ',config.nodePort);
});