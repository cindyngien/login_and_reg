var users = require('../controllers/users.js');
console.log(users);
module.exports = function(app){
  app.post('/register', function(req,res){
      users.register(req,res);
  })
  app.post('/login', function(req,res){
      users.login(req,res);
  })
  app.get('/session', users.session);
}
