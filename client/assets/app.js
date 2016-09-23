var app = angular.module('app', ['ngRoute', 'ngMessages', 'ngCookies']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/index.html',
      controller: 'userController'
    })
    .when('/register', {
      templateUrl: '/partials/register.html',
      controller: 'userController'
    })
    .when('/login', {
      templateUrl: '/partials/login.html',
      controller: 'userController'
    })
    .when('/success', {
      templateUrl: '/partials/success.html',
      controller: 'userController'
    })
    .when('/logout', {
      templateUrl: '/partials/index.html',
      controller: 'userController'
    })
    .otherwise({
      redirectTo: '/',
      controller: 'userController'
    })
});
