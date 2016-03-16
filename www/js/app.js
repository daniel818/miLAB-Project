/**
 * Created by Daniel on 03/03/2016.
 */


var yodApp = angular.module('yodApp', ['ngRoute','mgcrea.ngStrap']);

yodApp.controller('mainController', function($scope) {

    $scope.message = 'Everyone come and see how good I look!';
});

yodApp.controller('HomeController', function($timeout ,$scope) {
    $scope.selectedState = "";
    $scope.states = categories;
});



yodApp.controller('MentorsControllers', function($scope) {

    $scope.message = 'Everyone come and see how good I look!';
});

yodApp.controller('HelpController', function($scope) {

    $scope.message = 'Everyone come and see how good I look!';
});

yodApp.controller('mentorProfileController', function($scope) {

    $scope.message = 'Everyone come and see how good I look!';
});



    yodApp.config(function($routeProvider) {

        $routeProvider
            .when('/', {
                controller:'HomeController as homectrl',
                templateUrl:'home.html'
            })
            .when('/mentors.html', {
                controller:'MentorsControllers as mentorctrl',
                templateUrl:'mentors.html'
            })
            .when('/new', {
                controller:'HelpController as helpmectrl',
                templateUrl:'help.html'
            })
            .when('/mentorProfile', {
                controller:'mentorProfileController as mentorProfilectrl',
                templateUrl:'mentorProfile.html'
            })
            .otherwise({
                redirectTo:'/'
            });
    })

//Category array
var categories = ["Designer", "Marketing", "Management", "Copywriter", "Project Manager", "JEDI", "Producer", "Business intelligent"];
