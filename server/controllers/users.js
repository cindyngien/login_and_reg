var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {
  register : function(req, res) {
    var user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      password_confirm: req.body.password_confirm,
      birthday: req.body.birthday,
    })

    //if the req obj comes back with no errors and data, store that data as the data of whomever is in session
    user.save(function(err, data){
      if(!err && data) {
        req.session.userId = data._id;
        req.session.first_name = data.first_name;
      }
    });
  },
  login: function(req, res) {
    // first check if the user exists, then check if password matches hashed pw in db
    User.findOne({
      email: req.body.email,
    }, function(err, user){
      console.log(user)
      if(!user) {
        return res.json({success: false, message: 'the user does not exist'});
      }
    console.log(req.body.password);
    var result = user.isValidPassword(req.body.password);
      console.log('does password match hash?', result, user);
    //if the password is NOT valid, return an error message
    if(!result) {
      return res.send({success: false, message: 'this pw did not match'});
    }
    req.session.userId = user._id;
    req.session.first_name = user.first_name;
    // send success message if no errors
    res.send({success: true, user: user.first_name});
    });
  },
  session: function(req, res){
    console.log(req.session);
    return res.json(req.session);
  }
}
