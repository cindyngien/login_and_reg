
var express = require("express"),
    app = express(),
    path = require("path"),
    bp = require("body-parser"),
    bcrypt = require("bcrypt"),
    session = require("express-session"),
    auth = require("passport"),
    mongoose = require("mongoose"),

    model = require(__dirname + '/server/models/mongoose.js'),
    routes = require(__dirname + '/server/config/routes.js');

//******************************************************************************

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

//keeps track of how long the user's session is
app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}));
app.post('/login',function(req,res){
  sess = req.session;
//In this we are assigning email to sess.email variable.
//email comes from HTML page.
  sess.first_name=req.body.email;
  res.end('done');
});

//******************************************************************************
routes(app);

var server = app.listen(8000, function() {
  console.log("the server is listening on port 8000");
});
