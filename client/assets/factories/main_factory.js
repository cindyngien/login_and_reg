
app.factory('userFactory', function($http, $location){
  //$http gives us access to the get and post routes, server endpoints
  var factory = {};
 

  factory.registerUser = function(new_user, callback){
    console.log('in register new user factory', new_user);
    $http.post('/register', { first_name: new_user.first_name, last_name: new_user.last_name, email: new_user.email, password: new_user.password, birthday: new_user.birthday }).success(function(data){
      callback(data);
      console.log(new_user + " has been added to the db and redirected to /success");
    })
  };
  factory.loginUser = function(user, callback){
    console.log('in login user factory', user);
    $http.post('/login', user).success(function(data){
      callback(data);
      user_session = data;
      console.log(user + "has been logged in and redirected to /success");
    })
  };
  factory.logoutUser = function(){
    console.log('in logout user factory');
    user_session = {};
    console.log("the user has been logged out and redirected to /index");
  }
  return factory;
});
