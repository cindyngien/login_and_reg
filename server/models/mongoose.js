//connect mongoose to your mongodb db
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
mongoose.connect('mongodb://localhost/login_db');

//create the blueprint for your schema
var userSchema = new mongoose.Schema({
  first_name: { type : String, required: true },
  last_name: { type : String, required: true },
  email: { type : String, required: true, unique: true },
  password: { type : String, required: true },
  birthday: { type : Date, required: true }
});

//check if the given pw matches the hashed pw in db - returns true or false
userSchema.methods.isValidPassword = function(password){
  return bcrypt.compareSync(password, this.password);
  console.log('in isValidPassword');
};

//convert the raw pw (this.password) into a hashed pw (bcrypt)
userSchema.pre('save', function(done){
  console.log('in pre save');
  console.log(this.password);
  var hashed = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  this.password = hashed;
  console.log("hashed password: " + hashed);
  done();
});

mongoose.model("User", userSchema);

var User = mongoose.model("User");
