var fs = require('fs');
var express = require('express');
var hamljs = require('hamljs');
var app = express();


app.get('/', function(req, res) {
  var hamlView = fs.readFileSync('views/index.haml', 'utf-8');
  var nombre = "Hector";

  var paises = ['México', 'China', 'Canada', 'Papua Nueva Guinea', "Republica democratica del Congo"];

  res.end(hamljs.render(hamlView, {locals: {nombre:nombre, paises:paises}}));

});

app.listen(8080);
console.log('App listenting in port:',8080);
