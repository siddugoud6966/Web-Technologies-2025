// app.js
var app = angular.module('financeTracker', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/dashboard', {
        templateUrl: 'dashboard.html',
        controller: 'DashboardController'
    })
    .when('/expenses', {
        templateUrl: 'expenses.html',
        controller: 'ExpensesController'
    })
    .when('/income', {
        templateUrl: 'income.html',
        controller: 'IncomeController'
    })
    .otherwise({
        redirectTo: '/dashboard'
    });
}]);