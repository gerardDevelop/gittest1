const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req,res) =>{
  //res.sendFile(path.join(__dirname+'/public/index.html'));
  res.sendFile('index.html');
});

app.get('/other', (req, res) => {
  res.send("hello hello hello");
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);