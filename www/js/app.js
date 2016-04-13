/**
 * Created by Daniel on 03/03/2016.
 */


var yodApp = angular.module('yodApp', ['ngRoute','mgcrea.ngStrap']);


yodApp.controller('HomeController', function($scope) {
    $scope.selectedState = "";
    $scope.states = categories;
});



yodApp.controller('MentorsControllers', function($scope) {

    $scope.message = 'Everyone come and see how good I look!';
    console.log("hello");
    console.log(message);
});

yodApp.controller('HelpController', function($scope) {

    $scope.message = 'Everyone come and see how good I look!';

});

yodApp.controller('mentorProfileController', function($scope) {

    $scope.message = 'Everyone come and see how good I look!';
});

yodApp.controller('carouselControler', function($scope) {

    $scope.message = 'Everyone come and see how good I look!';
});



    yodApp.config(function($routeProvider) {

        $routeProvider
            .when('/', {
                controller:'HomeController as homectrl',
                templateUrl:'home.html'
            })
            .when('/mentors', {
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
            .when('/carousel', {
                controller:'carouselControler as carouselctrl',
                templateUrl:'carousel.html'
            })
            .otherwise({
                redirectTo:'/'
            });

    });


