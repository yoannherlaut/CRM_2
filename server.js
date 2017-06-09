var express = require('express');
var app = express();
app.use(express.static('css'));
app.set('view engine', 'ejs');

var clientList = [{
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "0612457845"
  },
  {
    firstName: "Don",
    lastName: "Draper",
    email: "don@gmail.com",
    phone: "0654453587"
  },
  {
    firstName: "Jon",
    lastName: "Snow",
    email: "snow@gmail.com",
    phone: "0854357845"
  }
];

app.get('/', function(req, res) {
  res.render("clientList", {
    clients: clientList
  });
});

app.get('/delete', function(req, res) {
  console.log(req.query.i);
  clientList.splice(req.query.i, 1);
  res.render("clientList", {
    clients: clientList
  });
});

app.get('/add', function(req, res) {
  clientList.push(req.query);
  res.render("clientList", {
    clients: clientList
  });
});

app.get('/update', function(req, res) {
  clientList[req.query.i] = req.query;
  res.render("clientList", {
    clients: clientList
  });
});

app.listen(8080, function() {
  console.log("Server listening on port 8080");
});
