var express = require('express');
var hamljs = require('hamljs')
var app = express();
app.engine('.haml', require('hamljs').renderFile);
app.set("view engine", "hamljs");

app.get('/', function(req, res) {
  var nombre = new Object();
  nombre.primerNombre = "Hector ";
  nombre.apellido = "Quinones";

  var numero1 = 4;
  var numero2 = 8;

  var paises = ["México", "China", "Canada", "Papua Nueva Guinea"];


  res.render("index.hamljs", {nombre:nombre, numero1:numero1,
     numero2:numero2, paises:paises});
});

app.listen(8080);
