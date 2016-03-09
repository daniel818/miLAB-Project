/**
 * Created by Daniel on 03/03/2016.
 */
var yodApp = angular.module('yodApp', ['ngRoute','mgcrea.ngStrap']);

yodApp.controller('mainController', function($scope) {

    $scope.message = 'Everyone come and see how good I look!';
});

yodApp.controller('HomeController', function($timeout ,$scope) {
    $scope.selectedState = "";
    $scope.states = ["Visual Designer", "Website Coordinator", "Communications Manager", "Editor Copywriter", "Project Manager"];
});



yodApp.controller('MentorsControllers', function($scope) {

    $scope.message = 'Everyone come and see how good I look!';
});

yodApp.controller('HelpController', function($scope) {

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
            .otherwise({
                redirectTo:'/'
            });
    })
