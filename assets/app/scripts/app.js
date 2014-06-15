'use strict';

var grassroot = angular.module('grassroot', ['ngCookies','ngResource','ngSanitize','ngRoute', 'ngTouch'])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .when('/events/:id',  {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'
      })
      .when('/take_action',  {
        templateUrl: 'views/take_action.html',
        controller: 'TakeActionCtrl'
      })
      .when('/petitions',  {
        templateUrl: 'views/petitions.html',
        controller: 'PetitionsCtrl'
      })
      .when('/petitions/:id',  {
        templateUrl: 'views/petition.html',
        controller: 'PetitionCtrl'
      })
      .when('/sign_petition/:id',  {
        templateUrl: 'views/sign_petition.html',
        controller: 'SignPetitionCtrl'
      })
      .when('/newsletter',  {
        templateUrl: 'views/newsletter.html',
        controller: 'NewsletterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
