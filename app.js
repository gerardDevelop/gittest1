const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

/*

  FOR HTTPS ----------------------------------------------

  const https = require('https');
  const fs = require('fs');

const httpsOptions = {
  cert: fs.readFileSync(path.join(_dirname, 'ssl', 'server.crt')),
  key: fs.readFileSync(path.join(_dirname, 'ssl', 'server.key'))
};


https.createServer(httpsOptions, app)
  .listen(port, () => {
    console.log("Listening on port " + port);
  });

  --------------------------------------------------------

*/

app.get('/other', (req, res) => {
  res.send("hello hello hello");
}); 
/*
app.get('*', (req, res) =>{
  //res.sendFile(path.join(__dirname+'/public/index.html'));
  //res.sendFile('public/index.html');
  res.sendFile(path.join(__dirname + 'public/index.html'));
}); 
*/
const port = process.env.PORT || 8080;
app.listen(port);

console.log('App is listening on port ' + port);